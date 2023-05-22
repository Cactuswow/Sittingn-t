Body = document.body;
Card = document.querySelectorAll('.Slider1_Grid_Element');
const Slider1_Activity = document.getElementById('Slider1_Activity');

var IsActiveCard = [];
var TimeCard = [];
var Slider1_Timer = [];

IsActiveCard.length = Card.length - 1;
TimeCard.length = Card.length-1;
Slider1_Timer.length = Card.length - 1;

for(let i = 0; i < Card.length - 1; i++) {

    IsActiveCard[i] = true;
    TimeCard[i] = 0;

    Card[i].onclick = function() {
        // Slider1_Activity.innerHTML = '';
        
        //Padre
        const Slider1_div = document.createElement('div');
        Slider1_div.classList.add('Activity_' + i, 'Activity_Running');

        //Rombo e Icon
        const Slider1_Square = document.createElement('span');
        Slider1_Square.classList.add('ActivitySquare');
        let icon = Card[i].querySelector('i');

        //Push Icon y rombo
        Slider1_Square.appendChild(icon.cloneNode(false));
        Slider1_div.appendChild(Slider1_Square);

        //h1 y p
        const Slider1_Paragraph = document.createElement('div');
        Slider1_Paragraph.classList.add('Activity_Paragraph');
        let Slider1_h1 = document.createElement('h1');
        let Slider1_p = document.createElement('p');

        let Slider1_Title = Card[i].querySelector('h1')
        let Slider1_Description = Card[i].querySelector('h2');

        Slider1_h1.textContent = Slider1_Title.innerHTML;
        Slider1_p.textContent = Slider1_Description.innerHTML;

        //Push h1 y p a Paragraph

        Slider1_Paragraph.appendChild(Slider1_h1);
        Slider1_Paragraph.appendChild(Slider1_p);
        Slider1_div.appendChild(Slider1_Paragraph);

        //SideBar
        const Slider1_SideBar = document.createElement('div');
        Slider1_SideBar.classList.add('Slider1_SideBar');
        let Slider1_Timep = document.createElement('p');
        let Slider1_X = document.createElement('i');
        Slider1_X.classList.add('fa-solid', 'fa-xmark');

        //Push SideBar
        Slider1_SideBar.appendChild(Slider1_Timep);
        Slider1_SideBar.appendChild(Slider1_X);
        Slider1_div.appendChild(Slider1_SideBar);

        //Push SliderDiv a Activity (Padre)
        if(IsActiveCard[i]) {
            Slider1_Activity.appendChild(Slider1_div);
            icon.classList.add('fa-beat')
            IsActiveCard[i] = false;
            Slider1_Timer[i] = setInterval(Slider1_TimeRun, 1000, i, Slider1_Timep);
        }else{ 
            document.querySelector('.Activity_' + i).remove();
            icon.classList.remove('fa-beat');
            IsActiveCard[i] = true;
            clearInterval(Slider1_Timer[i]);
            TimeCard[i] = 0;
        }

        const BackgroundColor = $(Card[i]).css('background-color');
        $(Slider1_div).css('background', BackgroundColor);
        $(Slider1_Square).css('color', BackgroundColor);
        const Color = $(Card[i]).css('color');

        Slider1_X.onclick = function() {
            document.querySelector('.Activity_' + i).remove();
            icon.classList.remove('fa-beat');
            IsActiveCard[i] = true;
            clearInterval(Slider1_Timer[i]);
            TimeCard[i] = 0;
        }
    }

}

function Slider1_TimeRun(i, Slider1_Timep) {
    Slider1_Timep.textContent = TimeCard[i] + " S";
    TimeCard[i]++;
}



for(let i = 0; i < Card.length - 1; i++) {

    Card[i].oncontextmenu = function(event) {
        event.preventDefault();

    }

}

const CardInformation = document.getElementById('Slider1_CardInformation');
const Slider1_TimerAlert = document.querySelector('.Card_TimerAlert');
let Slider1_CountAlert = document.getElementById('CardTimer');
let Slider1_ColorInput = document.querySelector('.Input_Color');

Slider1_CountAlert.oninput = function() {
    let ConvertTime = $(Slider1_CountAlert).val();

    if(ConvertTime >= 60) {
        ConvertTime/= 60;
        ConvertTime = ConvertTime.toFixed(2);
        ConvertTime+= " H";
    }else {
        ConvertTime+= " Min";
    }

    Slider1_TimerAlert.innerHTML = ConvertTime;
}

Slider1_ColorInput.onchange = function() {
    $(CardInformation).css('color', '#000');
    let BackgroundColor_Input = $(Slider1_ColorInput).val()
    let Red_input = parseInt(BackgroundColor_Input[1] + BackgroundColor_Input[2],16);
    let Green_input = parseInt(BackgroundColor_Input[3] + BackgroundColor_Input[4],16);
    let Blue_input = parseInt(BackgroundColor_Input[5] + BackgroundColor_Input[6],16);

    if(Red_input <= 75 || Green_input <= 75 || Blue_input <= 75) {
        $(CardInformation).css('color', '#fff');
    }
    
    $(CardInformation).css('background', BackgroundColor_Input);
    console.log(BackgroundColor_Input)
}