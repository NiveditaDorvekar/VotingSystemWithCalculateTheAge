function calculateAge() {
    const dobInput = document.getElementById('dob');
    const dob = new Date(dobInput.value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    
    const ageError = document.getElementById('ageError');
    const ageDisplay = document.getElementById('ageDisplay'); 
    
    if (age < 18) {
      ageError.textContent = "You must be at least 18 years old.";
      ageDisplay.textContent = "Your age: " + age; 
    } else if (age > 75) {
      ageError.textContent = "You must be 75 years old or younger.";
      ageDisplay.textContent = "Your age: " + age; 
    } else {
      ageError.textContent = "";
      ageDisplay.textContent = "Your age: " + age; 
    }
  }
  
  document.getElementById('voterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateAge();
    const age = new Date().getFullYear() - new Date(document.getElementById('dob').value).getFullYear();
    const eligibilityError = document.getElementById('eligibilityError');
    
    if (age >= 18 && age <= 75) {
      eligibilityError.textContent = "You are eligible to vote!";
      window.location.href = "voting.html"; 
    } else {
      eligibilityError.textContent = "You are not eligible to vote.";
    }
  });