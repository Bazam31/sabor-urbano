
  const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbyb5yjDHfz2vF65042y7HHolJexdf6jKoR4v6M2r-b6lHF6WAnVl0XDIxHEbiuqbyop9w/exec"; // tu URL real aquí

  document.getElementById("form-reserva").addEventListener("submit", function(e){
    e.preventDefault();
    
    const form = e.target;
    const datos = {
      nombre: form.nombre.value,
      email: form.email.value,
      telefono: form.telefono.value,
      fecha: form.fecha.value,
      hora: form.hora.value,
      personas: form.personas.value,
      comentarios: form.comentarios.value
    };

    fetch(URL_SCRIPT, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      if(data.result === "success"){
        document.getElementById("mensaje-confirmacion").style.display = "block";
        form.reset();
      }
    });
  });

