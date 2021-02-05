module.exports ={
  db: {
    host: "localhost",
    port: "27017",
    url: process.env.database_URL,
    database: "books",
    password: process.env.DM_PASS,
    name: "db",
    user: process.env.DM_USER,
    useNewUrlParser: true,
    connector: "mongodb"
  }
}
