let string ="";
let buttons = document.querySelectorAll('.button');
// function call(){
//     console.log("fdfd");
// }
buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
           string = eval(string);
            // console.log("string",string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = "";
        }
        else{
            // console.log(e.target)
            string = string + e.target.innerHTML;
            // console.log(string);
            document.querySelector('input').value = string;
        }

    })
})



