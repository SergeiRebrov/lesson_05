
let btn = document.querySelector('#btn');             //получаем кнопку	

btn.onclick = function() {                            //функция при клике на кнопку
	document.querySelector('link').href = 'style2.css';
};