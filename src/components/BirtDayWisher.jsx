import { useState } from "react";

export default function BirthdayWisher() {
    const [name, setName] = useState("");
    const [showWishes, setShowWishes] = useState(false);

    const wishes = [
        `🎉 Happy Birthday, ${name}! May your day be filled with love, laughter, and endless joy! 🎂`,
        `🎈 Wishing you an unforgettable birthday, ${name}! May all your dreams come true. 💖`,
        `🥳 Cheers to you, ${name}! Enjoy your special day and make amazing memories! 🎁`,
    ];

    return (
        <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ fontSize: "30px", fontWeight: "bold", color: "#ff4081" }}>
                🎂 Enter Your Name for a Special Birthday Wish!
            </h2>
            <input
                type="text"
                placeholder="Enter your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                    padding: "12px",
                    fontSize: "18px",
                    marginBottom: "10px",
                    borderRadius: "8px",
                    textAlign: "center",
                    border: "2px solid #ff4081",
                    outline: "none",
                    width: "250px",
                }}
            />
            <br />
            <button 
                onClick={() => setShowWishes(true)} 
                style={{
                    padding: "12px 24px",
                    fontSize: "18px",
                    cursor: "pointer",
                    backgroundColor: "#ff4081",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    transition: "0.3s ease-in-out",
                    marginTop: "10px",
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#d81b60"}
                onMouseOut={(e) => e.target.style.backgroundColor = "#ff4081"}
            >
                Generate Wishes 🎁
            </button>

            {showWishes && (
                <div style={{ 
                    marginTop: "30px", 
                    display: "flex", 
                    justifyContent: "center", 
                    gap: "20px", 
                    flexWrap: "wrap"
                }}>
                    {wishes.map((wish, index) => (
                        <div key={index} 
                            style={{
                                borderRadius: "12px",
                                width: "280px",
                                padding: "20px",
                                textAlign: "center",
                                fontSize: "18px",
                                fontWeight: "bold",
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                                background: `linear-gradient(135deg, #ff9a9e, #fad0c4)`,
                                animation: "fadeIn 0.8s ease-in-out",
                            }}>
                            <p style={{
                                background: "linear-gradient(90deg, #ff6a00, #ee0979)",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                                fontWeight: "bold",
                                fontSize: "20px",
                            }}>
                                {wish}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {/* Social Media Links */}
            <div style={{ marginTop: "50px", padding: "20px", backgroundColor: "#f5f5f5", borderRadius: "12px" }}>
                <h3 style={{ color: "#ff4081" }}>💌 Connect with Me:</h3>
                <p>
                    🔗 <a href="https://www.linkedin.com/in/rohit-mane-93b281333/" target="_blank" 
                        style={{ textDecoration: "none", color: "#0077b5", fontWeight: "bold" }}>LinkedIn</a>
                </p>
                <p>
                    📸 <a href="https://www.instagram.com/_mane_rohit_/" target="_blank" 
                        style={{ textDecoration: "none", color: "#E4405F", fontWeight: "bold" }}>Instagram</a>
                </p>
                <p>
                    🐦 <a href="https://github.com/engineeringduration" target="_blank" 
                        style={{ textDecoration: "none", color: "#1DA1F2", fontWeight: "bold" }}>GitHub</a>
                </p>
            </div>
        </div>
    );
}
