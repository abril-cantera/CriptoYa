async function consultarExchange() {


  const btn = document.getElementById('btn');
  const api = "https://criptoya.com/api";

  var exchange = document.getElementById('exchange').value;
  var coin = document.getElementById('coin').value;
  var fiat = document.getElementById('fiat').value;
  var volumen = document.getElementById('volumen').value;
  var ask = document.getElementById('ask')
  var totalAsk = document.getElementById('totalAsk')
  var bid = document.getElementById('bid')
  var time = document.getElementById('time')
  var exchangeValueInput = document.getElementById('exchangeValueInput')
  var coinValueInput = document.getElementById('coinValueInput')
  var fiatValueInput = document.getElementById('fiatValueInput')
  var volumenValueInput = document.getElementById('volumenValueInput')

  console.log(exchange);
  console.log(coin);
  console.log(fiat);
  console.log(volumen);

  const apiExchange = `${api}/${exchange}/${coin}/${fiat}/${volumen}`;

  
 fetch(apiExchange)
   .then(res => res.json())
   .then(res => {
     exchangeValueInput.innerHTML = `${exchange}`
     coinValueInput.innerHTML = `${coin}`
     fiatValueInput.innerHTML = `${fiat}`
     volumenValueInput.innerHTML = `${volumen}`


     ask.innerHTML = `${res.ask}`
     totalAsk.innerHTML = `${res.totalAsk}`
     bid.innerHTML = `${res.bid}`
     time.innerHTML = `${res.time}`
     totalBid.innerHTML = `${res.totalBid}`
   })
    .catch(err => console.log(err)) 
  
  // const res =  await fetch(apiExchange)
  
  // const data = await res.json()
  
  // console.log(data);

  // test.innerHTML = `${data.ask}`

  console.log('Exchange');
  
  console.log(apiExchange);
}
  
