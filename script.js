
function Input(number) {
    const mainInput = document.getElementById('mainInput')
    mainInput.value += number;
}

function del() {
    const mainInput = document.getElementById('mainInput')
    mainInput.value = mainInput.value.slice(0, -1);
}

function Result() {
    const mainInput = document.getElementById('mainInput')
    try {
        const result = eval(mainInput.value);
        mainInput.value = result;
    } catch (e) {
        // Handle errors (e.g., invalid input)
        alert('Invalid expression');
    }
}

function Reset() {
    const mainInput = document.getElementById('mainInput')
    mainInput.value = '';
}



//####################### TOGGLE 

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const body = document.body;
    const mainInput = document.getElementById('mainInput');
    const buttons = document.getElementById('buttons');
    const header = document.getElementById('main-heading');
    const paragraph = document.getElementById('main-paragraph');
    const span = document.getElementById('span');

    // updating the theme
    function updateTheme(value) {
        switch (parseInt(value)) {
            case 0:
                // Theme 1
                body.style.backgroundColor = 'hsl(222, 26%, 31%)'; 
                mainInput.style.backgroundColor = 'hsl(224, 36%, 15%)'; 
                mainInput.style.color = '#f9f9f9';
                buttons.style.backgroundColor = 'hsl(223, 31%, 20%)';
                header.style.color = '#fff';
                paragraph.style.color = '#fff';
                span.style.color = '#fff';
                break;
            case 1:
                // Theme 2
                body.style.backgroundColor = 'hsl(0, 0%, 90%)'; 
                mainInput.style.backgroundColor = '#ffffff'; 
                mainInput.style.color = '#000000'; 
                buttons.style.backgroundColor = 'hsl(0, 5%, 81%)'
                header.style.color = '#000'
                paragraph.style.color = '#000'
                break;
            case 2:
                // Theme 3 
                body.style.backgroundColor = 'hsl(268, 75%, 9%)'; 
                mainInput.style.backgroundColor = 'hsl(268, 71%, 12%)'; 
                mainInput.style.color = 'hsl(52, 100%, 62%)'; 
                buttons.style.backgroundColor = 'hsl(268, 71%, 12%)';
                header.style.color = 'hsl(52, 100%, 62%)'
                paragraph.style.color = 'hsl(52, 100%, 62%)'
                break;
            // default:
            //     // Default theme
            //     body.style.backgroundColor = '#ccc'; // Light background color
            //     mainInput.style.backgroundColor = '#f3f3'; // White input background
            //     mainInput.style.color = '#000000'; // Black text color for input
            //     break;
        }
    }

    updateTheme(slider.value);

    slider.addEventListener('input', () => {
        updateTheme(slider.value);
    });
});