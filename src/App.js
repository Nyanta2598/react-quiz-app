import React, {useState} from "react";

import Footer from "./components/Footer.js";
import JoinScreen from "./components/JoinScreen.js";
import Navbar from "./components/Navbar.js";
import QuizScreen from "./components/QuizScreen.js";

function App() {
  
  const [isQuizStarted,setIsQuizStarted] = useState(false);
  
  return (
    <>
      <Navbar />
      <div className="quiz-container">
        {
          isQuizStarted ? (
            <QuizScreen retry={()=>setIsQuizStarted(false)} />
          ) : (
            <JoinScreen start={()=>setIsQuizStarted(true)} />
          )
        } 
      </div>
      <Footer />
    </>
  )
}

export default App;