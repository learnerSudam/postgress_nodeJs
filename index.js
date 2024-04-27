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
.then( ()=>client.query("select * from employeeDB where emp_name =$1", ["Aayush Bajaj"]))
.then(results =>console.table(results.rows))
.catch( e =>(console.log(e)))
.finally(()=>client.end())