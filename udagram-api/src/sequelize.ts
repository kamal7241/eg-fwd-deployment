import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = 
new Sequelize('postgres://postgres:password123@database-1.cb1xleokdjpz.us-east-1.rds.amazonaws.com:5432/postgres') 


// new Sequelize({
//   username: config.username,
//   password: config.password,
//   database: config.database,
//   host: config.host,
//   port: config.port,

//   dialect: "postgres",
//   storage: ":memory:",
// });

