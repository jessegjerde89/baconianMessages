// requires
const express = require( 'express' );
const app = express();

// uses

// globals
const port = 5000;

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up on :', port );
})

// routes