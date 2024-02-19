const buttons = document.querySelectorAll('.button');
// console.log(buttons);

for(let index = 0; index < buttons.length; index++){
    const button = buttons[index];
    // console.log(value);

    button.addEventListener("click", function () {
        // console.log('clicked');
        const title = button.querySelector("p");
        console.log(title.innerText)
    })
}