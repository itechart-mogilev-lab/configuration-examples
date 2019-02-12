import { Service } from "./service";

import './style.css'




let div = document.createElement('input')
div.classList = ["container"];

let btn = document.createElement('button')
btn.innerText = 'click'
btn.addEventListener("click", () => {
    // comment
    
    console.log('clicked')
})


document.body.appendChild(div);
document.body.appendChild(btn);