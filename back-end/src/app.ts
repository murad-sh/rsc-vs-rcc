import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import eventRoutes from './routes/eventRoutes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.use('/', eventRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
