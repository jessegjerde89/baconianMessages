$( document ).ready( onReady );

function getMessages(){
    // GET request to /messages
    $.ajax({
        type: 'GET',
        url: '/messages'
    }).then( function( response ){
        // console log the response
        console.log( 'back from GET with:', response );
    });
}

function onReady(){
    console.log( 'JQ' );
    getMessages();
}