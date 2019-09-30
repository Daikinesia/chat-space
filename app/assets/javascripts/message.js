
$(function(){
  function buildHTML(message){
    var html = `<div class='message__upper-info'>
                  <p class= 'message__upper-info__talker'>
                    ${message.user_name}
                  </p>
                  <p class= 'message__upper-info__date'>
                    ${message.created_at}
                  </p>
                </div>
                <p class= 'message__lower'>
                  <p class= 'message__text'>
                  ${message.text}
                  </p>
                  
                </p>`
                  
    return html;
  }
                  // <p>
                  //   <img src="${message.image}" alt= "画像" class= 'message__image'>
                  // </p>
                  // あとで上のhtmlに入れる。画像表示様。if文が必要なのと、そもそもmessage.imageの入れ方が違う。

    
  $('.new-message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = location.href
    console.log(url)
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
    })
      $('html, body').animate({scrollTop: $(document).height()}, 'slow')
    .fail(function(){
      alert('error')
    })
  })
})