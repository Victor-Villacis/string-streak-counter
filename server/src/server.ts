import express from 'express';
import cors from 'cors';
import todoRouter from './routes';

const app = express();
const port = 3000 || process.env.PORT;

app.use(cors());
app.use(express.json());


app.use('/api', todoRouter); // Here's where we're adding the /api/ prefix

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
