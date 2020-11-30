//My api key
var apikey ={
key:'de4cd560-617e-4737-8a3a-487d0a668c3d'
}
//Get Fetch Requisistion
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEy=' + apikey.key)
.then((response) =>{
    if(!response.ok)throw new Error('Erro ao executar a requisição,status'+ response.status);
return response.json();
})
.then ((api)=>{
console.log(api);
})
.catch((error) =>{
    console.error(error.message);

});