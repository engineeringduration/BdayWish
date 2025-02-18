import { useState } from "react";
import confetti from "canvas-confetti";
import "./BirthdayWish.css"; // Import styles

export default function BallonEffect() {
  const [name, setName] = useState("");
  const [showWish, setShowWish] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }, // Confetti starts from middle
    });
  };

  const handleWish = () => {
    if (name.trim()) {
      setShowWish(true);
      triggerConfetti();
    }
  };

  return (
    <div className="wish-container">
    

      {showWish && (
        <div className="wish-card">
       
          <div className="balloons">
            <span className="balloon red"></span>
            <span className="balloon blue"></span>
            <span className="balloon yellow"></span>
          </div>
        </div>
      )}
    </div>
  );
}
