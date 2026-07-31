const input=document.getElementById("input");
const chat=document.getElementById("chat");



function sendMessage(){


let text=input.value.trim();


if(text==="") return;



addMessage("Tú",text,"user");


input.value="";



setTimeout(()=>{


let answer=FGC(text);


addMessage("FGC AI",answer,"bot");


},600);


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




// SALUDOS


if(q.includes("hola") || q.includes("hello") || q.includes("hi")){

return "Hola. Soy FGC AI 4.0. ¿Qué necesitas?";

}



// CONVERSACION


if(q.includes("gracias")){

return "De nada. Estoy disponible si necesitas ayuda.";

}



if(q.includes("triste") || q.includes("mal")){

return "Siento que estés pasando por eso. Si quieres puedes contarme qué ocurre.";

}




// INGLES


if(q.includes("hello")){

return "Hello. How can I help you?";

}



if(q.includes("how are you")){

return "I'm fine. Thank you for asking.";

}



if(q.includes("thank you")){

return "Thank you significa gracias.";

}




// PORTUGUES


if(q.includes("olá") || q.includes("ola")){

return "Olá. Como posso ajudar você?";

}



if(q.includes("obrigado")){

return "Obrigado significa gracias en portugués.";

}




// TRADUCCION


if(q.includes("computer")){

return "Computer = Computador.";

}



if(q.includes("keyboard")){

return "Keyboard = Teclado.";

}



if(q.includes("friend")){

return "Friend = Amigo.";

}




// INFORMATICA


if(q.includes("windows")){

return "Windows es un sistema operativo creado por Microsoft.";

}



if(q.includes("linux")){

return "Linux es un sistema operativo libre y de código abierto.";

}



if(q.includes("javascript")){

return "JavaScript es un lenguaje usado para crear páginas web interactivas.";

}



if(q.includes("html")){

return "HTML crea la estructura de una página web.";

}





// MATERIAS


if(q.includes("matematica")){

return "Puedo ayudarte con matemáticas y explicar procedimientos paso a paso.";

}



if(q.includes("ingles")){

return "Puedo ayudarte con inglés, traducciones y gramática.";

}



if(q.includes("castellano")){

return "Puedo ayudarte con literatura, ortografía y escritura.";

}



if(q.includes("fisica")){

return "La física estudia la materia, energía y movimiento.";

}



if(q.includes("quimica")){

return "La química estudia la materia y sus transformaciones.";

}





return "Oh no, esa pregunta todavía no la sé. ¿Me la puedes explicar para aprender más sobre el tema?";


}






// ENTER ENVIA
// SHIFT + ENTER HACE SALTO DE LINEA


input.addEventListener("keydown",function(e){


if(e.key==="Enter" && !e.shiftKey){


e.preventDefault();


sendMessage();


}


});