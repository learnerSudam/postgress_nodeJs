//const Client=require('pg').Client
//both pices of code does the same 
const {Client}=require('pg')

const client = new Client({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port:5432,
    database: "postgres"
})

client.connect()
.then( ()=>console.log("Connected successfully"))
.then(()=>client.query("insert into employeeDB values($1,$2,$3)",[111, 'Jayant Reddy', 'jayanth.reddy@cashflo.io']))
.then( ()=>client.query("select * from employeeDB"))
.then(results =>console.table(results.rows))
.catch( e =>(console.log(e)))
.finally(()=>client.end())