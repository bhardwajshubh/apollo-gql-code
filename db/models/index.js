import { Sequelize, DataTypes } from 'sequelize'
import UserModel from './user'

// const DATABASE_HOST = process.env.DB_HOST
// const DATABASE = process.env.DB_NAME
// const DATABASE_USERNAME = process.env.DB_USERNAME
// const DATABASE_PASSWORD = process.env.DB_PASSWORD
// console.log(DATABASE_HOST)
const sequelize = new Sequelize('demo', 'root', 'root', {
  host: 'mydb',
  dialect: 'mysql'
})
sequelize.sync({ alter: true })
const db = {}

db.UserModel = UserModel(sequelize, DataTypes)

module.exports = db
