import axios from "axios";

export const useFetch = () => {
    
    let arr = []
    
    axios('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1%C2%A0653%C2%A0006%C2%A0600&to=1654216200')
        .then(res => arr = res.data)
        .catch(err => console.log(err))

    console.log(arr)

    if (arr.length == 0) {
        return
    }

    return arr
}