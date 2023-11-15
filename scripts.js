
  
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


    let max_digit = getCookie("max-digit")
    if (max_digit != ""){
        window.alert(max_digit + " in cookies!\nAfter pressing ok it will be deleted!")
        document.cookie = "max-digit=;"
        console.log(document.cookie)
    } else {
        on_click()
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

function on_click(){
    let num = prompt("Please enter your number:", "")
    if (num == null || num == ""){
        return
    }
    let max_digit = maxDigit(num)
    document.cookie = `max-digit=${max_digit};`;
    window.alert(max_digit + " saved to cookies!")
    console.log(document.cookie)
}