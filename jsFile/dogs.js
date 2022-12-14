menu();//menu

popUpInfoInUpPage();//pop up info icon

helpChat();//help chat

addToShopping();//add product






function menu() {

    let navLinks = document.querySelector(".links");
    let links = document.querySelectorAll(".links li");

    let hamburger = document.querySelector(".hamburger").addEventListener(
        "click",
        function () {

            navLinks.classList.toggle("open"); //פותח את התפריא במסך טלפון

            for (let i = 0; i < links.length; i++) {
                links[i].classList.toggle("fade") //לפי  מציג את הנתון
            }
        })
}




function popUpInfoInUpPage() {

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

}




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






function helpChat() {


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
}





function addToShopping() {


    //סל

    window.onload = function () {
        let iconShopping = document.querySelector('.iconShopping');
        let cartCloseBtn = document.querySelector('.fa-close');
        let cartBox = document.querySelector('.cartBox');
        iconShopping.addEventListener("click", function () {
            cartBox.classList.add('active');
        });
        cartCloseBtn.addEventListener("click", function () {
            cartBox.classList.remove('active');
        });


        let attToCartBtn = document.getElementsByClassName('attToCart');
        let items = [];
        for (let i = 0; i < attToCartBtn.length; i++) {
            attToCartBtn[i].addEventListener("click", function (e) {
                if (typeof (Storage) !== 'undefined') {
                    let item = {
                        id: i + 600,
                        name: e.target.parentElement.children[0].textContent,
                        price: e.target.parentElement.children[1].children[0].textContent,
                        no: 1
                    };
                    if (JSON.parse(localStorage.getItem('items')) === null) {
                        items.push(item);
                        localStorage.setItem("items", JSON.stringify(items));
                        window.location.reload();
                    } else {
                        let localItems = JSON.parse(localStorage.getItem("items"));
                        localItems.map(data => {
                            if (item.id == data.id) {
                                item.no = data.no + 1;
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

        let iconShoppingP = document.querySelector('.iconShopping p');
        let no1 = 0;
        JSON.parse(localStorage.getItem('items')).map(data => {
            no1 += Number(data.no);
        });
        iconShoppingP.innerHTML = no1;


        let cardBoxTable = cartBox.querySelector('table');
        let tableData = '';

        JSON.parse(localStorage.getItem('items')).map(data => {
            tableData += '<tr class="BoxIt"><th>' + data.id + '</th><th class="vv">' + 'name: ' + data.name + ' | ' + '</th><th class="ss">' + 'Amount: ' + data.no + ' | ' + '</th><th class="xx">' + 'price : ' + data.price + ' | ' + '</th><th><a href="#" onclick=Delete(this);>Delete</a></th></tr>';
        });

        cardBoxTable.innerHTML = tableData;
    }
}