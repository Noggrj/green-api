import { Dialect, Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const database = process.env.DB_NAME as string;
const username = process.env.DB_USER as string;
const password = process.env.DB_PASS as string;
const host = process.env.DB_HOST as string;
const dialect: Dialect = 'postgres';

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

export default sequelize;
