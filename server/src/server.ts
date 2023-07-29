// server.ts
import express from 'express';
import cors from 'cors';
import { calculateStreak } from './controllers/streakController';

const app = express();
const port = 3000 || process.env.PORT;

app.use(cors());
app.use(express.json());

app.post('/calculate-streak', calculateStreak);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
