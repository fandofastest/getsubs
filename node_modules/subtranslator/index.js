const fs = require('fs');
const cliProgress = require('cli-progress');
const translate = require('@vitalets/google-translate-api');

exports.translate = async (fileInput,fileOutput,language) => {
    const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    
    try {
        const sourceTxt=[];
        const finalText=[];
        const file = await fs.promises.readFile(fileInput, 'utf8');
        for (const line of file.split('\n')) {
            if(line.length > 0) {
                if(isNaN(line)&& !line.includes('-->') && !line.includes('»') && !line.includes('«')) {
                    sourceTxt.push(line);
                }
            }
        }
        let tmpArr=[];
        let originalArr = [];
        bar1.start(sourceTxt.length, 0);

        for (let i = 0; i < sourceTxt.length; i++) {
            tmpArr.push(sourceTxt[i].replace(/\./g,'').replace(/\.../g,''));
            originalArr.push(sourceTxt[i]);

            if(i!=0 &&(i%100)==0){
                const translatedText = await (await translate(tmpArr.join(' * '), {to: language})).text;
                const translatedTextArr = translatedText.split(' * ');
                for (let index = 0; index < translatedTextArr.length; index++) {
                    const obj = {};
                    obj.sourceTxt = originalArr[index];
                    obj.translatedText = translatedTextArr[index].replace(/\r/g, '');
                    finalText.push(obj);
              
                }
                bar1.update(i);
                tmpArr=[];
                originalArr=[];            
            }
            
        }

        let fileTranslated = await fs.promises.readFile(fileInput, 'utf8');
        for (const iterator of finalText) {
            fileTranslated = fileTranslated.replace(iterator.sourceTxt, iterator.translatedText);
        }
        await fs.promises.writeFile(fileOutput, fileTranslated);
        bar1.stop();

    } catch (err) {
        console.error(err);
    }
};