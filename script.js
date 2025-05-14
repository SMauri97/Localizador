function updateDateTime() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
    };
    const dateTimeString = now.toLocaleString('es-ES', options);
    document.getElementById('datetime').innerText = `Fecha y Hora: ${dateTimeString}`;
}

// Actualiza la fecha y hora cada segundo
setInterval(updateDateTime, 1000);
updateDateTime(); // Llama a la función una vez al cargar la página
