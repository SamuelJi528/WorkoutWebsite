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
    let weight, heightft,heightin, totalHeightCm; 

    if(unit == "imperial"){
        weight = parseInt(document.getElementById("weight").value);
        height1 = parseInt(document.getElementById("heightft").value);
        height2 = parseInt(document.getElementById("heightin").value);
    }
    else{
        weight = parseInt(document.getElementById("weightkg").value);
        height1 = parseInt(document.getElementById("heightm").value);
        height2 = parseInt(document.getElementById("heightcm").value); 
        totalHeightCm = (height1 * 100) + height2;

    }

    let activityLevel = document.getElementById("activity").value;
    let maleBMR, femaleBMR; 

    if(unit == "imperial"){
        maleBMR = 10 * (weight * 0.453592) + 6.25 * (((height1 * 12) + height2) * 2.54) - 5 * age + 5;
        femaleBMR = 10 * (weight * 0.453592) + 6.25 * (((height1 * 12) + height2) * 2.54) - 5 * age - 161;
    
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