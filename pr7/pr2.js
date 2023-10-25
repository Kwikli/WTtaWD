console.log('pr2.js');

//const userName = document.querySelector('#name');
// const userEmail = document.getElementById('email');
// const userTel = document.getElementById('number');
//const userMsg = document.getElementById('text');

var userMsgText = false;
var userNameb = false;
var userEmailb = false;
var userTelb = false;

//userName.addEventListener('keyup',checkName);
// userEmail.addEventListener('keyup', checkEmail);
// userTel.addEventListener('keyup',checkTel);
//userMsg.addEventListener('keyup', checkText);

$("#name").keyup(function (event) { 
     if(!event.target.value || event.target.value.match(/\s/) || event.target.value.match(/\d/) || event.target.value.match(/[^A-Z][^А-Б]/i)){
          event.target.classList.add('input_wrong');
          console.log('border-red');
          userNameb = false;
     }else{
          event.target.classList.remove('input_wrong');
          console.log('border-green');
          userNameb = true;
     }     
});

$("#email").keyup(function (event) { 
     if((event.target.value.match(/^\S+@\S+\.\S+$/i) )){
          // /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          console.log('email correct2');   
          event.target.classList.remove('input_wrong');
          userEmailb = true;
     }else{
          console.log('email incorrect');
          event.target.classList.add('input_wrong');
          userEmailb = false;
     }
});

$("#number").keyup(function (event) { 
     if(event.target.value.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)){
          console.log('tel right');
          event.target.classList.remove('input_wrong');
          userTelb = true;
     }else{
          event.target.classList.add('input_wrong');
          userTelb = false;
     }
});

$("#text").keyup(function (event) { 
     userMsgText = true;
     //console.log(event.target.value.length);
     var l = event.target.value.length;
     document.getElementById('textareaid').textContent = "Довжина повідомлення: " + l;
});

$("#text").click(function (param) {  
    if(this){
          this.innerHTML='';
          console.log('#text - clear;')
    }
})

$("#form").submit(function(e){
     console.log(userEmailb);
     console.log(userMsgText);
     console.log(userNameb);
     console.log(userTelb);
     if(userEmailb && userMsgText && userNameb && userTelb){
          alert('Форма відправлена! Все заповнено коректно!');
          e.preventDefault();
          console("form +");
     }else{
          alert('Щось не вийшло! Перевірте правильність вводу');
          e.preventDefault();
          console("form -");
     }
});
// function Clear(id){
//      if(!userMsgText){
//           const  clear_id = document.getElementById(id.id);
//           console.log(id.id);
//           clear_id.value = "";
//      }
// }

// function FormSubmit(){
//      console.log(userEmailb);
//      console.log(userMsgText);
//      console.log(userNameb);
//      console.log(userTelb);
//      if(userEmailb && userMsgText && userNameb && userTelb){
//           alert('Форма відправлена! Все заповнено коректно!');
//      }else{
//           alert('Щось не вийшло! Перевірте правильність вводу');
//      }
// }

// function checkName(event){
//      if(!event.target.value || event.target.value.match(/\s/) || event.target.value.match(/\d/) || event.target.value.match(/[^A-Z][^А-Б]/i)){
//           event.target.classList.add('input_wrong');
//           console.log('border-red');
//           userNameb = false;
//      }else{
//           event.target.classList.remove('input_wrong');
//           console.log('border-green');
//           userNameb = true;
//      }
// }

// function checkEmail(event){
//      if((event.target.value.match(/^\S+@\S+\.\S+$/i) )){
//           // /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//           console.log('email correct2');   
//           event.target.classList.remove('input_wrong');
//           userEmailb = true;
//      }else{
//           console.log('email incorrect');
//           event.target.classList.add('input_wrong');
//           userEmailb = false;
//      }
// }

// function checkTel(event){
//      if(event.target.value.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)){
//           console.log('tel right');
//           event.target.classList.remove('input_wrong');
//           userTelb = true;
//      }else{
//           event.target.classList.add('input_wrong');
//           userTelb = false;
//      }
// }

// function checkText(event){
//      userMsgText = true;
//      console.log(event.target.value.length);
//      var l = event.target.value.length;
//      document.getElementById('textareaid').textContent = "Довжина повідомлення: " + l;
// }
