import express from 'express'
import cors from 'cors'
import mongoose, { connection } from 'mongoose'

import routes from './routes'

class App{
    public express: express.Application

    public constructor() {
        this.express = express()

        this.middleware()
        this.database()
        this.routes()
    }

    private middleware (): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database(): void {
        mongoose.connect('mongodb://localhost:27017/mongodb')
    }

    private routes(): void {
        this.express.use(routes)
    }
}

export default new App().express