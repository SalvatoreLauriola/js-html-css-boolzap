
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando icona ‘invia il testo’ viene aggiunto al thread sopra, come messaggio verde (ricordate focus() )
// Messaggi visibili inizialmente sono inseriti statici nell’HTML
// Usate un template nell’html e clone() per l’ inserimento del messaggio da fare in JS




$(document).ready(function() {


  // Refs
  var message = $(".message input");

  var icon = $(".vocal i");

  $('body').on("click", '.vocal i', function(){
    condition();
    });
  
  message.focus(function() {
    icon.removeClass("fas fa-microphone").addClass("fas fa-paper-plane")
  });

  $('body').on("keyup", '.message input', function(event){
    if(event.which == 13 || event.keyCode == 13) {
      condition();
    }
  })
  function condition(){
    var newMessage = $(".template li").clone();
    var textMessage = message.val().trim()
    if (textMessage !== ''){
    newMessage.children().children('h5').text(textMessage);
    $(".chat").append(newMessage);
    message.val('');
    }
  }
});  // Fine doc ready


