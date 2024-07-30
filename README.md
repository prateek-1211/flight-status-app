Flight Status App and Notification System
Description
Develop a system to provide real-time flight status updates and notifications to passengers.

Features:
Real-time Updates: Display current flight status (e.g., delays, cancellations, gate changes).
Push Notifications: Send notifications for flight status changes via SMS.
Integration with Airport Systems: Pull data from airport databases for accurate information (using mock data).
Major Tech-Stack and Technologies:
Frontend Development: HTML, CSS, React.js
Backend Development: Python
Database: Firebase (for storing Sign-Up and Sign-In data)
Notifications: Firebase Cloud Messaging, Twilio
Technology Use Cases
Frontend (HTML, CSS, React.js)
Build the prototype of the app.
Utilize various components and services to create the application's user interface.
Backend (Python)
Integrate with airport systems to pull accurate flight data from databases (using mock-data.js for mock data).
Implement a file SMS.py to send notifications via SMS.
Database (Firebase)
Store user Sign-Up and Sign-In data.
Implement Sign-Up.js and Sign-In.js React components.
Connect these components with firebase.js to handle user data.
Notifications (Firebase Cloud Messaging)
Send push notifications to users about flight status changes.
Additional Tools
Twilio:
Used in both frontend and backend to send SMS notifications.
REST API:
Fetch flight status data.
Installed Packages

Frontend:
npm i axios
npm i firebase
npm i react
npm i react-dom
npm i react-router-dom
npm i react-scripts
npm i react-scroll
npm i react-slick
npm i slick-carousel
npm i socket.io-client

Backend:
pip install flask
pip install twilio
.venv to activate the Python environment

Application Structure

Virtual Environment
.venv
|_ Include
|_ Lib
|_ Scripts
  |_.gitignore
  |_pyvenv.cfg

Backend
Backend/
|_ myenv/
|_ static/
  |_ mock_flight_data.json
  |_ requirements.txt
  |_ server.py

Frontend
Flight-status-app/
|_ node_modules/
|_ public/
  |_ firebase-messaging.js
  |_ index.html
  |_ sms.js
|_ src/
  |_ assets/
    |_ invite.ics
    |_ logo.png
    |_ plane1.png
    |_ plane2.png
    |_ plane3.png
  |_ components/
    |_ styles/
      |_ Content.css
      |_ FlightStatus.css
      |_ Navbar.css
      |_ Footer.css
      |_ SignIn.css
      |_ SignUp.css
    |_ Content.js
    |_ FlightStatus.js
    |_ Navbar.js
    |_ Footer.js
    |_ SignIn.js
    |_ SignUp.js
  |_ services/
    |_ firebase.js
    |_ flightServices.js
  |_ App.css
  |_ App.js
  |_ index.css
  |_ index.js
|_ .env
|_ .gitignore
|_ package-lock.json
|_ package.json
|_ README.md

	
	
	
