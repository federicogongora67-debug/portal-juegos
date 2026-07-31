const input = document.getElementById("userInput");

const chat = document.getElementById("chatContainer");



function sendMessage(){

    let text=input.value.trim();


    if(text==="") return;


    addMessage("Tú",text,"user");


    input.value="";


    setTimeout(()=>{

        let answer = FGC(text);

        addMessage("FGC AI",answer,"bot");


    },500);

}




function addMessage(name,text,type){


    let div=document.createElement("div");


    div.className="message "+type;


    div.innerHTML="<b>"+name+":</b><br>"+text;


    chat.appendChild(div);


    chat.scrollTop=chat.scrollHeight;


}




function FGC(question){


let q=question.toLowerCase();



if(q.includes("hola") || q.includes("buenas")){

return "Hola. ¿Qué necesitas?";

}



if(q.includes("gracias")){

return "De nada. Estoy disponible si necesitas ayuda.";

}



if(q.includes("windows")){

return "Windows es un sistema operativo creado por Microsoft.";

}



if(q.includes("linux")){

return "Linux es un sistema operativo de código abierto utilizado en computadoras y servidores.";

}



if(q.includes("matematica")){

return "Puedo ayudarte con matemáticas. Escribe el ejercicio y lo resolveremos paso a paso.";

}



if(q.includes("castellano")){

return "Puedo ayudarte con gramática, literatura y redacción.";

}



return "No tengo esa información todavía. Explícame mejor la pregunta.";

}




// ENTER ENVÍA
// SHIFT + ENTER CREA UNA NUEVA LÍNEA

input.addEventListener("keydown",function(e){


if(e.key==="Enter" && !e.shiftKey){

e.preventDefault();

sendMessage();

}


});