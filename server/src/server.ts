import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'

import router from './router'

const port = 5000

const app = new Koa()

app.use(cors())
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(port)

console.log(`Server online on port ${port}`)
