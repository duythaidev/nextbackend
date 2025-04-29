import express from 'express';
import itemRoutes from './routes/router';

const app = express();

app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});