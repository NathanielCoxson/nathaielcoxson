function grow(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const rectangle = event.target.getBoundingClientRect();
    const width = rectangle.width;
    const height = rectangle.height;
    const rectX = rectangle.x;
    const rectY = rectangle.y;

    let x = (mouseX - rectX) / width; // 0 to width
    let y = (mouseY - rectY) / width;
    let circleX = -1;
    let circleY = -1;
    //console.log(event.target.childNodes[1]);
    if(x < 0.25) circleX = 0;
    else if(x < 0.42) circleX = 1;
    else if(x < 0.6) circleX = 2;
    else if(x < 0.77) circleX = 3;
    else circleX = 4;
    if(y < 0.25) circleY = 0;
    else if(y < 0.42) circleY = 1;
    else if(y < 0.6) circleY = 2;
    else if(y < 0.77) circleY = 3;
    else circleY = 4;

    let circleIndex = ((circleX+1)+((circleY)*5))-1
    circles[circleIndex].setAttribute('r', '20');
    for(let i = 0; i < circles.length; i++) {
        if(i === circleIndex) circles[i].setAttribute('r', '25')

        else if(i === circleIndex + 1 && circleIndex % 5 !== 4) circles[i].setAttribute('r', '20');
        else if(i === circleIndex - 1 && circleIndex % 5 !== 0) circles[i].setAttribute('r', '20');
        else if(i === circleIndex - 5) circles[i].setAttribute('r', '20');
        else if(i === circleIndex + 5) circles[i].setAttribute('r', '20');

        else if(i === circleIndex - 5 + 1 && circleIndex % 5 !== 4) circles[i].setAttribute('r', '15');
        else if(i === circleIndex - 5 - 1 && circleIndex % 5 !== 0) circles[i].setAttribute('r', '15');
        else if(i === circleIndex + 5 + 1 && circleIndex % 5 !== 4) circles[i].setAttribute('r', '15');
        else if(i === circleIndex + 5 - 1 && circleIndex % 5 !== 0) circles[i].setAttribute('r', '15');
        
        else if(i === circleIndex + 10) circles[i].setAttribute('r', '12');
        else if(i === circleIndex - 10) circles[i].setAttribute('r', '12');
        else if(i === circleIndex + 10) circles[i].setAttribute('r', '12');
        else if(i === circleIndex + 2 && circleIndex % 5 < 3) circles[i].setAttribute('r', '12');
        else if(i === circleIndex - 2 && circleIndex % 5 >= 3) circles[i].setAttribute('r', '12');

        else circles[i].setAttribute('r', '10')
        
    }
}
//254
//690
function shrink(event) {
    for(let i = 0; i < circles.length; i++) {
        circles[i].setAttribute('r', '10');
    }
}

let circles = document.getElementsByClassName('circle-large');
let div = document.getElementById('circles-wrapper');
let content_div = document.querySelector('.landing .content');

for(let i = 0; i < div.childNodes.length; i++) {
    div.childNodes[i].addEventListener('mousemove', (event) => {
        event.stopPropagation();
    });
};

div.addEventListener('mousemove', grow);
content_div.addEventListener('mouseout', shrink);

//Project Cards Event Handling

// Hides or shows the description and button depending on whether or not it is currently shown.
function project_card_click(card) {
    let description = card.querySelector('.project-description');
    let button = card.querySelector('.button');

    // Hide or show based on current state
    description.style.display === 'none' ? description.style.display = 'block' : description.style.display = 'none';
    button.style.display === 'none' ? button.style.display = 'flex' : button.style.display = 'none';
}

function check_for_project_card_click(event) {
    if (event.target.closest('.project-card')) {
        project_card_click(event.target.closest('.project-card'));
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 700) {
        let project_cards = document.getElementsByClassName('project-card');
        for(let i = 0; i < project_cards.length; i++) {
            let description = project_cards[i].querySelector('.project-description');
            let button = project_cards[i].querySelector('.button');
            description.style.display = 'none';
            button.style.display = 'none';
        }
        document.addEventListener('click', check_for_project_card_click);
    }
    else {
        let project_cards = document.getElementsByClassName('project-card');
        for(let i = 0; i < project_cards.length; i++) {
            let description = project_cards[i].querySelector('.project-description');
            let button = project_cards[i].querySelector('.button');
            description.style.display = 'block';
            button.style.display = 'flex';
        }
        document.removeEventListener('click', check_for_project_card_click);
    }
});