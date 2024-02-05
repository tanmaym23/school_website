// TIME
// Set the registration deadline date and time
var registrationDeadline = new Date("2023-11-21T00:00:00").getTime();

// Update the countdown every second
var countdownInterval = setInterval(function () {
  var now = new Date().getTime();
  var timeLeft = registrationDeadline - now;

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update the HTML elements to display the countdown
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is over, display a message
  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "Registration Closed";
  }
}, 1000);

// FORM VALIDATION HOME PAGE
// Form validation for the registration form
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  if (name === "" || email === "" || phone === "") {
    alert("Please fill in all fields");
    return false;
  }
}

// contact page
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.querySelector('input[type="text"]');
  var email = document.querySelector('input[type="email"]');
  var subject = document.querySelector('input[type="text"]');
  var message = document.querySelector('textarea');

  if(name.value === "" || email.value === "" || subject.value === "" || message.value === "") {
      alert("All fields must be filled out");
      return false;
  }

  var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(email.value.match(emailPattern)) {
      alert("Form submitted successfully");
  } else {
      alert("Invalid email address");
      return false;
  }
});

// COURSE PAGE
var courses = document.querySelectorAll('.courses');

// Loop through each course
for (var i = 0; i < courses.length; i++) {
    // Add click event listener to each course
    courses[i].addEventListener('click', function() {
        // Get the course name
        var courseName = this.querySelector('h6').textContent;
        // Change the background color of the clicked course
        this.style.backgroundColor = '#f0f0f0';
        // Display an alert with the course name
        alert('You can check course details in course section');
        window.open('course.html')
    });
}


