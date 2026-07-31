const input=document.getElementById("input");
const chat=document.getElementById("chat");



function sendMessage(){


let pregunta=input.value.trim();


if(pregunta==="") return;


addMessage("Tú",pregunta,"user");


input.value="";



setTimeout(()=>{

addMessage(
"FGC AI",
respuestaFGC(pregunta),
"bot"
);


},500);


}




function addMessage(nombre,texto,tipo){


let div=document.createElement("div");

div.className="message "+tipo;


div.innerHTML=
"<b>"+nombre+"</b><br>"+texto;


chat.appendChild(div);


chat.scrollTop=chat.scrollHeight;


}





function respuestaFGC(p){


let q=p.toLowerCase();



// CONVERSACIÓN


if(q.includes("hola") || q.includes("oye")){

return "Dime. ¿Qué necesitas?";

}



if(q.includes("gracias")){

return "De nada. Estoy disponible si necesitas ayuda.";

}




// IDIOMAS


if(q.includes("hello") || q.includes("hi")){

return "Hello. How can I help you?";

}



if(q.includes("obrigado")){

return "Obrigado significa gracias en portugués.";

}



// TRADUCTOR


if(q.includes("hola en ingles")){

return "Hola en inglés es: Hello.";

}



if(q.includes("gracias en ingles")){

return "Gracias en inglés es: Thank you.";

}




// SISTEMAS


if(q.includes("windows")){

return "Windows es un sistema operativo creado por Microsoft.";

}



if(q.includes("linux")){

return "Linux es un sistema operativo de código abierto.";

}




// COMANDOS


if(q.includes("ver ip")){

return `
Comando Windows:<br><br>

<code>ipconfig</code>

<br><br>

Linux:

<br>

<code>ip a</code>
`;

}



if(q.includes("actualizar linux")){

return `
Comando:

<br><br>

<code>
sudo apt update && sudo apt upgrade
</code>
`;

}




if(q.includes("crear carpeta")){

return `
Windows:

<br>
<code>mkdir nombre</code>

<br><br>

Linux:

<br>

<code>mkdir nombre</code>
`;

}




// PROGRAMACIÓN


if(q.includes("html")){

return `
HTML crea páginas web.

Ejemplo:

<br><br>

<code>
&lt;h1&gt;Hola Mundo&lt;/h1&gt;
</code>
`;

}



if(q.includes("javascript")){

return "JavaScript agrega funciones e interacción a páginas web.";

}





// JUEGOS


if(q.includes("minecraft")){

return "Minecraft es un juego de construcción y supervivencia con bloques.";

}



if(q.includes("fps")){

return "Para mejorar FPS: baja gráficos, actualiza drivers y cierra programas innecesarios.";

}




// MATERIAS


if(q.includes("matematica")){

return "Puedo ayudarte con matemáticas explicando el procedimiento paso a paso.";

}



if(q.includes("ingles")){

return "Puedo ayudarte con inglés, traducciones y gramática.";

}




return "Estoy analizando tu pregunta. Todavía estoy aprendiendo, pero puedo ayudarte si me das más contexto.";

}






// ENTER ENVÍA
// SHIFT + ENTER SALTO


input.addEventListener("keydown",function(e){


if(e.key==="Enter" && !e.shiftKey){

e.preventDefault();

sendMessage();

}


});