 let boton = document.getElementById("miBoton");
  let carta = document.getElementById("carta");
  let title1 = document.getElementById("1");
  
  boton.onclick = function() {
    carta.style.display = "block";
    boton.style.display = "none";
    title1.style.display = "none";
  }
    
  let boton2 = document.getElementById("miBoton2");
  let carta2 = document.getElementById("carta2");
    
  boton2.onclick = function() { 
    carta2.style.display = "block";
    boton2.style.display = "none";
    carta.style.display = "none";
  }

const form = document.querySelector("#carta2 form");

const respuesta = document.createElement("p");
respuesta.style.display = "none";
respuesta.style.fontSize = "20px";
respuesta.style.color = "green";
respuesta.textContent = "Gracias por tu mensaje mi amor";
document.getElementById("carta2").appendChild(respuesta);

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    let datos = new FormData(form);

    try {
        let resultado = await fetch(form.action, {
            method: form.method,
            body: datos,
            headers: { 'Accept': 'application/json' }
        });

        if (resultado.ok) {
            form.style.display = "none";
            respuesta.style.display = "block";
        } else {
            alert("Hubo un error al enviar. Intenta otra vez");
        }
    } catch (error) {
        alert("Hubo un error al enviar. Intenta otra vez");
    }
});



