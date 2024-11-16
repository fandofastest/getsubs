const express = require("express");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const https = require("https");
require("dotenv").config(); // Memuat konfigurasi dari file .env

const app = express();
const port = process.env.PORT;

// Mendapatkan kredensial dari file .env
const apiKey = process.env.API_KEY; // API key untuk login dan request subtitle
const username = process.env.USERNAMEX; // Username untuk login
const password = process.env.PASSWORDX; // Password untuk login
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Fungsi untuk login dan mendapatkan token
async function getAuthToken() {
  const url = "https://api.opensubtitles.com/api/v1/login";

  const data = {
    username: username,
    password: password,
  };
  const headers = {
    "Api-Key": apiKey,
    "Content-Type": "application/json",
    "User-Agent": "fandoapp",
  };
  try {
    console.log(data);
    console.log(apiKey);
    const response = await axios.post(url, data, {
      headers: headers,
    });

    if (response.data.token) {
      return response.data.token;
    } else {
      throw new Error("Token tidak ditemukan dalam response login");
    }
  } catch (error) {
    console.error("Error login:", error);
    throw new Error("Login gagal, token tidak dapat diambil");
  }
}

// Fungsi untuk mengambil file_id berdasarkan imdb_id dan language
async function getFileId(imdbId = "tt4154796", language = "id", token) {
  const url = "https://api.opensubtitles.com/api/v1/subtitles";

  const requestUrl = `${url}?imdb_id=${imdbId}&languages=${language}`;

  try {
    const response = await axios.get(requestUrl, {
      headers: {
        "Api-Key": apiKey,
        Authorization: `Bearer ${token}`,
        "User-Agent": "fandoapp",
      },
    });

    const subtitlesData = response.data.data;
    console.log(subtitlesData[0].attributes.files[0].file_id);

    if (subtitlesData && subtitlesData.length > 0) {
      return subtitlesData[0].attributes.files[0].file_id;
    } else {
      throw new Error("Tidak ada subtitle ditemukan.");
    }
  } catch (error) {
    console.error("Error fetching file_id:", error.message);
    throw new Error("Terjadi kesalahan saat mengambil file_id.");
  }
}

// Fungsi untuk mendownload subtitle dan menyimpannya ke folder 'uploads'
async function downloadSubtitle(fileId, imdbId, language, token) {
  const url = "https://api.opensubtitles.com/api/v1/download";

  const data = {
    file_id: fileId,
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`, // Menggunakan token yang didapat dari login
        "Content-Type": "application/json",
        "User-Agent": "fandoapp v1.2.3",
        "Api-Key": apiKey,
      },
    });

    if (response.data && response.data.link) {
      const downloadLink = response.data.link;
      const fileName = `${imdbId}-${language}.srt`;
      const filePath = path.join(__dirname, "uploads", fileName);

      if (!fs.existsSync(path.join(__dirname, "uploads"))) {
        fs.mkdirSync(path.join(__dirname, "uploads"));
      }

      const writer = fs.createWriteStream(filePath);
      https.get(downloadLink, (response) => {
        response.pipe(writer);

        writer.on("finish", () => {
          console.log(`File telah diunduh dan disimpan sebagai ${filePath}`);
        });

        writer.on("error", (err) => {
          console.error("Error writing file:", err.message);
        });
      });
    } else {
      throw new Error("Gagal mendapatkan link download.");
    }
  } catch (error) {
    console.error("Error fetching download link:", error.message);
    throw new Error("Terjadi kesalahan saat mengambil link download.");
  }
}

// Fungsi utama untuk mengambil file subtitle dengan cache
async function getAndDownloadSubtitle(imdbId = "tt4154796", language = "id") {
  const fileName = `${imdbId}-${language}.srt`;
  const filePath = path.join(__dirname, "uploads", fileName);

  // Cek apakah file sudah ada di folder uploads (cache)
  if (fs.existsSync(filePath)) {
    console.log("File sudah ada di cache, mengirimkan file dari cache...");
    return filePath;
  }

  try {
    // Login untuk mendapatkan token
    const token = await getAuthToken();

    // Ambil file_id dengan imdbId dan language yang diberikan
    const fileId = await getFileId(imdbId, language, token);
    console.log("File ID:", fileId);

    // Jika file belum ada di cache, lakukan download subtitle dan simpan
    await downloadSubtitle(fileId, imdbId, language, token);

    // Kembalikan path file yang baru diunduh
    return filePath;
  } catch (error) {
    console.error("Error:", error.message);
    throw new Error("Terjadi kesalahan saat mengunduh subtitle.");
  }
}

// Express route untuk mendownload subtitle
app.get("/download-subtitle", async (req, res) => {
  const { imdb_id = "tt4154796", language = "id" } = req.query;

  console.log(imdb_id, language);
  // xxx;

  try {
    // Panggil fungsi untuk mendapatkan path file subtitle
    const filePath = await getAndDownloadSubtitle(imdb_id, language);

    // Setelah berhasil mendapatkan file, kirimkan link dalam format JSON
    const downloadLink = `${req.protocol}://${req.get(
      "host"
    )}/uploads/${path.basename(filePath)}`;

    // Kirimkan JSON berisi link download
    res.redirect(downloadLink);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat memproses permintaan.",
      error: error.message,
    });
  }
});

// Menjalankan server Express
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
