document.querySelector('#generate-names').addEventListener('submit', loadNames);

// Execute the function to query the API
function loadNames(e) {
    e.preventDefault();

    // Read the values from the form and create the variable 
    const origin = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;

    // Step 2 - Build the URL
    let url = 'http://uinames.com/api/?';

    // Step 2.1 Read the origin and append to the url
    if(origin !== '') {
        url += `region=${origin}&`;
    }
    // Step 2.2 Read the genre and append to the url
    if (genre !== '') {
        url += `gender=${genre}&`;
    }
    // Step 2.3 Read the amount and append to the url
    if (amount !== '') {
        url += `amount=${amount}&`;
    }


    // Ajax Call
    const xhr = new XMLHttpRequest();

    // Open the connection
    xhr.open('GET', url, true); 

    // Execute the function 
    xhr.onload = function() {
        if(this.status === 200) {
            const names = JSON.parse( this.responseText );
            

            // Insert output into HTML

            let html = '<h2>Generated Names</h2>';
            html += '<ul class="list">';
            names.forEach(function(name){
                html += `
                    <li>${name.name}</li>
                `;
            });
            html += '</ul>';

            document.querySelector('#result').innerHTML = html;
            
        }
    }
    
    // Send the request
    xhr.send();
        
    }

