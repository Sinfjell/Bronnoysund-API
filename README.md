# Organization Number Search in Brønnøysund
This repository demonstrates a simple yet powerful functionality of searching for an organization number and auto-populating an HTML field based on the input in another field.

The application listens for input in a text field, and once the input length exceeds two characters, it sends a GET request to the 'Enhetsregisteret' API. The API responds with a list of organizations matching the input. The first organization's number from the response is then auto-populated in another HTML field. Additionally, a dropdown is populated with the names of all the returned organizations. Clicking on an organization name in the dropdown will auto-populate both the organization name and number fields with the respective information.

## Running the Application
To run this application locally, you need to serve the HTML file through a web server. If you have Python installed, you can use its built-in HTTP server.

Open your terminal, navigate to the directory containing the project files, and run the following command:

python -m http.server

Then, open your web browser and navigate to http://localhost:8000/sample.html to view and interact with the application.
