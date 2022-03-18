const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('c56ebc06628414410e5f', '505b93f46c2bc646801d6de0df124e52c3621eab432b106546ec5ea130fc57c2');


const fs = require('fs');
const readableStreamForFile = fs.createReadStream('./toroymoi.png');
const options = {
    pinataMetadata: {
        name: 'MyCustomName',
        keyvalues: {
            customKey: 'customValue',
            customKey2: 'customValue2'
        }
    },
    pinataOptions: {
        cidVersion: 0
    }
};
pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
    //handle results here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});