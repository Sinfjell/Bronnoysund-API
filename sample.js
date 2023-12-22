document.getElementById('companyName').addEventListener('input', function() {
    var companyName = this.value;

    if (companyName.length > 2) { // To avoid too many requests, wait for at least 3 characters
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://data.brreg.no/enhetsregisteret/api/enheter?navn=' + encodeURIComponent(companyName), true);

        xhr.onload = function() {
            if (this.status === 200) {
                var response = JSON.parse(this.responseText);
                if (response._embedded && response._embedded.enheter && response._embedded.enheter.length > 0) {
                    var orgNumber = response._embedded.enheter[0].organisasjonsnummer;
                    document.getElementById('orgNumber').value = orgNumber;

                    var dropdown = document.getElementById('companyDropdown');
                    dropdown.innerHTML = '';  // Clear the dropdown

                    // Populate the dropdown with the names of the organizations
                    response._embedded.enheter.forEach(function(org) {
                        var div = document.createElement('div');
                        div.textContent = org.navn;
                        div.dataset.orgNumber = org.organisasjonsnummer;
                        div.addEventListener('click', function() {
                            document.getElementById('companyName').value = this.textContent;
                            document.getElementById('orgNumber').value = this.dataset.orgNumber;
                            dropdown.innerHTML = '';  // Clear the dropdown
                        });
                        dropdown.appendChild(div);
                    });
                }
            }
        };
        xhr.onerror = function() {
            console.error("Request failed");
        };

        xhr.send();
    }
});