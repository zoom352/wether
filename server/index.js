import express from "express";
import request from 'request'
import cors from 'cors'

const app = express()

app.use(cors())
const host = '127.0.0.1'
const port = 5000

app.get('/', (req, res) => {
  request.get({
    url: `https://api.weather.yandex.ru/v2/forecast?${req.query.latitude}&${req.query.longitude}&extra=true`,
    headers: { 
        'X-Yandex-API-Key': '16a8a26e-306d-4d3c-ac30-3193862c7136',
        "Content-Type" : "application/json",
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*"
        }
},
    (err, response, body) => {
      if (err) return res.status(500).send({ message: err })
      return res.send(body)
    }
  )
})


app.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
)
