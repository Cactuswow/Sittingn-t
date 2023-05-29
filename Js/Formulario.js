let Form_SignIn = document.getElementById('LogIn_Form');
let Form_SignUp = document.getElementById('Register_Form');
const Data = [];
var SignUpData = document.querySelectorAll('.Register_Data');

const RegExEmail = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");
const RegExPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
const RegExUser = /^[a-zA-Z0-9_-]{3,20}$/;

//Registro

SignUpData[0].oninput = function() {

    if(
        !(RegExUser.test($(SignUpData[0]).val()))
    ) {
        $(SignUpData[0]).css('color', '#f00');
    }
    else {
        $(SignUpData[0]).css('color', 'inherit');
    }

}

SignUpData[1].oninput = function() {

    if(
        !(RegExPassword.test($(SignUpData[1]).val()))
    ) {
        $(SignUpData[1]).css('color', '#f00');
    }
    else {
        $(SignUpData[1]).css('color', 'inherit');
    }

}

SignUpData[2].oninput = function() {

    if(
        !(RegExEmail.test($(SignUpData[2]).val()))
    ) {
        $(SignUpData[2]).css('color', '#f00');
    }
    else {
        $(SignUpData[2]).css('color', 'inherit');
    }
    
}

Form_SignUp.onsubmit = function(event) {
    event.preventDefault();
    SignUpData = document.querySelectorAll('.Register_Data');

    let ValueDataIn = {
        "User" : $(SignUpData[0]).val(),
        "Password" : $(SignUpData[1]).val(),
        "Email" : $(SignUpData[2]).val()
    };

    RegRegister(ValueDataIn)

}

function RegRegister(ValueDataIn) {

    if(
        RegExUser.test(ValueDataIn.User)
        &&
        RegExPassword.test(ValueDataIn.Password)
        &&
        RegExEmail.test(ValueDataIn.Email)
    ) {

        EvalueRregister(ValueDataIn)

    }

}

function EvalueRregister(ValueDataIn) {

    for(let i = 0; i < Data.length; i++) {

        if(
            Data[i].User == ValueDataIn.User
        ) {
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Usuario ya existente ' + Data[i].User,
                showConfirmButton: false,
                timer: 2000
            })
        }
        else {

            Data.push({
                "User" : ValueDataIn.User,
                "Password" : ValueDataIn.Password,
                "Email" : ValueDataIn.Email
            });
            console.log("A")
            Form_SignUp.reset()

        }
    }

    if(Data.length == 0) {

        Data.push({
            "User" : ValueDataIn.User,
            "Password" : ValueDataIn.Password,
            "Email" : ValueDataIn.Email
        });

        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Registrado ',
            showConfirmButton: false,
            timer: 2000
        })

        Form_SignUp.reset()

    }

}

//Inicio de sesión
Form_SignIn.onsubmit = function(event) {
    event.preventDefault();
    let SignInData = document.querySelectorAll('.LogIn_Data');

    let EvalueData = {
        "User" : $(SignInData[0]).val(),
        "Password" : $(SignInData[1]).val()
    }

    EvalueUser(EvalueData);
}

function EvalueUser(EvalueData) {

    let UserBoolean = false;

    for(let i = 0; i < Data.length; i++) {

        if(
            Data[i].User == EvalueData.User
            &&
            Data[i].Password == EvalueData.Password
        ) {

            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Bienvenido ' + Data[i].User,
                showConfirmButton: false,
                timer: 2000
            })

            Form_SignIn.reset()
            UserBoolean = true;
            break;
        }

    }

    if(!UserBoolean) {

        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Usuario o Contraseña incorrecta',
            showConfirmButton: false,
            timer: 2000
        })

    }

}