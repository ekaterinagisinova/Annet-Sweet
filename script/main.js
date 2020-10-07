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
const regName = /[A-Za-zА-Яа-яЁё\s]/gm;
const regEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
let messangeForm = document.querySelector('.messange_form')
let errorName = document.querySelector('.error_name');
let errorEmail = document.querySelector('.error_email');
let errorMessange = document.querySelector('.error_messange');


//  === Валидация textarea ===

let controlLength = function() {
    if (inputMessange.value.length < 5 || inputMessange.value.length > 200){
    btnSubmit.disabled = true;
    inputMessange.style.backgroundColor = 'red';  
    errorMessange.style.display = 'block';    
  } else {
    btnSubmit.disabled = false;
    inputMessange.style.backgroundColor = 'white'; 
    inputMessange.style.opacity = '0.5';
    errorMessange.style.display = 'none';
  }
}

inputMessange.addEventListener('change', controlLength);


//  === Валидация name ===

inputName.onchange = () => {
  let valid = true;
  for (let i of inputName.value){     
    if (i.match(regName) === null){      
      valid = false;
      break;
    }   
  }
  if (valid === false) {
    btnSubmit.disabled = true;
    inputName.style.borderColor = 'red';
    errorName.style.display = 'block';
  }
  else {
    btnSubmit.disabled = false;
    inputName.style.borderColor = 'green';
    errorName.style.display = 'none';
  }  
}

//  === Валидация email ===

inputEmail.onchange = () => {
  let valid = true;
  if (regEmail.exec(inputEmail.value) === null){ 
    valid = false;      
  }   
  if (valid === false) {
    btnSubmit.disabled = true;
    inputEmail.style.borderColor = 'red';
    errorEmail.style.display = 'block';
  }
  else {
    btnSubmit.disabled = false;
    inputEmail.style.borderColor = 'green';
    errorEmail.style.display = 'none';
  }
  console.log(valid)
}

