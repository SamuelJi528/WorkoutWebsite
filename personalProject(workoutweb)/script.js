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
        case "bmr":
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
    let goal = document.getElementById("goal").value;
    let resultText = `Your intake recommendation base on your goal:<ul>`; 
    switch(goal){
        case "maintenance":
            resultText += `<li>Eat <strong>${Math.round(tdee)}</strong> calories daily based on your current activity level to stay current weight</li></ul>`; 
            break;
        case "surplus":
            resultText += `<li>To gain 0.5lb (0.23 kg) per week with a 250 calories surplus eat <strong>${Math.round(tdee+250)}</strong> calories daily</li>`; 
            resultText += `<li>To gain 1 lb (0.45 kg) per week with a 500 calories surplus eat <strong>${Math.round(tdee+500)}</strong> calories daily</li>`;
            resultText += `<li>To gain 1.5lb (0.68 kg) per week with a 750 calories surplus eat <strong>${Math.round(tdee+750)}</strong> calories daily</li>`;
            resultText += `<li>To gain 2 lb (0.91 kg) per week with a 1000 calories surplus eat <strong>${Math.round(tdee+1000)}</strong> calories daily</li>`;
            resultText += `</ul>`;
            break;
        case "deficit":
            resultText += `<li>To lose 0.5lb (0.23 kg) per week with a 250 calories deficit eat <strong>${Math.round(tdee-250)}</strong> calories daily</li>`; 
            resultText += `<li>To lose 1 lb (0.45 kg) per week with a 500 calories deficit eat <strong>${Math.round(tdee-500)}</strong> calories daily</li>`;
            resultText += `<li>To lose 1.5lb (0.68 kg) per week with a 750 calories deficit eat <strong>${Math.round(tdee-750)}</strong> calories daily</li>`;
            resultText += `<li>To lose 2 lb (0.91 kg) per week with a 1000 calories deficit eat <strong>${Math.round(tdee-1000)}</strong> calories daily</li>`;
            resultText += `</ul>`;
            break;
        default:
            alert("Please select your goal"); 
            return; 

    }

    document.getElementById("result").textContent = `Total TDEE is ${Math.round(tdee)} calories per day`;
    document.getElementById("result2").innerHTML = resultText;
}

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}