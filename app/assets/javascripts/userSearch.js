$(function(){
  function buildHTML(data){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${data.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${data.id}" data-user-name="${data.name}">追加</div>
                </div>`
    $('#user-search-result').append(html);
  }

  
  $('#user-search-field').on('keyup', function(){
    var keyword = $(this).val();
    // console.log(keyword)
    $.ajax({
      url: '/users',
      type: "GET",
      data: {name: keyword},
      dataType: 'json'
    })

    .done(function(data){
      // console.log(data)
      $("#user-search-result").empty();
      if (data.length !== 0) {
        data.forEach(function(data){
          buildHTML(data);
        });
      }
      else {
        $('#user-search-result').append('検索結果なし') 
      }
    })
    .fail(function() {
      alert('検索に失敗しました');
    })
  });
});