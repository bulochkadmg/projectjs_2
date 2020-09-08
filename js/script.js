// 'use strict'; //! Строгий режим разработки
// //! Получение элементов со страницы DOM (.document)

// // const box = document.getElementById('box'); //! обращается к идентификатору box на index.html

// // console.log(box);

// // const button = document.getElementsByTagName('button')[1]; //! отдаст псевдомассив. html коллекцию из всех тегов <button></button>. В [] указывается индекс из массива , чтобы достать определенную кнопку ( сохраняется весь массив)
// // console.log(button); //! Если указать здесь номер индексa [1], то сохраниться вся коллекция но выведет только тот индекс

// // const circles = document.getElementsByClassName('circle'); //!получаем все элементы по классу. Так же в виде псевдомассива

// // console.log(circles);

// // const hearts = document.querySelectorAll('.heart'); //! указывается все селекторы css. Через точку/# (есть метод forEach)

// // console.log(hearts);

// // hearts.forEach(item => {
// //     console.log(item);
// // });

// // const oneHeart = document.querySelector('.heart'); //! Выводит только первый селектор(элемент)
// // console.log(oneHeart);


// //! Действия с элементами на странице

// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       wrapper = document.querySelector('.wrapper'),
//       hearts = wrapper.querySelectorAll('.heart'), //! выберутся только элементы с классом .heart внутри класса .wrapper
//       oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue'; //! Стили добавляются инлайново . задаются через .style.(стиль из css) = значение.
// box.style.width = '500px'; //! Стили инлайново . задаются через .style.(стиль из css) = значение.

// box.style.cssText = 'background-color: #645654; width: 200px; height: 200px;'; //! если хочешь указать элементу больше одного стиля. пишется как в css

// btns[1].style.borderRadius = '100%';
// // circles.style.backgroundColor = 'red'; //! Ошибка . ты обращаешься к псевдо массиву. а методов у него нет и ему похуй на твой .style. чтобы избежать ошибки нужно четко указывать элемент к которому обращаешься по индексу как ниже
// circles[0].style.backgroundColor = 'red';


// // for (let i = 0; i < hearts.length; i++) { //! перебирает все элементы с классом .heart и применяет к ним css. Используется редко
// //     hearts[i].style.backgroundColor = 'green';
// // }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'green';
// });


// const div = document.createElement('div'); //! создает новый элемент и он храниться только в JS!! на странице его пока еще нет
// // const text = document.createTextNode('тут был я'); //! Очень редкий случай создания текста

// div.classList.add('black'); //!добавляет css класс определенный в самом css

// document.body.append(div); //! Современный метод добавления эелемента js на страницу html(.append - добавляет в самый конец родителя)

// // wrapper.append(div); //! добавит в конец элемента класса .wrapper блок div
// // wrapper.prepend(div); //! добавит в начало элемента класса .wrapper блок div

// // hearts[0].before(div); //! before = псевдокласс который позволяется установить элементы перед 
// // hearts[0].after(div); //! after = псведокласс который устанавливает элемент после

// // circles[0].remove(); //! удаляет элемент по индексу 

// // hearts[0].replaceWith(circles[0]); //! .replaceWith - позволяет заменять один элемент на странице другим

// //! Устаревшие конструкции работают только через родителя

// // wrapper.appendChild(div); //! добавление в конец родителя
// // wrapper.insertBefore(div, hearts[0]); //! позволяет вставить элемент(первый аргумент - то что вставляем, второй аргумент - то , куда вставляем)

// // wrapper.removeChild(hearts[1]); //! удаляет элемент через родителя

// // wrapper.replaceChild(circles[0], hearts[0]); //! заменяет элемент . первый аргумент - то где будет заменяться , второй - то чем будет заменяться


// div.innerHTML = '<h1>hello world</h1>'; //! Позволяет вставлять html структуру внутрь DOM 
// // div.textContent = 'Hello'; //! Работает только с текстом. html теги тут не раобтают

// div.insertAdjacentHTML('beforebegin', '<h2>hello</h2>'); //! Вставляет html код. принимает два аргумента. a - место где будет код , b - сам код