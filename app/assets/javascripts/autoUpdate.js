$(function(){ 
  function buildMessageHTML(message){
    var html = `<div class='message__upper-info'>
                  <p class= 'message__upper-info__talker'>
                    ${message.user_name}
                  </p>
                  <p class= 'message__upper-info__date'>
                    ${message.created_at}
                  </p>
                </div>
                <p class= 'message__lower'>
                  <p class= 'message__text' data-id="${message.id}">
                  ${message.text}
                  </p>
                  <p>
                    <img src= ${message.image} class= 'message__image'>
                  </p>
                </p>`
    // return html;
    $('.messages').append(html);
  }

  var reloadMessages = function(){
    if (window.location.href.match( "/groups/")){
      var last_message_id = $('.message__text:last').data('id')
        $.ajax({
        url: 'api/messages',
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
        })
      .done(function(messages){
        console.log('aa')
        console.log(messages)
        if (messages.length !== 0){
          // var insertHTML = '';
          messages.forEach(function (message) {
            // insertHTML = buildMessageHTML(message);
            buildMessageHTML(message);
            $('img').error(function() {
              $(this).remove();
            });
          });
        }
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      })
        
      .fail(function(){
        alert('自動更新に失敗しました');
      });
    }
  };
    setInterval(reloadMessages, 5000);
});