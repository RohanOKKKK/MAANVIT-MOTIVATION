let inputs = document.getElementById('donate_input');
let btn = document.getElementById('donation_btn');
let label = document.getElementById('donation_label')

function btns(){
   if(inputs.value >0){
      window.open("donated.html")
   }else{
      label.textContent = "enter the amount"
   }
   

}