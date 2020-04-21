$(document).ready(function() {  // Inizio del doc ready

// Refs
  
  // variabile dell'input del testo
  var message = $(".message input");
  
  //variabile dell'icona per il cambio classe quando in input
  var icon = $(".vocal i");

  //variabile che prende l'input di ricerca contatti
  var searchInput = $('.input-part input');
  

// applicazione della funzione di invio testo al click
  $('body').on("click", '.vocal i', function(){
    condition();
    setTimeout(received, 1000);
    });
  
  // funzione che rimuove icona microfono e mostra icona invio quando in input di message e viceversa
  message.on('focus blur', function() {
    icon.toggleClass("fa-microphone fa-paper-plane");
  });
  
  // funzione che capta quando viene cliccato tasto invio e solo in quel momento inserisce il messaggio preso da input
  $('body').on("keyup", '.message input', function(event){
    if(event.which == 13 || event.keyCode == 13) {
      condition();
      // settiamo il timeout di risposta
      setTimeout(received, 1000);
    }
  })
  
// Sidebar search

  // funzione che rileva il carattere digitato nell'input dei contatti
searchInput.keyup(function() {
  // variabile che ottiene il valore dell'input, lo rende minuscolo e lo pulisce da eventuali spazi all'inizio ed alla fine
    var search = $(this).val().toLowerCase().trim()

    //cicliamo su ogni li appartenente ai contatti
    $('.settings').each(function(){
      // nome contatto attuale ottenuto grazie al this, cerchiamo l'h5 e ne prendiamo il testo rendendolo minuscolo
        var nameContact = $(this).find('.name h5').text().toLowerCase()
        // verifica input con nomi contatti: se quanto inserito corrisponde ad uno dei nomi lo mostra, altrimenti lo nasconde con hide
        if( nameContact.includes(search) ){
          $(this).show()
        }else {
          $(this).hide()
        }
      })
});

  // creazione della funzione che prende valore e inserisce nel dom
  function condition(){
    
    // variabile che seleziona il li del template fantasma clonandolo
    var newMessage = $(".template .message-bubble").clone();
    // aggiungiamo la classe send
    newMessage.addClass("send");
    
    // variabile che prende il valore del messaggio in input e lo pulisce da spazi vuoti
    var textMessage = message.val().trim()
    
    // validazione in caso di messaggio vuoto
    if (textMessage !== ''){
    
      // selezioniamo h5 vuoto per poterlo riempire con il testo
    newMessage.children().children('h5').text(textMessage);
      
    // Creazione e inserimento ora attuale
    var data = new Date();
    var ora = addZero( data.getHours() );
    var minuti = addZero( data.getMinutes() );
    var orario =ora + ':' + minuti;
    // inseriamo l'ora come testo in h6
    newMessage.children().children('h6').text(orario);  
    
    //iniettiamo il messaggio nel dom
    $(".chat").append(newMessage);

    // puliamo il campo di testo una volta inviato il messaggio
    message.val('');

    // applichiamo la funzione di scroll subito dopo aver inviato il messaggio
    scrollMessage();
    }
    
  }
  
// Aggiungi zero iniziale a numeri inferiori a 10 nell'orario
  function addZero(number) {
    if(number < 10) {
      number = '0' + number;
    }
    return number;
}

  // creiamo la funzione che genera messaggi dal bot
  function received (){
    // cloniamo il template
    var newReceived = $(".template .message-bubble").clone();
    
    // aggiungiamo la classe dei messaggi ricevuti
    newReceived.addClass("received");
    
    // una variabilee con un messaggio fittizzio
    var fakeMessage = 'Ciao'
    
    // generiamo nuovamente l'orario
    var data = new Date();
    var ora = addZero( data.getHours() );
    var minuti = addZero( data.getMinutes() );
    var orario =ora + ':' + minuti;
    
    //applichiamo il messaggio generato all'h5
    newReceived.children().children('h5').text(fakeMessage);
    
    //applichiamo il messaggio all'orario
    newReceived.children().children('h6').text(orario);
    //infine "appendiamo il messaggio dopo averlo completato di testo e ora al dom"
    $(".chat").append(newReceived);
    //infine facciamo in modo che dopo la generazione del messaggio il tutto venga scrollato in basso nella chat
    scrollMessage();
  }

  
    //function di  scroll ull'timo mess
    function scrollMessage() {
      // variabile che prende tutta la lunghezza della chat per capire fin dove scrollare
      var pixelScroll = $('.chat').height();

      // variabile che scrolla scattando immediatamente
      // $('.content-main').scrollTop(pixelScroll);
      
      // funzione alternativa che rende lo scorrimento più fluido 
      $('.content-main').animate({
        scrollTop: pixelScroll 
      }, 500);    // durata dell'animazione
    }






});  // Fine doc ready


                     