'use strict';

let data = [
	{
		city: 'Rostov-on-Don LCD admiral',
		apartmentArea: '81 m2',
		repairTime: '3.5 months',
		repairCost: 'Upon request',
		img: './image/image0.png',
	},
	{
		city: 'Sochi Thieves',
		apartmentArea: '105 m2',
		repairTime: '4 months',
		repairCost: 'Upon request',
		img: './image/image1.png',
	},
	{
		city: 'Rostov-on-Don Patriotic',
		apartmentArea: '93 m2',
		repairTime: '3 months',
		repairCost: 'Upon request',
		img: './image/image2.png',
	},
];

let leftArrow = document.querySelector('#leftArrow');
let paragraph0div = document.querySelector('#paragraph0div');
let paragraph0A = document.querySelector('#paragraph0A');
let paragraph1div = document.querySelector('#paragraph1div');
let paragraph1A = document.querySelector('#paragraph1A');
let paragraph2div = document.querySelector('#paragraph2div');
let paragraph2A = document.querySelector('#paragraph2A');
let rightArrow = document.querySelector('#rightArrow');
let pCity = document.querySelector('#pCity');
let pApartAr = document.querySelector('#pApartAr');
let pRepTime = document.querySelector('#pRepTime');
let pRepCost = document.querySelector('#pRepCost');
let image = document.querySelector('#image');
let index = 0;
let styleAArr = document.querySelectorAll('.styleA');
let contLeftContArrowChoiceParagraphArr = document.querySelectorAll('.contLeft_ContArrow_ChoiceParagraph');

paragraph0div.addEventListener('click', activateParagraph0);
paragraph0A.addEventListener('click', activateParagraph0);
paragraph1div.addEventListener('click', activateParagraph1);
paragraph1A.addEventListener('click', activateParagraph1);
paragraph2div.addEventListener('click', activateParagraph2);
paragraph2A.addEventListener('click', activateParagraph2);
leftArrow.addEventListener('click', leftArrowEvent);
rightArrow.addEventListener('click', rightArrowEvent);


function activateParagraph0() {
	mainExecutiveFunction(paragraph0div, paragraph0A, 0);
}

function activateParagraph1() {
	mainExecutiveFunction(paragraph1div, paragraph1A, 1);
}

function activateParagraph2() {
	mainExecutiveFunction(paragraph2div, paragraph2A, 2);
}

function leftArrowEvent() {
	if (index === 0) {
		index = 2;
		mainExecutiveFunction(contLeftContArrowChoiceParagraphArr[index], styleAArr[index], index);
	} else {
		index--;
		mainExecutiveFunction(contLeftContArrowChoiceParagraphArr[index], styleAArr[index], index);
	}
}

function rightArrowEvent() {
	if (index === 2) {
		index = 0;
		mainExecutiveFunction(contLeftContArrowChoiceParagraphArr[index], styleAArr[index], index);
	} else {
		index++;
		mainExecutiveFunction(contLeftContArrowChoiceParagraphArr[index], styleAArr[index], index);
	}
}

	function clearOldActives() {
		let oldActives = document.querySelectorAll('.ActiveParagraph');
		for (let elem of oldActives) {
			elem.classList.remove('ActiveParagraph');
		}
	}

	function addClass(id1, id2) {
		id1.classList.add('ActiveParagraph');
		id2.classList.add('ActiveParagraph');
	}

	function changesOnThePage(num) {
		pCity.innerHTML = data[num].city;
		pApartAr.innerHTML = data[num].apartmentArea;
		pRepTime.innerHTML = data[num].repairTime;
		pRepCost.innerHTML = data[num].repairCost;
		image.src = data[num].img;
	}

	function mainExecutiveFunction(idDiv, idA, index) {
		clearOldActives();
		addClass(idDiv, idA);
		changesOnThePage(index);
	}