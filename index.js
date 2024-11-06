



document.getElementById("myForm").addEventListener("submit", function(event) {
 
  event.preventDefault();
  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Display form data or handle submission logic
  console.log("Form submitted!");
  console.log("Name:", name);
  console.log("Email:", email);

  // Add your form submission logic here, e.g., send data to a server
  // fetch('/submit', { method: 'POST', body: new FormData(event.target) });
});