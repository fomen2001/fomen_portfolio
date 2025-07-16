
   

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // CV Modal functions
        function showCVModal() {
            document.getElementById('cvModal').style.display = 'block';
        }

        function closeCVModal() {
            document.getElementById('cvModal').style.display = 'none';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('cvModal');
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }

        // CV Download with tracking
        function downloadCV(event) {
  event.preventDefault();

  const data = {
    name: document.getElementById("visitorName").value,
    email: document.getElementById("visitorEmail").value,
    company: document.getElementById("visitorCompany").value,
    role: document.getElementById("visitorRole").value
  };

  fetch("https://script.google.com/macros/s/AKfycbxqeE5WZlLb_0osviyQXbZkoY4PfNidG6L4vbVBAkiQqtGpCcKWNIaaLJO897y1YLkN/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(() => {
    window.location.href = "cv_Joel.pdf"; // adapte à ton vrai fichier
  });
}

          
