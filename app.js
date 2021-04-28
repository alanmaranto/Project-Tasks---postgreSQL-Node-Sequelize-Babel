import morgan from 'morgan';
import express, { json } from 'express';
import routes from './routes'

const app = express();

// middlewares
app.use(morgan('dev'))
app.use(json())

// routes
routes(app)

export default app
