const cards = document.querySelectorAll('.card')
 
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = '#e0f7fa';
        card.innerHTML.style
    });

    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = '#f4f4f4';
    });
});

