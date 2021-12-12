const express = require('express');
const cors = require("cors");
const fs = require('fs');
var bodyParser = require("body-parser");



class App {

    constructor() {
        this.express = express();
        this.middleware()
        this.routes()
    }

    async middleware() {
        const corsOptions = {
            origin: process.env.ORIGIN_HOST,
            method: process.env.METHODS,
            contentType: 'application/json'

        }

        this.express.use(cors(corsOptions))

        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(bodyParser.json());
    }

    async routes() {
        const files = fs.readdirSync(__dirname + '/infra/api')
        files.forEach(async (module) => {
            const dirName = `./infra/api/${module}`
            const api = await require(dirName)
            this.express.use(`/api`, api)
        })
    }

}

module.exports = new App().express