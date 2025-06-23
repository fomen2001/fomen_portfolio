
   

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
            
            const name = document.getElementById('visitorName').value;
            const email = document.getElementById('visitorEmail').value;
            const company = document.getElementById('visitorCompany').value;
            const role = document.getElementById('visitorRole').value;

            // Store visitor information (in a real app, this would be sent to a server)
            const visitorData = {
                name: name,
                email: email,
                company: company,
                role: role,
                timestamp: new Date().toISOString(),
                action: 'CV_DOWNLOAD'
            };

            // For demonstration, we'll store in localStorage and show in console
            let visitors = JSON.parse(localStorage.getItem('cvDownloads') || '[]');
            visitors.push(visitorData);
            localStorage.setItem('cvDownloads', JSON.stringify(visitors));

            console.log('Nouveau téléchargement de CV:', visitorData);
            console.log('Tous les téléchargements:', visitors);

            // Show success message
            alert(`Merci ${name}! Votre demande a été enregistrée. Le téléchargement va commencer...`);

            // Here you would typically trigger the actual CV download
            // For now, we'll simulate it
            setTimeout(() => {
                // Create a dummy download link (replace with actual CV file)
                const link = document.createElement('a');
                link.href = 'data:text/plain;charset=utf-8,CV de Valdès Joël Fomena Tsatsop - Data Scientist';
                link.download = 'CV_Valdes_Joel_Fomena_Tsatsop.pdf';
                link.click();
                
                closeCVModal();
            }
        }    
