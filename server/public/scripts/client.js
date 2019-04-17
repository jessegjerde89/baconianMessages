$( document ).ready( onReady );

function getMessages(){
    // GET request to /messages
    $.ajax({
        type: 'GET',
        url: '/messages'
    }).then( function( response ){
        // console log the response
        console.log( 'back from GET with:', response );
        let el = $( '#messagesOut' );
        el.empty();
        // loop through response
        for( let i =0; i< response.length; i++){
            // display each on page
            el.append( `<li>${ response[i].from} says: ${ response[i].text }</li>`)
        }
    });
}

function newMessage(){
    // get user input
    // create an object
    let objectToSend = {
        from: $( '#fromIn' ).val(),
        text: $( '#textIn' ).val()
    }
    // send object to server via POST
    console.log( 'sending:', objectToSend );
    $.ajax({
        type: 'POST',
        url: '/messages',
        data: objectToSend
    }).then( function( response ){
        console.log( 'back from POST with:', response );
        getMessages();
    })
}

function onReady(){
    $( '#newMessageButton' ).on( 'click', newMessage );
    getMessages();
}