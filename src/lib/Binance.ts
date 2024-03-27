import Binance from 'binance-api-node'

const API_KEY = "Kd5HqgWHe8XSWTfpGi0Og6KB26fdTDtGsKDnNh2D9P0l6mrwTW78VcN8jOrxNGQA";
const API_SECRET = "faRpdX3CuEU7fxlRMypHU0XqEGUh9UHPpoNwLI1VJotR4XQgpUv7L1qD09BlSKeg";

export default class BinanceJDC {
    client:any;
    
    constructor(){
        
        this.client = Binance({
            apiKey: API_KEY,
            apiSecret: API_SECRET
        })


        this.client.time().then((time:any) => console.log(time))
    }


    allOrders = async (symbol: string) => {
        return await this.client.allOrders({
            symbol
        })
    }
    

}

