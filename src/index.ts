import dotenv from 'dotenv';  // ES module import
dotenv.config();  // Load .env file
import express, { Request, Response } from 'express';

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send('hello world')
})
app.listen(process.env.PORT, () => {
    console.log(`App is listening at port ${process.env.PORT}`)
})