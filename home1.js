//////////////////////////////////////////תפריט


let navLinks = document.querySelector(".links");
let links = document.querySelectorAll(".links li");

let hamburger = document.querySelector(".hamburger").addEventListener(
    "click",
    function () {

        navLinks.classList.toggle("open"); //פותח את התפריא במסך טלפון

        for (let i = 0; i < links.length; i++) {
            links[i].classList.toggle("fade") //לפי  מציג את הנתון
        }
    }
)








    

///////////////////////////////////קרוסלה תמונה ראשית


// let sliderImages = document.querySelectorAll(".slide"),
//     arrowLeft = document.querySelector("#arrow-left"),
//     arrowRight = document.querySelector("#arrow-right"),
//     current = 0;

// function reset() { //פונקציה שעוברת על כל התמונות שיש בקרוסלה ולא מציגה אותם
//     for (let i = 0; i < sliderImages.length; i++) {
//         sliderImages[i].style.display = "none";
//     }
// }

// function startSlide() { //הצגת תמונות ממערך הראשון
//     reset();
//     sliderImages[0].style.display = "block";
// }

// // Show prev
// function slideLeft() { //הצגת את התמונה עם נחזור חזרה
//     reset();
//     sliderImages[current - 1].style.display = "block";
//     current--;
// }

// // Show next
// function slideRight() { //הצגת תמונה עם נרצה להעביר קדימה את התמונה
//     reset();
//     sliderImages[current + 1].style.display = "block";
//     current++;
// }

// arrowLeft.addEventListener("click", function () { //לחיצה על לחצן ימיני
//     if (current === 0) {
//         current = sliderImages.length;
//     }
//     slideLeft();
// });


// arrowRight.addEventListener("click", function () { //לחיצ ה על לחצן שמאלי
//     if (current === sliderImages.length - 1) {
//         current = -1;
//     }
//     slideRight();
// });

// startSlide();



///////////////////// לחיצה על הכפתור בתמונה ולהציג חלון עם הודעה


let modal = document.querySelector('#my-modalPopUp');
let modalBtn = document.querySelector('#modalButtom-btn');
let closeBtn = document.querySelector('.closePop');

modalBtn.addEventListener( //לחיצה
    'click',
    function () {
        modal.style.display = 'block';
    }
);


closeBtn.addEventListener( //לסגור אם איקס
    'click',
    function () {
        modal.style.display = 'none';
    }
);


window.addEventListener( //לסגור ברקע
    'click', outsideClick
);

function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}



///////////////////////קרוסלה של מתוגים מוצרי


let root = document.documentElement; //לקחת מ css
let marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
let marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}





///////////////////////////////////////חלונית עזרה ללקוחות
let toggleChatboxBtn = document.querySelector(".js-chatbox-toggle");
let chatbox = document.querySelector(".js-chatbox");
let chatboxMsgDisplay = document.querySelector(".js-chatbox-display");
let chatboxForm = document.querySelector(".js-chatbox-form");


toggleChatboxBtn.addEventListener("click", () => { //לחיצה כדאי שיופיע החלונית
    chatbox.classList.toggle("chatbox--is-visible");
});



const createChatBubble = input => {
    const chatSection = document.createElement("p"); //יצירת כתב מסוג 
    chatSection.textContent = input; //להציג את התגובה בחלון של שירות שרשמנו
    chatSection.classList.add("chatbox__display-chat");
    chatboxMsgDisplay.appendChild(chatSection);
};



//לחיצה על כפתור שליחה הודעה בצאט
chatboxForm.addEventListener("submit", e => {
    let chatInput = document.querySelector(".js-chatbox-input").value;

    createChatBubble(chatInput);

    e.preventDefault();
    chatboxForm.reset();
});


/////////////////הפעלת פןפ אפ של אייקונים שיש ךמעלה


let button = document.getElementById('ButtonLogin1'); //משתמש
let buttonZ = document.getElementById('ButtonContact2'); //קשר
let buttonX = document.getElementById('ButtonTerms3'); //הובלות
let buttonB = document.getElementById('ButtonMap4'); //הובלות


let openLogin = function () { //לחיצה על אייקון כדאי שיכנס
    button.className = 'active';
};
let openContact = function () { //
    buttonZ.className = 'active';
};
let openTerms = function () { //
    buttonX.className = 'active';
};
let openMap = function () { //
    buttonB.className = 'active';
};


let checkInput = function (input) { //לכתוב טקסט בתוך תבנית
    if (input.value.length > 0) {
        input.className = 'active';
    } else {
        input.className = '';
    }
};

let closeForm = function () { //על כפתור או על האיקס סגירה
    button.className = '';
};
let closeFormZ = function () {
    buttonZ.className = '';
};
let closeFormX = function () {
    buttonX.className = '';
};
let closeFormB = function () {
    buttonB.className = '';
};









//מועדפים


