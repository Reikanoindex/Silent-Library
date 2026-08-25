document.addEventListener('DOMContentLoaded',()=>{
    const f=document.querySelector('#contactForm');
    if(f)f.addEventListener('submit',e=>{
    e.preventDefault();
    document.querySelector('#reply').textContent='Thank you. Your message has been received.';
    f.reset()
    })
    });
    
