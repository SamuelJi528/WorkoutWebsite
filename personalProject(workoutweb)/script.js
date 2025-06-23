function calculateTDEE(){
    let age = parseInt(document.getElementById("age").value);
    let sex = document.getElementById("sex").value;
    let weight = parseInt(document.getElementById("weight").value);
    let heightft = parseInt(document.getElementById("heightft").value);
    let heightin = parseInt(document.getElementById("heightin").value);
    let activityLevel = document.getElementById("activity").value; 
    let heightTotalInch = ((heightft*12)+heightin);
    let maleBMR = 10 * (weight * 0.453592) + 6.25 * (((heightft * 12) + heightin) * 2.54) - 5 * age + 5;
    let femaleBMR = 10 * (weight * 0.453592) + 6.25 * (((heightft * 12) + heightin) * 2.54) - 5 * age - 161;
    
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