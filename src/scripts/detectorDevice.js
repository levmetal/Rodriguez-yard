const isDesktop = () => {
    const userAgent = navigator.userAgent;
    const mobileKeywords = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'];
    return !mobileKeywords.some(keyword => userAgent.includes(keyword));
    }
    function handleModal(){
    console.log("clic");
    const openModalBtn = document.getElementById("open-modal-btn");
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementsByClassName("close")[0];
    const ctaBtn=document.querySelector('.ctabtn')
    
    // Función para abrir el modal
    function openModal() {
    modal.style.display = "block";
    }
    
    // Función para cerrar el modal
    function closeModal() {
    modal.style.display = "none";
    }
    
    //evento para cerrar modal al presionar boton en modal desktop
    
    ctaBtn.addEventListener('click', closeModal)
    // Evento para abrir el modal
    openModalBtn.addEventListener("click", openModal);
    
    // Evento para cerrar el modal al hacer clic en el botón de cerrar
    closeBtn.addEventListener("click", closeModal);
    
    // Evento para cerrar el modal al hacer clic fuera de él
    window.addEventListener("click", function(event) {
    if (event.target == modal) {
      closeModal();
    }
    });
    }
    
    
    if (isDesktop()) {
    
    const alertbtn = document.querySelector('.alert')
    alertbtn.addEventListener('click', handleModal())
    }
    else {
      const phoneNumber = '1+9009546'; // Número de teléfono a llamar
      
      const alertbtn = document.querySelector('.alert')
      alertbtn.addEventListener('click', ()=>{window.location.href = `tel:${phoneNumber}`;})
    }
    
     
       
     
    