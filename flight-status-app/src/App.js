import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { messaging } from './services/firebase'; 
import { getToken } from 'firebase/messaging'; 
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import FlightStatus from './components/FlightStatus';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  async function requestPermission() {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        // Generate Token
        const token = await getToken(messaging, {
          vapidKey: "BDG2j4w3O0pEJVnt1FkwPQCKYh_DkrA1IQ_gKWlddMBnad0q876d3pF-KmuC1SkgxGPFZs8qwjSHJzYV3VCTFFY"
        });
        console.log("Token generated:", token); 
      } else if (permission === "denied") {
        alert("You denied the notification");
      }
    } catch (error) {
      console.error("An error occurred while requesting permission or generating token:", error);
    }
  }

  useEffect(() => {
    // Request user for notification permission
    requestPermission();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<FlightStatus />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/book" element={<Content />} />
          <Route path="/trips" element={<Content />} />
          <Route path="/6e-rewards" element={<Content />} />
          <Route path="/check-in" element={<Content />} />
        </Routes>
        <Content />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
