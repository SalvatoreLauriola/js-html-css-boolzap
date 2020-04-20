$(document).ready(function() {  // Inizio del doc ready


  // Refs
  
  // variabile dell'input del testo
  var message = $(".message input");
  
  //variabile dell'icona per il cambio classe quando in input
  var icon = $(".vocal i");
  



  // applicazione della funzione di invio testo al click
  $('body').on("click", '.vocal i', function(){
    condition();
    setTimeout(received, 1000);
    });
  
    // funzione che rimuove icona microfono e mostra icona invio quando in input in message e viceversa
  message.on('focus blur', function() {
    icon.toggleClass("fa-microphone fa-paper-plane");
  });
  
  // funzione che capta quando viene cliccato tasto invio e solo in quel momento inserisce il messaggio preso da input
  $('body').on("keyup", '.message input', function(event){
    if(event.which == 13 || event.keyCode == 13) {
      condition();

      setTimeout(received, 1000);
    }
  })
  
  // creazione della funzione
  function condition(){
    
    // variabile che seleziona il li del template fantasma clonandolo
    var newMessage = $(".template .message-bubble").clone();

    newMessage.addClass("send");
    
    // variabile che prende il valore del messaggio e lo pulisce da spazi vuoti
    var textMessage = message.val().trim()
    
    // validazione in caso di messaggio vuoto
    if (textMessage !== ''){
    
      // selezioniamo h5 vuoto per poterlo riempire
    newMessage.children().children('h5').text(textMessage);
    
    //iniettiamo il messaggio nel dom
    $(".chat").append(newMessage);
    
    // puliamo il campo di testo una volta inviato il messaggio
    message.val('');
    }
  }

  function received (){
    var newReceived = $(".template .message-bubble").clone();
    
    newReceived.addClass("received");
    
    var fakeMessage= 'Ciao'

    newReceived.children().children('h5').text(fakeMessage);
    $(".chat").append(newReceived);
  }
});  // Fine doc ready


