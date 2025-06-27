function toggleUnitInputs() {
  const unit = document.querySelector('input[name="unit"]:checked').value;

  if (unit === "imperial") {
    document.querySelector(".weight-imperial").style.display = "block";
    document.querySelector(".height-imperial").style.display = "block";
    document.querySelector(".weight-metric").style.display = "none";
    document.querySelector(".height-metric").style.display = "none";
  } else {
    document.querySelector(".weight-imperial").style.display = "none";
    document.querySelector(".height-imperial").style.display = "none";
    document.querySelector(".weight-metric").style.display = "block";
    document.querySelector(".height-metric").style.display = "block";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  toggleUnitInputs();

  document.querySelectorAll('input[name="unit"]').forEach(radio => {
    radio.addEventListener("change", toggleUnitInputs);
  });
});


function calculateTDEE(){

    let age = parseInt(document.getElementById("age").value);
    let sex = document.getElementById("sex").value;
    let unit = document.querySelector('input[name="unit"]:checked').value;
    let weight, heightft,heightin; 

    if(unit == "imperial"){
        weight = parseInt(document.getElementById("weight").value);
        heightft = parseInt(document.getElementById("heightft").value);
        heightin = parseInt(document.getElementById("heightin").value);
    }
    else{
        weight = parseInt(document.getElementById("weightkg").value);
        heightft = parseInt(document.getElementById("heightm").value);
        heightin = parseInt(document.getElementById("heightcm").value); 
        let totalHeightCm = (heightm * 100) + heightcm;

    }

    let activityLevel = document.getElementById("activity").value;
    let maleBMR, femaleBMR; 

    if(unit == "imperial"){
        maleBMR = 10 * (weight * 0.453592) + 6.25 * (((heightft * 12) + heightin) * 2.54) - 5 * age + 5;
        femaleBMR = 10 * (weight * 0.453592) + 6.25 * (((heightft * 12) + heightin) * 2.54) - 5 * age - 161;
    
    }
    else{
        maleBMR = 10 * weight + 6.25 * totalHeightCm - 5 * age + 5;
        femaleBMR = 10 * weight + 6.25 * totalHeightCm - 5 * age - 161;
    }

  
    let multiplier; 
    switch(activityLevel){
        case "BMR":
            multiplier = 1.0; 
            break;
        case "sedentary":
            multiplier = 1.2;
            break; 
        case "lightly active":
            multiplier = 1.375;
            break;
        case "moderately active":
            multiplier = 1.55; 
            break;
        case "very active":
            multiplier = 1.725; 
            break; 
        case "extremely active": 
            multiplier = 1.9; 
            break;
        default:
            alert("Please select an activity level"); 
            return; 
    }
    let tdee;
    if(sex == "male"){
        tdee = maleBMR * multiplier; 
    }
    else{
        tdee = femaleBMR * multiplier; 
    }

    document.getElementById("result").textContent = `Total TDEE is ${Math.round(tdee)} calories per day`;

}

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}