// let iconShoppingZ = document.querySelector('.iconShopping159');
// let cartCloseBtnZ = document.querySelector('.closeZ');
// let cartBoxZ = document.querySelector('.cartBoxXX');
// iconShoppingZ.addEventListener("click", function () {
//     cartBoxZ.classList.add('active');
// });
// cartCloseBtnZ.addEventListener("click", function () {
//     cartBoxZ.classList.remove('active');
// });


// let attToCartBtnZ = document.getElementsByClassName('attToCart12');
// let itemsZ = [];
// for (let i = 0; i < attToCartBtnZ.length; i++) {
//     attToCartBtnZ[i].addEventListener("click", function (e) {
//         if (typeof (Storage) !== 'undefined') {
//             let itemZ = {
//                 idZ: i + 700,
//                 nameZ: e.target.parentElement.children[0].textContent,
//                 priceZ: e.target.parentElement.children[1].children[0].textContent,
//                 noZ: 1
//             };
//             if (JSON.parse(localStorage.getItem('itemsZ')) === null) {
//                 itemsZ.push(itemZ);
//                 localStorage.setItem("itemsZ", JSON.stringify(itemsZ));
//                 window.location.reload();
//             } else {
//                 let localItemsZ = JSON.parse(localStorage.getItem("itemsZ"));
//                 localItemsZ.map(data => {
//                     if (itemZ.idZ == data.idZ) {
//                         itemZ.noZ = data.noZ + 1;
//                     } else {
//                         itemsZ.push(data);
//                     }
//                 });
//                 itemsZ.push(itemZ);
//                 localStorage.setItem('itemsZ', JSON.stringify(itemsZ));
//                 window.location.reload();
//             }
//         }
//     });
// }

// let iconShoppingPZ = document.querySelector('.iconShopping159 p');
// let no1Z = 0;
// JSON.parse(localStorage.getItem('itemsZ')).map(data => {
//     no1Z += Number(data.noZ);
// });
// iconShoppingPZ.innerHTML = no1Z;


// let cardBoxTableZ = cartBoxZ.querySelector('table');
// let tableDataZ = '';


// JSON.parse(localStorage.getItem('itemsZ')).map(data => {
//     tableDataZ += '<tr class="BoxIt"><th>' + data.idZ + '</th><th class="vv">' + 'name: ' + data.nameZ + ' | ' + '</th><th class="ss">' +  '</th><th class="xx">' + 'price : ' + data.priceZ + ' | ' + '</tr>';
// });

// cardBoxTableZ.innerHTML = tableDataZ;
















//הוספה לסל



//סל קניות
window.onload = function () {
    //לחיצה
    let iconShopping = document.querySelector('.iconShopping');
    let cartCloseBtn = document.querySelector('.fa-close');
    let cartBox = document.querySelector('.cartBox');
    iconShopping.addEventListener("click", function () {
      cartBox.classList.add('active');
    });
    cartCloseBtn.addEventListener("click", function () {
      cartBox.classList.remove('active');
    });
  
  
    // הוספה מידע
    let attToCartBtn = document.getElementsByClassName('attToCart');
    let items = [];
    for (let i = 0; i < attToCartBtn.length; i++) {
      attToCartBtn[i].addEventListener("click", function (e) {
        if (typeof (Storage) !== 'undefined') {
          let item = {
            id: i + 10,
            name: e.target.parentElement.children[0].textContent,
            price: e.target.parentElement.children[1].children[0].textContent,
            no: document.getElementById('number').value
          };
          if (JSON.parse(localStorage.getItem('items')) === null) {
            items.push(item);
            localStorage.setItem("items", JSON.stringify(items));
            window.location.reload();
          } else {
            let localItems = JSON.parse(localStorage.getItem("items"));
            localItems.map(data => {
              if (item.id == data.id) {
                item.no = Number(data.no);
              } else {
                items.push(data);
              }
            });
            items.push(item);
            localStorage.setItem('items', JSON.stringify(items));
            window.location.reload();
          }
        }
      });
    }
  
    //הדפסה 
    let iconShoppingP = document.querySelector('.iconShopping p');
    let no1 = 0;
    JSON.parse(localStorage.getItem('items')).map(data => {
     no1 +=  Number(data.no);
  
    });
    iconShoppingP.innerHTML = no1;
  
  
    let cardBoxTable = cartBox.querySelector('table');
    let tableData = '';
  
    JSON.parse(localStorage.getItem('items')).map(data => {
      tableData += '<tr class="BoxIt"><th>' + data.id + '</th><th class="vv">' + 'name: ' + data.name + ' | ' + '</th><th class="ss">' + 'Amount: ' + data.no + ' | ' + '</th><th class="xx">' + 'price : ' + data.price + ' | ' + '</th><th><a href="#" onclick=Delete(this);>Delete</a></th></tr>';
    });
  
    cardBoxTable.innerHTML = tableData;
  }
  
  
  
