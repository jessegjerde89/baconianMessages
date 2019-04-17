// requires
const express = require( 'express' );
const app = express();

// uses
app.use( express.static( 'server/public/' ) );

// globals
const port = 5000;
let messages = [];
// test data
messages.push( { from: 'Biz Markee', text: 'You got what I need...' } );

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up on :', port );
})

// routes
app.get( '/messages', ( req, res )=>{
    console.log( '/messages GET' );
    res.send( messages );
}); // end /messages GET