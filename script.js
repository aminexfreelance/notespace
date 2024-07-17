const noteList = document.querySelector('.notes-div');
const text = document.getElementById('text1');

const infoArray =  JSON.parse(localStorage.getItem('usernotes')) || [];

let fontFamily = '';
let fontColor = 'black';

 renderNote();
function renderNote() {
   let HTML = ``;
   
   for (let i = 0; i < infoArray.length; i++) {
      const note = infoArray[i].note;    
      const color = infoArray[i].color;
      const fontT = infoArray[i].font.type;
      const fontC = infoArray[i].font.color;
      const year = infoArray[i].date.year;
      const month = infoArray[i].date.month;
      const day = infoArray[i].date.day;	
      const hour = infoArray[i].date.hour;	
      const minute = infoArray[i].date.minute;	
      
   		const div = `<div class="note" style="background-color: ${color}">
     		<div class="note-text"
     		 style="font-family: ${fontT}; color: ${fontC}"> ${note}</div>
     		<div class="note-date">${year}/${month}/${day} ${hour}:${minute}</div>
     		<button onclick="deleteNote(${i},1);">X</button>
    		</div>`;
     			HTML += div;    		
   }
   
   if (HTML != ``) {
   	noteList.innerHTML = HTML; 
   } else {
   	noteList.innerHTML = '<h1>Here you see the notes.</h1>';
   }
    
   localStorage.setItem('usernotes', JSON.stringify(infoArray));
}

function addNote() {
  const d = new Date();
   if (text.value != '') {
	infoArray.push({note: text.value,color: randomColor(),font: {type: fontFamily,color: fontColor}
 	 	 ,date: {
 		 year: d.getYear()+2000-100 ,month: d.getMonth()+1 ,day: d.getDate(),
 		 hour: d.getHours() ,minute: d.getMinutes() }
 		 });
		text.value = '';
		renderNote();  	
   } else {
   	alert('You have writed Nothing');
   }

}

function deleteNote(n,t) {
	infoArray.splice(n,t);
	renderNote();
}


//Random Color
function randomColor() {
    const random = Math.random()*7;
    if (random <= 1) {
       return 'indianred'; 
    } else if (random > 1 && random <= 2) {
       return 'aqua'; 
    } else if (random > 2 && random <= 3) {
       return 'gold'; 
    } else if (random > 3 && random <= 4) {
       return 'greenyellow'; 
    } else if (random > 4 && random <= 5) {
       return 'mediumpurple'; 
    } else if (random > 5 && random <= 6) {
       return 'khaki'; 
    } else if (random > 6 && random <= 7) {
       return 'silver'; 
    } 
}
// Change font-family
function changeFont(fontName) {
	fontFamily = fontName;
}
// Toggle
function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains('on')) {
    turnOffPreviousButton();
    button.classList.add('on');
  } else {
    button.classList.remove('on');
  }
}
 function turnOffPreviousButton() {
   const previousButton = document.querySelector('.on');
  if (previousButton) {
    previousButton.classList.remove('on');
  }
}
// Font Color 
 function changeColor() {
 	const button = document.querySelector('.item3');
 	if (fontColor === 'black') {
 		fontColor = 'white';
 		button.style.backgroundColor = 'white';
 		button.style.color = 'black';
 	
 	} else if (fontColor === 'white') {
 		fontColor = 'black';
 		button.style.backgroundColor = 'black';
 		button.style.color = 'white';
 	
 	}
 	
 }