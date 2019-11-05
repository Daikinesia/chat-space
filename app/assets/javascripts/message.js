$(function(){
  function buildHTML(message){
    var html = `<div class= 'message'>
                  <div class='message__upper-info'>
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
                    <img src= ${message.image} class= 'message__image'>
                  </p>
                </div>`
    return html;
  }

  var cancelFlag = 0;
  $('.new-message').on('submit',function(e){
    e.preventDefault();
    if(cancelFlag == 0){
      cancelFlag = 1;
      $('.form__submit').removeAttr('data-disable-with');
      var formData = new FormData(this);
      var url = location.href
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'JSON',
        processData: false,
        contentType: false
      })
      .done(function(data){
        var html = buildHTML(data);
        $('.messages').append(html);
        $('img').error(function() {
          $(this).remove();
        });
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast')
      })
      .fail(function(){
        alert('入力されていません。')
      })
     
      setTimeout(function(){
        cancelFlag = 0;
        alert("連続投稿はできません。"); 
			},3000);
    }
  })
})