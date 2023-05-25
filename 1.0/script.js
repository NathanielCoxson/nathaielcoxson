let dark_mode_button = document.getElementById('dark-mode-button');
let light_mode_button = document.getElementById('light-mode-button');
let light_nav_buttons = document.querySelectorAll('.light-button');
let dark_nav_buttons = document.querySelectorAll('.dark-button');
let nav = document.getElementById('nav');
let text = document.querySelectorAll("h1, h2, h3, p");

for(let i = 0; i < dark_nav_buttons.length; i++) {
    dark_nav_buttons[i].hidden = true;
    dark_nav_buttons[i].parentElement.style.display = 'none';
}
light_mode_button.hidden = true;

let dark_mode = function() {
    nav.style.backgroundColor = 'black';
    nav.style.borderBottom = '1px solid white';
    for(let i = 0; i < text.length; i++) {
        text[i].style.color = 'white';
    }
    for(let i = 0; i < dark_nav_buttons.length; i++) {
        dark_nav_buttons[i].hidden = false;
        dark_nav_buttons[i].parentElement.style.display = 'inline';
    }
    for(let i = 0; i < light_nav_buttons.length; i++) {
        light_nav_buttons[i].hidden = true;
        light_nav_buttons[i].parentElement.style.display = 'none';
    }
    document.body.style.backgroundColor = 'black';
    dark_mode_button.hidden = true;
    light_mode_button.hidden = false;
}

let light_mode = function() {
    nav.style.backgroundColor = 'white';
    nav.style.borderBottom = '1px solid black';
    for(let i = 0; i < text.length; i++) {
        text[i].style.color = 'black';
    }
    for(let i = 0; i < dark_nav_buttons.length; i++) {
        dark_nav_buttons[i].hidden = true;
        dark_nav_buttons[i].parentElement.style.display = 'none';
    }
    for(let i = 0; i < light_nav_buttons.length; i++) {
        light_nav_buttons[i].hidden = false;
        light_nav_buttons[i].parentElement.style.display = 'inline';
    }
    document.body.style.backgroundColor = 'white';
    dark_mode_button.hidden = false;
    light_mode_button.hidden = true;
}

dark_mode_button.onclick = dark_mode;
light_mode_button.onclick = light_mode;