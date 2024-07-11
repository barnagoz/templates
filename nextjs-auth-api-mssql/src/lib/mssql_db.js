const sql = require('mssql')
const config = {
    server: process.env.MSSQL_SERVER,
    port: parseInt(process.env.MSSQL_PORT, 10),
    database: process.env.MSSQL_DATABASE,
    user: process.env.MSSQL_USER,
    password: process.env.MSSQL_PASSWORD,
    options: {
        trustServerCertificate: true, // Set to true if using self-signed certificates
    }
}

// run a query against the global connection pool
    function runQuery(query)
{
    // sql.connect() will return the existing global pool if it exists or create a new one if it doesn't
    return sql.connect(config).then((pool) => {
        return pool.query(query)
    })
}

export {runQuery}