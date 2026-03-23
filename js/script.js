
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({ 
        once: true, 
        duration: 1000 
    });
    console.log("O2 Agency Script Loaded!");
});


function openModal() {
    const modal = document.getElementById('quote-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex'); 
    document.body.style.overflow = 'hidden'; 
}


function closeModal() {
    const modal = document.getElementById('quote-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto'; 
}


window.addEventListener('click', function(event) {
    const modal = document.getElementById('quote-modal');
    if (event.target === modal) {
        closeModal();
    }
});


document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});