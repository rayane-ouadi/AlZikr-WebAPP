const btn = document.getElementById('counterZikr');


btn.addEventListener('click', function dec(){
    let span = document.getElementById('displayCounter');
    span.textContent = Number(span.textContent) - 1;

    
})