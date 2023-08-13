const resultBox = document.querySelector("input[type='text']"); 
const buttons = document.querySelectorAll("input[type='button']"); 



buttons.forEach((button) => {
  // add click event
  button.addEventListener("click", (e) => {
    
    if (e.target.value === "C") {
    
      resultBox.value = "";
    } else if (e.target.value === "=") {
      // check if user want result
      if (resultBox.value) resultBox.value = eval(resultBox.value); // now first check resultBox has value or not, then evaluate resultBox value if exist
    } else if (e.target.value === "Clr") {
      // check user press clear button
      if (resultBox.value) resultBox.value = resultBox.value.slice(0, -1);
    }  else if(e.target.value ==="sin"){
      if(resultBox.value) resultBox.value = Math.sin(resultBox.value*(Math.PI/180));
    } else if(e.target.value ==="cos"){
      if(resultBox.value) resultBox.value = Math.cos(resultBox.value*(Math.PI/180));
    } else if(e.target.value ==="tan"){
      if(resultBox.value) resultBox.value = Math.tan(resultBox.value*(Math.PI/180));
    }  else if(e.target.value ==="log"){
      if(resultBox.value) resultBox.value = Math.log10(resultBox.value);
    } 
     else {
      // default case user press simple button, then add button value into input container
      resultBox.value += e.target.value;
    }

 
  });
});
