document.getElementById("button");

function contacting() {

  let varButton = prompt("Si requieres contactarme, entonces dejame tu e-mail por favor y pronto me pondré en contacto contigo", "");

  if (varButton != null) {
    confirm("Tu e-mail es: " +  varButton + " ¡gracias por todo! ");
  } else {
    alert("Entonces mejor apuntas mi e-mail diegodcaldascaridad@gmail.com y me escribes");
  }
}
