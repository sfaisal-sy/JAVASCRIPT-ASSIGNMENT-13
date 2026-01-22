let inputDisplay = document.getElementById('inputvalue');
    // inputDisplay = inputDisplay.value;
let digitBtn = document.querySelectorAll('button');
let digitBtnArray = Array.from(digitBtn);

let digitString = ''

digitBtnArray.forEach(eachBtn  => {
    
    eachBtn.addEventListener('click', (e) => {
        
        
        if(e.target.innerHTML === 'DEL') {
            digitString = digitString.substring(0, digitString.length - 1)
            inputDisplay.value = digitString;
        } else if (e.target.innerHTML === 'AC') {
            digitString = '';
            inputDisplay.value = digitString;
        } else if (e.target.innerHTML === '=') {
            digitString = eval(digitString);
            inputDisplay.value = digitString;
        } else {

            digitString += e.target.innerHTML;
            inputDisplay.value = digitString;

        }
        
        
    })
})



