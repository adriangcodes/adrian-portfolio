async function getBTCLivePrice() {
    const res = await fetch('https://pricing.bitcoin.block.xyz/current-price')
    const data = await res.json()
    
    const btcLivePrice = document.querySelector('#btcLivePrice')

    const formattedDate = new Date(data.last_updated_at_in_utc_epoch_seconds * 1000).toLocaleString()

    btcLivePrice.innerHTML = `Live price in ${data.currency} updated at ${formattedDate}: <h1>$${data.amount}</h1>`
}

// Fetch immediately on page load
getBTCLivePrice()

// Then refresh every 5 minutes (300,000 milliseconds)
setInterval(getBTCLivePrice, 300000)