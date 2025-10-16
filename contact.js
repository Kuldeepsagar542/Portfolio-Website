document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect form data
  const formData = {
    name: document.getElementById("name").value,
    mobile: document.getElementById("mobile").value,
    email: document.getElementById("email").value,
    gender: document.querySelector("input[name='gender']:checked")?.value || "",
    message: document.getElementById("message").value,
  };

  // Replace with your Google Apps Script Web App URL
  const scriptURL = "https://script.google.com/macros/s/AKfycbyu_m3U0P07C4a5peE-o7ujG3yv1KV6C1oxouBHhBUp00ZV23sax9NUZV6O6wUldKIFJQ/exec";

  // Send data
  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(formData),
  })
    .then((response) => {
      alert("✅ Form submitted successfully!");
      document.querySelector("form").reset();
    })
    .catch((error) => {
      console.error("❌ Error!", error.message);
      alert("Something went wrong. Please try again.");
    });
});
// This is 