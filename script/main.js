//  ===  Выбор статьи по тегу ===

let articleChoise = document.querySelector('.article_choise');
let articlesTag = document.querySelectorAll('.article_tag_item');
let articles = document.querySelectorAll('.article_item');


let choiseArticle = function () { 
  for (let articleTag of articlesTag) {  
      
      if (articleTag.dataset.category !== articleChoise.value && articleChoise.value !== 'Все статьи') {
        articleTag.closest('.article_link').classList.add('hidden');  
      } 
      else{
        articleTag.closest('.article_link').classList.remove('hidden');
      }
    }   
  } 


articleChoise.onchange = choiseArticle;
  

//  ===  Работа с формой ===

let inputName = document.querySelector('.form_text_input_name');
let inputEmail = document.querySelector('.form_text_input_email');
let inputMessange = document.querySelector('.messange_text');
let btnSubmit = document.querySelector('.btn_messange');

let regName = /[A-Z]/;

// inputName.onchange = function () {  
//   let oK = regName.exec(inputName.value);
//   console.log(inputName.value)
//   console.log(oK);
// }

let controlLength = function() {
    if (inputMessange.value.length < 5 || inputMessange.value.length > 200){
    btnSubmit.disabled = true;
    inputMessange.style.backgroundColor = 'red';   
    
  } else {
    btnSubmit.disabled = false;
    inputMessange.style.backgroundColor = 'white'; 
    inputMessange.style.opacity = '0.5';
  }
}

inputMessange.addEventListener('change', controlLength);