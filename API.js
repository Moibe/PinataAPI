
const axios = require('axios');
const testAuthentication = () => {
    const url = `https://api.pinata.cloud/data/testAuthentication`;
    return axios
        .get(url, {
            headers: {
                pinata_api_key: 'c56ebc06628414410e5f',
                pinata_secret_api_key: '505b93f46c2bc646801d6de0df124e52c3621eab432b106546ec5ea130fc57c2'
            }
        })
        .then(function (response) {
            console.log(response);
            alert("Mint Done"); 
        })
        .catch(function (error) {
            console.log(response);
            alert("Not Done"); 
        });
};

//document.getElementById("submit_mint").onclick = testAuthentication;