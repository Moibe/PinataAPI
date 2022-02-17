const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('c56ebc06628414410e5f', '505b93f46c2bc646801d6de0df124e52c3621eab432b106546ec5ea130fc57c2');

pinata.testAuthentication().then((result) => {
    //handle successful authentication here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});

//document.getElementById("submit_mint").onclick = testAuthentication;