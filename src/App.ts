import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import './lib/Binance'
import BinanceJDC from './lib/Binance';
import mongoose from 'mongoose';



export default class App {
    app:Application;

    constructor(){
        this.app = express();
        this.config();
        this.middlewares();
        this.routes();
    }

    config = () => {

    }

    middlewares = () => {
        this.app.use(cors());
        this.app.use(morgan('dev'));
    }

    routes = () => {

        this.app.get('/', async (req,res) => {
            const bnc = new BinanceJDC()
        })

    }


    listen = () => {
        const bnc = new BinanceJDC()
        const symbols = [{symbol:'BTCUSDT', collection: 'btcusdt'},{symbol:'XRPUSDT', collection: 'xrpusdt'},{symbol:'SHIBUSDT', collection: 'shibusdt'}]
            mongoose.connect('mongodb://127.0.0.1:27017/test')
            .then(() => {
             
                symbols.map((symbol:any) => {
                    bnc.client.ws.ticker(symbol.symbol, async (tickers:any) => {
                        const collection = mongoose.connection.collection(symbol.collection);
                        const result = await collection.insertOne({
                            tickers
                        });
                        console.log(result);
                    })
                })

            })
        this.app.listen(4000, () => {
            console.log('server on port 4000');
        })
    }

    
}