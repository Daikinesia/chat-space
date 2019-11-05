// $(function(){
//   $(document).on('click',".chat-group-user__btn--add",function(){
//     var userName = $('.user-search-add').data('user-name');
//     var userID = $('.user-search-add').data('user-id');
//     $('.chat-group-user').remove();
    
//     var html = `<div class='chat-group-user'>
//                     <input name='group[user_ids][]' type='hidden' value='${userID}'>
//                     <p class='chat-group-user__name'>${userName}</p>
//                     <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
//                   </div>`
//     $('.js-add-user').append(html);
//   })

//   $(document).on('click',".chat-group-user__btn--remove",function(){
//     $('.chat-group-user').remove();
//   })

// })