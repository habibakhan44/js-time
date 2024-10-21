function checkTime() {
    var timeInput = document.getElementById('timeInput').value;
    var result = document.getElementById('result');
    var hour = Number(timeInput);
  
    if (timeInput.length !== 4 || isNaN(hour)) {
      result.textContent = "Invalid input. Please enter time in 24-hour format (e.g., 1900).";
      
    } else if (hour < 1200) {
      result.textContent = "Good Morning! It's time to wake up!";
      result.style.color="Green";    
    } else if (hour < 1700) {
      result.textContent = "Good Afternoon! Hope you're having a productive day!";
        result.style.color="Red";
   
    } else if (hour < 2000) {
      result.textContent = "Good Evening! Time to relax and unwind!";
        result.style.color="Green";
    
    } else if (hour <= 2359) {
      result.textContent = "Good Night! Time to sleep and recharge!";
        result.style.color="Black";

    } else {
      result.textContent = "Invalid input. Please enter a valid time.";
      
    }
  }
  