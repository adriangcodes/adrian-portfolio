async function getBTCLivePrice() {
    const btcLivePrice = document.querySelector('#btcLivePrice')

    try {
        const res = await fetch('https://pricing.bitcoin.block.xyz/current-price')

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }

        const data = await res.json()
        const formattedDate = new Date(data.last_updated_at_in_utc_epoch_seconds * 1000).toLocaleString()

        btcLivePrice.innerHTML = `Live price in ${data.currency} updated at ${formattedDate}, refreshing every minute: <h1>$${data.amount}</h1>`
    } catch (error) {
        console.error('Error fetching Bitcoin price:', error)
        btcLivePrice.innerHTML = `<span style="color:red;">Unable to retrieve current Bitcoin price.</span>`
    }
}

getBTCLivePrice()

setInterval(getBTCLivePrice, 60000)