// requires
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();

// uses
app.use( express.static( 'server/public/' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// globals
const port = 5000;
let messages = [];

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up on :', port );
})

// routes
app.get( '/messages', ( req, res )=>{
    console.log( '/messages GET' );
    res.send( messages );
}); // end /messages GET

app.post( '/messages', ( req, res )=>{
    console.log( '/messages POST:', req.body );
    messages.push( req.body );
    res.sendStatus( 201 );
})