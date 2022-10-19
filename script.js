let dark_mode_button = document.getElementById('dark-mode-button');
let light_mode_button = document.getElementById('light-mode-button');

light_mode_button.hidden = true;

let dark_mode = function() {
    dark_mode_button.hidden = true;
    light_mode_button.hidden = false;
    document.getElementById('nav').style.backgroundColor = 'black';
}

let light_mode = function() {
    dark_mode_button.hidden = false;
    light_mode_button.hidden = true;
    document.getElementById('nav').style.backgroundColor = 'white';
}

dark_mode_button.onclick = dark_mode;
light_mode_button.onclick = light_mode;