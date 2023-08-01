const fs = require('fs');

const tar = require('tar-stream');

function readTar(path) {
    return new Promise((resolve, reject) => {
        const tarFileStream = fs.createReadStream(path);

        let metainfo = {};
        const resources = {};

        const extract = tar.extract();

        extract.on('entry', function (header, stream, next) {
            if (header.type === 'file') {
                const contentParts = [];

                stream.setEncoding('utf8');
                stream.on('data', data => {
                    contentParts.push(data);
                });
                stream.on('end', function () {
                    const content = contentParts.join('');
                    if (header.name == 'metainfo.json') {
                        metainfo = JSON.parse(content);
                    } else {
                        resources[header.name] = content;
                    }
                    next();
                });
            } else if (header.type === 'directory') {
                stream.resume(); // just auto drain the stream
                next();
            } else {
                reject(new Error('Unexpected file in tar: ' + header.type));
            }
        });

        extract.on('error', err => {
            reject(new Error('extract error : ' + err + ' ' + err.stack));
        });

        extract.on('finish', () => resolve({metainfo, resources}));

        tarFileStream.pipe(extract);
    });
}

exports.readTar = readTar;
