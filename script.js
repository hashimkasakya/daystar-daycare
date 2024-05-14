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
  
  
  // Initial display
  displayBabies();

 // JavaScript to handle form submission and populate the table
 document.getElementById('paymentForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Retrieve form data
  var childName = document.getElementById('childName').value;
  var childAge = document.getElementById('childAge').value;
  var periodOfStay = document.getElementById('periodOfStay').value;
  var childId = document.getElementById('childId').value;
  var contact = document.getElementById('contact').value;
  var address = document.getElementById('address').value;
  var payerName = document.getElementById('payerName').value;
  var paymentDate = document.getElementById('paymentDate').value;
  var paymentTime = document.getElementById('paymentTime').value;
  var sitterId = document.getElementById('sitterId').value;
  var sitterPayment = document.getElementById('sitterPayment').value;
  var babyHalfDay = document.getElementById('babyHalfDay').value;
  var babyFullDay = document.getElementById('babyFullDay').value;

  // Create a new row in the table
  var table = document.getElementById('paymentTable').getElementsByTagName('tbody')[0];
  var newRow = table.insertRow();

  // Populate the row with form data
  newRow.innerHTML = `
    <td>${childName}</td>
    <td>${childAge}</td>
    <td>${periodOfStay}</td>
    <td>${childId}</td>
    <td>${contact}</td>
    <td>${address}</td>
    <td>${payerName}</td>
    <td>${paymentDate}</td>
    <td>${paymentTime}</td>
    <td>${sitterId}</td>
    <td>${sitterPayment}</td>
    <td>${babyHalfDay}</td>
    <td>${babyFullDay}</td>
  `;

  // Clear the form
  document.getElementById('paymentForm').reset();

  // Optionally, you can hide the modal after form submission
  document.getElementById('paymentModal').style.display = 'none';
});




// Function to update the quantity text in the cards
function updateQuantity(category, quantity) {
  document.getElementById(category + "Quantity").innerText = "Quantity: " + quantity;
}

// Update quantities in the cards
updateQuantity("dolls", quantities.dolls);
updateQuantity("educationalMaterials", quantities.educationalMaterials);
updateQuantity("cleaningSupply", quantities.cleaningSupply);
updateQuantity("foodSnacks", quantities.foodSnacks);
updateQuantity("officeSupplies", quantities.officeSupplies);



