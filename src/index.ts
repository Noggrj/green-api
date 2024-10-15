import express, { Application } from 'express';
import dotenv from 'dotenv';
import clienteRoutes from './adapters/routes/clienteRoutes';
import sequelize from './infra/config/db/config/databaseConfig';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/clientes', clienteRoutes);

sequelize.sync().then(() => {
  console.log('Conectado ao banco de dados!');
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
