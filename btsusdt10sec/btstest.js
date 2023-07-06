const axios = require('axios').default;

function getBitcoinPrice() {
    const binanceAPI =  `https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT`

  axios
    .get(binanceAPI)
    .then(function(response) {
        const bitcoinPrice = parseFloat(response.data.price).toFixed(2);
        console.log(`Цена биткоина: ${bitcoinPrice} USDT`);
    })
    .catch((error) => {
      console.error('Ошибка при получении цены биткоина:', error.message);
    });
}

// Вызываем функцию получения цены биткоина каждые 10 секунд
setInterval(getBitcoinPrice, 10000);