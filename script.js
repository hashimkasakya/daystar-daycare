document.getElementById("signupLink").addEventListener("click", function() {
    // Redirect to the signup page
    window.location.href = "signup.html";
});


document.getElementById("loginForm").addEventListener("submit", function(event) {
event.preventDefault();
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

// You can add validation logic 

// Check if username and password match
if (username === "admin" && password === "admin1") {
    // Store user information in local storage
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("username", username);
    
    // Redirect to admin page
    window.location.href = "admin.html";
} else {
    alert("Invalid username or password. Please try again.");
}
});


 // Function to load content dynamically based on sidebar clicks
 function loadContent(page) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", page + ".html", true);
    xhttp.send();
  }

  // Load default content
  loadContent("sitters");

  // Add event listeners to sidebar links
  document.querySelectorAll("#sidebar a").forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      var page = this.getAttribute("href").substring(1);
      loadContent(page);
    });
  });

  
  // slider
  let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function nextSlide() {
  slideIndex++;
  showSlides();
}

function prevSlide() {
  slideIndex--;
  showSlides();
}

showSlides();



   // Update baby count
   document.getElementById('totalBabies').textContent = babies.length;
  }
  
  // Initial display
  displayBabies();

  // payments javascript for the payments page
  document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve selected payment type
    const paymentType = document.getElementById('paymentType').value;

    // Calculate amount based on payment type
    let amount;
    switch(paymentType) {
        case 'halfDay':
            amount = 10000;
            break;
        case 'fullDay':
            amount = 15000;
            break;
        case 'monthly':
            amount = "Contact us for monthly payment details.";
            break;
        default:
            amount = "Invalid payment type.";
    }

    // Display amount
    document.getElementById('paymentResult').innerHTML = `
        <h3>Payment Amount</h3>
        <p>${amount} UGX</p>
    `;
});
