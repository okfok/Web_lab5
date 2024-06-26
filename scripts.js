
  
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
 

function on_load(){

    let data3 = document.getElementById("box3").innerHTML
    let data6 = document.getElementById("box6").innerHTML


    document.getElementById("box3").innerHTML = data6
    document.getElementById("box6").innerHTML = data3




    let side1 = 5
    let side2 = 6

    document.getElementById("box5").innerHTML += side1 * side2

    document.getElementById("radiobuttons").addEventListener("mouseout", set_align)
    function set_align(){
        if (document.getElementById("right").checked){
            document.getElementById("box2").style.textAlign = "right"
            document.getElementById("box4").style.textAlign = "right"
            document.getElementById("box5").style.textAlign = "right"
    
        }
        else {
            document.getElementById("box2").style.textAlign = ""
            document.getElementById("box4").style.textAlign = ""
            document.getElementById("box5").style.textAlign = ""
    
        }
    }

    const radio_default = document.getElementById("default")
    const radio_right = document.getElementById("right")

    if(localStorage.getItem("value")){
        radio_default.checked = false
        radio_right.checked = true

    } else {
        radio_default.checked = true
        radio_right.checked = false
    }


    set_align()

    
    
    radio_default.addEventListener("change", (event) => {
        localStorage.removeItem("value")

    })
    
    radio_right.addEventListener("change", (event) => {
        localStorage.setItem("value", true)
    })


    for (let i = parseInt(localStorage.getItem("length"))-1; i >= 0; i--){
        
        localStorage.removeItem(i)
    }


    localStorage.setItem("length", 0)

    document.getElementById("box-select").addEventListener("change", (event) => {
        const input = document.getElementById("input")
        if (input){
            input.remove()
        }
        document.getElementById("box" + event.target.value).innerHTML += `<div id="input">
        <input id="text-input">
        <button id="input_button">add to list</button>
        </div>`
        document.getElementById("input_button").addEventListener("click", (event) => {
            const i = document.getElementById("text-input")
            let length = localStorage.getItem("length")
            localStorage.setItem(length, i.value)
            localStorage.setItem("length", parseInt(length)+1)
            draw_list()
        })
        
    })




    let max_digit = getCookie("max-digit")
    if (max_digit != ""){
        window.alert(max_digit + " in cookies!\nAfter pressing ok it will be deleted!")
        document.cookie = "max-digit=;"
        console.log(document.cookie)
    } else {
        let num = prompt("Please enter your number:", "")
    if (num == null || num == ""){
        return
    }
    let max_digit = maxDigit(num)
    document.cookie = `max-digit=${max_digit};`;
    window.alert(max_digit + " saved to cookies!")
    console.log(document.cookie)
    }
}





function maxDigit(n){
    if(n == 0){ 
         return 0;
        }
    else{
      return Math.max(n%10, Math.floor(maxDigit(n/10)));
    }
}




function draw_list(event){
    const lst = document.getElementById("list")
    let list = localStorage.getItem("list")
    lst.innerHTML = ""
    for (let i = 0; i < localStorage.getItem("length"); i++){

        lst.innerHTML += "<li>" + localStorage.getItem(i) + "</li>"
    }
}