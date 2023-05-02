const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    
    event.preventDefault();
    
    
    const target = (event.target as Element).getAttribute('href');
    const targetId = target?.slice(1);
    
  
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });

   
    history.pushState('', document.title, window.location.pathname + window.location.search);
  });
});

export{}