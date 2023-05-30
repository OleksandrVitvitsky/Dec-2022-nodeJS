
const path = require('path');
const fs = require('fs');

for (let i = 0; i < 5; i++) {
    const NewFolder = `folder${i+1}`;
    fs.mkdir(path.join(__dirname,'HomeWork1',NewFolder),(err) =>{
   if (err) throw  new Error(err.message);
    })

    fs.writeFile(path.join(__dirname,'HomeWork1',NewFolder,`file_in_${NewFolder}.txt`),`this file in ${NewFolder}`, (err) => {
    if (err) throw  new Error(err.message);
})
}


fs.readdir(
    path.join(__dirname, 'HomeWork1'), {withFileTypes: true}, (err, files) => {
        if (err) throw  new Error(err.message);
        files.forEach(file => {
                let typeFile = 'undefined';
                if (file.isDirectory())
                    typeFile = 'Folder';
                else if (file.isFile())
                    typeFile = 'File';
                console.log(`${typeFile}: {${file.name}}`);

                fs.readdir(
                    path.join(__dirname, 'HomeWork1', file.name), {withFileTypes: true}, (err, files) => {
                        if (err) throw  new Error(err.message);
                        files.forEach(file => {
                                let typeFile = 'undefined';
                                if (file.isDirectory())
                                    typeFile = 'Folder';
                                else if (file.isFile())
                                    typeFile = 'File';
                                console.log(`${typeFile}: {${file.name}}`);

                            }
                        )

                    })
            }
        )
    })