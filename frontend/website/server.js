const { createServer } = require('https')
const { parse } = require('url')
const next = require('next')
const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const httpsOptions = {
    key: fs.readFileSync('C:/Users/maxdi/Downloads/localhost+2-key.pem'),
    cert: fs.readFileSync('C:/Users/maxdi/Downloads/localhost+2.pem'),
}

app.prepare().then(() => {
    createServer(httpsOptions, (req, res) => {
        const parsedUrl = parse(req.url, true)
        handle(req, res, parsedUrl)
    }).listen(3000, () => {
        console.log('> Next.js rodando em https://localhost:3000')
    })
})
