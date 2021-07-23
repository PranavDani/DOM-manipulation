// EXAMINE THE DOCUMENT OBJECT

// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.forms)
// console.log(document.links)

// GET ELEMENTS BY ID

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title')
// var header = document.getElementById('main-header')

// console.log(headerTitle)
// headerTitle.textContent = 'hello'
// headerTitle.innerHTML = '123'
// headerTitle.innerHTML = '<h3>Hello</h3>';

// header.style.borderBottom = 'solid 3px black'

// GETELEMENTSBYCLASSNAME

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error

// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error

// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px black'

// var input = document.querySelector('input');
// input.value = 'Hello bruh';

// var submit = document.querySelector('input[type = "submit"]')

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';


// QUERSELECTORALL

// var titles = document.querySelectorAll('.title');
// console.log(titles)

// titles[0].textContent = 'Hello'

// var odd = document.querySelectorAll('.list-group-item:nth-child(odd)')
// var even = document.querySelectorAll('.list-group-item:nth-child(even)')

// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }


// TRAVERSING THE DOM

var itemList = document.querySelector('#items');

// console.log(itemList.parentNode)

// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentNode.parentNode)

// Child nodes

// console.log(itemList.childNodes) //don't use
// console.log(itemList.firstChild)

// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor = 'yellow'

// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = 'Hello1'

// Siblings

// console.log(itemList.nextSibling) //bad

// console.log(itemList.nextElementSibling)

// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = 'green'

// CreateElement

// Create a Div

var newDiv = document.createElement('div')

// add class
newDiv.className = 'hello'
newDiv.id = 'hello1'

newDiv.setAttribute('title', 'Hello div')

var newDivText = document.createTextNode('Hello World')

newDiv.appendChild(newDivText)

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv)

container.insertBefore(newDiv, h1)