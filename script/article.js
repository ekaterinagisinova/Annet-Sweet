

let likeLogo = document.querySelector('.like_logo');
let count = document.querySelector('.count');
let counter = count.textContent;
let btnSend = document.querySelector('.comment_send');
let textComment = document.querySelector('.form_comment_messange_text');
let commentAuthor = document.querySelector('.comment_author_name_f');

//  === Ставим лайк ===

likeLogo.onclick = () => {
  likeLogo.classList.toggle('get_like');
  if(likeLogo.classList.contains('get_like')){
    counter++;
  } else {
    counter--;
  }
  count.textContent = counter;
}

//  ===  Оставляем комментарий ===

document.querySelector('.form_comment').onsubmit = function (evt) {
  evt.preventDefault();
  let newComment = document.createElement('div');
  newComment.classList.add('comment');
  newComment.innerHTML = ` 
  <div class="comment">
    <div class="comment_author">
      <div class="comment_author_avatar " width="50" height="50"></div> 
      <p class="comment_author_name"> ${commentAuthor.value}</p>               
    </div>
    <p class="comment_text">${textComment.value}</p>
  </div>`
  document.querySelector('.comments').prepend(newComment);
}

//  ===  Контроль за формой ===


let controlLengthComment = function() {
  if (textComment.value.length < 5 || textComment.value.length > 200){
    btnSend.disabled = true;
    textComment.style.borderColor = 'red';  
    textComment.style.color = 'red';   
  } else {
    btnSend.disabled = false;
    textComment.style.borderColor = '#2E2F22';
    textComment.style.color = '#2E2F22';
  }
}

textComment.addEventListener('input', controlLengthComment);