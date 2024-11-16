# subtranslator
[![npm](https://img.shields.io/npm/v/subtranslator.svg?style=flat-square)](https://www.npmjs.com/package/subtranslator)


npm package that you can translate your subtitles files.

![alt text](https://github.com/hamedpa/subtranslator/blob/master/img/logo.png?raw</td>true)

## Installation

###  npm
```shell
npm i subtranslator
```

### git

```shell
git clone https://github.com/hamedpa/subtranslator.git
```

## Usage
Translate subtitle files with calling below function,
this function can detect subtitle language and you can select target language as third parameter.

```js
const subtranslator = require('subtranslator');

subtranslator.translate('mr.bean.srt','translated.srt','en');
```

### Language codes

<table>
  <tr>
    <th>Code</th>
    <th>Language</th>
    
  </tr>
  <tr>
    <td>en</td>
    <td>English</td>
  </tr>
    <tr>
    <td>zh-CN </td> 
    <td>Chinese (Simplified)</td>
    </tr>
    <tr>
    <td>zh-TW </td> 
    <td>Chinese (Traditional)</td>
    </tr>
    <tr>
    <td>af </td> 
    <td>Afrikaans</td>
    </tr>
    <tr>
    <td>am </td> 
    <td>Amharic</td>
    </tr>
    <tr>
    <td>ar </td> 
    <td>Arabic</td>
    </tr>
    <tr>
    <td>auto </td> 
    <td>Automatic</td>
    </tr>
    <tr>
    <td>az </td> 
    <td>Azerbaijani</td>
    </tr>
    <tr>
    <td>be </td> 
    <td>Belarusian</td>
    </tr>
    <tr>
    <td>bg </td> 
    <td>Bulgarian</td>
    </tr>
    <tr>
    <td>bn </td> 
    <td>Bengali</td>
    </tr>
    <tr>
    <td>bs </td> 
    <td>Bosnian</td>
    </tr>
    <tr>
    <td>ca </td> 
    <td>Catalan</td>
    </tr>
    <tr>
    <td>ceb </td> 
    <td>Cebuano</td>
    </tr>
    <tr>
    <td>co </td> 
    <td>Corsican</td>
    </tr>
    <tr>
    <td>cs </td> 
    <td>Czech</td>
    </tr>
    <tr>
    <td>cy </td> 
    <td>Welsh</td>
    </tr>
    <tr>
    <td>da </td> 
    <td>Danish</td>
    </tr>
    <tr>
    <td>de </td> 
    <td>German</td>
    </tr>
    <tr>
    <td>el </td> 
    <td>Greek</td>
    </tr>
    <tr>
    <td>en </td> 
    <td>English</td>
    </tr>
    <tr>
    <td>eo </td> 
    <td>Esperanto</td>
    </tr>
    <tr>
    <td>es </td> 
    <td>Spanish</td>
    </tr>
    <tr>
    <td>et </td> 
    <td>Estonian</td>
    </tr>
    <tr>
    <td>eu </td> 
    <td>Basque</td>
    </tr>
    <tr>
    <td>fa </td> 
    <td>Persian</td>
    </tr>
    <tr>
    <td>fi </td> 
    <td>Finnish</td>
    </tr>
    <tr>
    <td>fr </td> 
    <td>French</td>
    </tr>
    <tr>
    <td>fy </td> 
    <td>Frisian</td>
    </tr>
    <tr>
    <td>ga </td> 
    <td>Irish</td>
    </tr>
    <tr>
    <td>gd </td> 
    <td>Scots Gaelic</td>
    </tr>
    <tr>
    <td>gl </td> 
    <td>Galician</td>
    </tr>
    <tr>
    <td>gu </td> 
    <td>Gujarati</td>
    </tr>
    <tr>
    <td>ha </td> 
    <td>Hausa</td>
    </tr>
    <tr>
    <td>haw </td> 
    <td>Hawaiian</td>
    </tr>
    <tr>
    <td>he </td> 
    <td>Hebrew</td>
    </tr>
    <tr>
    <td>hi </td> 
    <td>Hindi</td>
    </tr>
    <tr>
    <td>hmn </td> 
    <td>Hmong</td>
    </tr>
    <tr>
    <td>hr </td> 
    <td>Croatian</td>
    </tr>
    <tr>
    <td>ht </td> 
    <td>Haitian Creole</td>
    </tr>
    <tr>
    <td>hu </td> 
    <td>Hungarian</td>
    </tr>
    <tr>
    <td>hy </td> 
    <td>Armenian</td>
    </tr>
    <tr>
    <td>id </td> 
    <td>Indonesian</td>
    </tr>
    <tr>
    <td>ig </td> 
    <td>Igbo</td>
    </tr>
    <tr>
    <td>is </td> 
    <td>Icelandic</td>
    </tr>
    <tr>
    <td>it </td> 
    <td>Italian</td>
    </tr>
    <tr>
    <td>iw </td> 
    <td>Hebrew</td>
    </tr>
    <tr>
    <td>ja </td> 
    <td>Japanese</td>
    </tr>
    <tr>
    <td>jw </td> 
    <td>Javanese</td>
    </tr>
    <tr>
    <td>ka </td> 
    <td>Georgian</td>
    </tr>
    <tr>
    <td>kk </td> 
    <td>Kazakh</td>
    </tr>
    <tr>
    <td>km </td> 
    <td>Khmer</td>
    </tr>
    <tr>
    <td>kn </td> 
    <td>Kannada</td>
    </tr>
    <tr>
    <td>ko </td> 
    <td>Korean</td>
    </tr>
    <tr>
    <td>ku </td> 
    <td>Kurdish (Kurmanji)</td>
    </tr>
    <tr>
    <td>ky </td> 
    <td>Kyrgyz</td>
    </tr>
    <tr>
    <td>la </td> 
    <td>Latin</td>
    </tr>
    <tr>
    <td>lb </td> 
    <td>Luxembourgish</td>
    </tr>
    <tr>
    <td>lo </td> 
    <td>Lao</td>
    </tr>
    <tr>
    <td>lt </td> 
    <td>Lithuanian</td>
    </tr>
    <tr>
    <td>lv </td> 
    <td>Latvian</td>
    </tr>
    <tr>
    <td>mg </td> 
    <td>Malagasy</td>
    </tr>
    <tr>
    <td>mi </td> 
    <td>Maori</td>
    </tr>
    <tr>
    <td>mk </td> 
    <td>Macedonian</td>
    </tr>
    <tr>
    <td>ml </td> 
    <td>Malayalam</td>
    </tr>
    <tr>
    <td>mn </td> 
    <td>Mongolian</td>
    </tr>
    <tr>
    <td>mr </td> 
    <td>Marathi</td>
    </tr>
    <tr>
    <td>ms </td> 
    <td>Malay</td>
    </tr>
    <tr>
    <td>mt </td> 
    <td>Maltese</td>
    </tr>
    <tr>
    <td>my </td> 
    <td>Myanmar (Burmese)</td>
    </tr>
    <tr>
    <td>ne </td> 
    <td>Nepali</td>
    </tr>
    <tr>
    <td>nl </td> 
    <td>Dutch</td>
    </tr>
    <tr>
    <td>no </td> 
    <td>Norwegian</td>
    </tr>
    <tr>
    <td>ny </td> 
    <td>Chichewa</td>
    </tr>
    <tr>
    <td>pa </td> 
    <td>Punjabi</td>
    </tr>
    <tr>
    <td>pl </td> 
    <td>Polish</td>
    </tr>
    <tr>
    <td>ps </td> 
    <td>Pashto</td>
    </tr>
    <tr>
    <td>pt </td> 
    <td>Portuguese</td>
    </tr>
    <tr>
    <td>ro </td> 
    <td>Romanian</td>
    </tr>
    <tr>
    <td>ru </td> 
    <td>Russian</td>
    </tr>
    <tr>
    <td>sd </td> 
    <td>Sindhi</td>
    </tr>
    <tr>
    <td>si </td> 
    <td>Sinhala</td>
    </tr>
    <tr>
    <td>sk </td> 
    <td>Slovak</td>
    </tr>
    <tr>
    <td>sl </td> 
    <td>Slovenian</td>
    </tr>
    <tr>
    <td>sm </td> 
    <td>Samoan</td>
    </tr>
    <tr>
    <td>sn </td> 
    <td>Shona</td>
    </tr>
    <tr>
    <td>so </td> 
    <td>Somali</td>
    </tr>
    <tr>
    <td>sq </td> 
    <td>Albanian</td>
    </tr>
    <tr>
    <td>sr </td> 
    <td>Serbian</td>
    </tr>
    <tr>
    <td>st </td> 
    <td>Sesotho</td>
    </tr>
    <tr>
    <td>su </td> 
    <td>Sundanese</td>
    </tr>
    <tr>
    <td>sv </td> 
    <td>Swedish</td>
    </tr>
    <tr>
    <td>sw </td> 
    <td>Swahili</td>
    </tr>
    <tr>
    <td>ta </td> 
    <td>Tamil</td>
    </tr>
    <tr>
    <td>te </td> 
    <td>Telugu</td>
    </tr>
    <tr>
    <td>tg </td> 
    <td>Tajik</td>
    </tr>
    <tr>
    <td>th </td> 
    <td>Thai</td>
    </tr>
    <tr>
    <td>tl </td> 
    <td>Filipino</td>
    </tr>
    <tr>
    <td>tr </td> 
    <td>Turkish</td>
    </tr>
    <tr>
    <td>uk </td> 
    <td>Ukrainian</td>
    </tr>
    <tr>
    <td>ur </td> 
    <td>Urdu</td>
    </tr>
    <tr>
    <td>uz </td> 
    <td>Uzbek</td>
    </tr>
    <tr>
    <td>vi </td> 
    <td>Vietnamese</td>
    </tr>
    <tr>
    <td>xh </td> 
    <td>Xhosa</td>
    </tr>
    <tr>
    <td>yi </td> 
    <td>Yiddish</td>
    </tr>
    <tr>
    <td>yo </td> 
    <td>Yoruba</td>
    </tr>
    <tr>
    <td>zu </td> 
    <td>Zulu</td>
    </tr>

</table>
