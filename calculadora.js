
function renderizarGUI(){
    
    //Div Calculadora
    const divCalculadora= document.createElement("div")
    divCalculadora.setAttribute("id", "calculadora");
    divCalculadora.setAttribute("class", "text-center")
    divCalculadora.setAttribute("style", "width:50%; margin:0 auto; margin-top:20px;")
    document.body.appendChild(divCalculadora);

    //Div Pantalla
    const divPantalla= document.createElement("div")
    divPantalla.setAttribute("id", "divPantalla");
    divCalculadora.appendChild(divPantalla);

    //Pantalla
    const pantalla= document.createElement("input")
    pantalla.setAttribute("id", "pantalla");
    pantalla.setAttribute("type", "text");
    pantalla.setAttribute("value", "3");
    pantalla.setAttribute("disabled", "true");
    pantalla.setAttribute("class", "form-control text-right")
    divPantalla.appendChild(pantalla);


    //Div Botones
    const divBotones= document.createElement("div")
    divBotones.setAttribute("id", "botones");
    divCalculadora.appendChild(divBotones);

    //Botones
    const formbotones = document.createElement("form")
    formbotones.setAttribute("class", "buttons");
    divBotones.appendChild(formbotones);

    for (let i = 0; i < 16; i++) {
        const form = document.createElement("input");
        form.setAttribute("class", "form-buttons");
        form.setAttribute("type", "button");
        formbotones.appendChild(form);
        if(i==0){
            form.setAttribute("value", "C");
            form.setAttribute("id", "borrar");
            form.setAttribute("onclick", "Calcular('C')");
        }else if(i==1){
            form.setAttribute("value", "0");
            form.setAttribute("id", "0");
            form.setAttribute("onclick", "Calcular(0)");
        }else if(i==2){
            form.setAttribute("value", "/");
            form.setAttribute("id", "dividir");
            form.setAttribute("onclick", "Calcular('/')");
        }else if(i==3){
            form.setAttribute("value", "x");
            form.setAttribute("id", "multiplicar");
            form.setAttribute("onclick", "Calcular('x')");
            let br =document.createElement("br");
            formbotones.appendChild(br);
        }else if(i==4){
            form.setAttribute("value", "7");
            form.setAttribute("id", "7");
            form.setAttribute("onclick", "Calcular(7)");
        }else if(i==5){
            form.setAttribute("value", "8");
            form.setAttribute("id", "8");
            form.setAttribute("onclick", "Calcular(8)");
        }else if(i==6){
            form.setAttribute("value", "9");
            form.setAttribute("id", "9");
            form.setAttribute("onclick", "Calcular(9)");
        }else if(i==7){
            form.setAttribute("value", "-");
            form.setAttribute("id", "menos");
            form.setAttribute("onclick", "Calcular('-')");
            let br =document.createElement("br");
            formbotones.appendChild(br);;
        }else if(i==8){
            form.setAttribute("value", "4");
            form.setAttribute("id", "4");
            form.setAttribute("onclick", "Calcular(4)");
        }else if(i==9){
            form.setAttribute("value", "5");
            form.setAttribute("id", "5");
            form.setAttribute("onclick", "Calcular(5)");
        }else if(i==10){
            form.setAttribute("value", "6");
            form.setAttribute("id", "6");
            form.setAttribute("onclick", "Calcular(6)");
        }else if(i==11){
            form.setAttribute("value", "+");
            form.setAttribute("id", "suma");
            form.setAttribute("onclick", "Calcular('+')");
            let br =document.createElement("br");
            formbotones.appendChild(br);
        }else if(i==12){
            form.setAttribute("value", "1");
            form.setAttribute("id", "1");
            form.setAttribute("onclick", "Calcular(1)");
        }else if(i==13){
            form.setAttribute("value", "2");
            form.setAttribute("id", "2");
            form.setAttribute("onclick", "Calcular(2)");
        }else if(i==14){
            form.setAttribute("value", "3");
            form.setAttribute("id", "3");
            form.setAttribute("onclick", "Calcular(3)");
        }else if(i==15){
            form.setAttribute("value", "=");
            form.setAttribute("id", "igual");
            form.setAttribute("onclick", "Calcular('=')");
            let br =document.createElement("br");
            formbotones.appendChild(br);
        }
    }

}

document.addEventListener("click", Calcular);

function Calcular(a){
    
    if(a=="C"){
        let pantalla = document.getElementById("pantalla")
        pantalla.value=""
    }else if(a=="0"){
        let mipantalla = document.getElementById("pantalla");
        b='0'
        mipantalla.value=mipantalla.value + b;
    }else if(a=="/"){
        let mipantalla = document.getElementById("pantalla");
        b='/'
        mipantalla.value=mipantalla.value + b;
    }else if(a=="x"){
        let mipantalla = document.getElementById("pantalla");
        b='*'
        mipantalla.value=mipantalla.value + b;
    }else if(a=="7"){
        let mipantalla = document.getElementById("pantalla");
        b='7'
        mipantalla.value=mipantalla.value + b;
    }else if(a=="8"){
        let mipantalla = document.getElementById("pantalla");
        b='8'
        mipantalla.value=mipantalla.value + b;
    }else if(a=="9"){
        let mipantalla = document.getElementById("pantalla");
        b='9'
        mipantalla.value=mipantalla.value + b;
    }else if(a=="-"){
        let mipantalla = document.getElementById("pantalla");
        b='-'
        mipantalla.value=mipantalla.value + b;
    }else if(a=="4"){
        let mipantalla = document.getElementById("pantalla");
        b='4'
        mipantalla.value=mipantalla.value + b;
    }else if(a=="5"){
        let mipantalla = document.getElementById("pantalla");
        b='5'
        mipantalla.value=mipantalla.value + b;
    }else if(a=="6"){
        let mipantalla = document.getElementById("pantalla");
        b='6'
        mipantalla.value=mipantalla.value + b;
    }else if(a=="+"){
        let mipantalla = document.getElementById("pantalla");
        b='+'
        mipantalla.value=mipantalla.value + b;
    }else if(a=="1"){
        let mipantalla = document.getElementById("pantalla");
        b='1'
        mipantalla.value=mipantalla.value + b;
    }else if(a=="2"){
        let mipantalla = document.getElementById("pantalla");
        b='2'
        mipantalla.value=mipantalla.value + b;
    }else if(a=="3"){
        let mipantalla = document.getElementById("pantalla");
        b='3'
        mipantalla.value=mipantalla.value + b;
    }else if(a=="="){
        let mipantalla = document.getElementById("pantalla");
        let resultado = math.evaluate(mipantalla.value);
        mipantalla.value=resultado;
    }
    

}

renderizarGUI();
