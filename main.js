

const test = "https://criptoya.com/api/kriptonmarket/doc/ars/100";



async function consultarExchange() {


  const btn = document.getElementById('btn');
  const api = "https://criptoya.com/api";

  var exchange = document.getElementById('exchange').value;
  var coin = document.getElementById('coin').value;
  var fiat = document.getElementById('fiat').value;
  var volumen = document.getElementById('volumen').value;

  console.log(exchange);
  console.log(coin);
  console.log(fiat);
  console.log(volumen);

  const apiExchange = `${api}/${exchange}/${coin}/${fiat}/${volumen}`;


  fetch(apiExchange)
    .then(res => res.json())
    .then(res => console.log(res))
  


  console.log('Exchange');
  console.log(apiExchange);
}
