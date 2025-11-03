import React from "react";
import MemberCard from "./MemberCard";
import "./App.css";

const teamMembers = [
  { name: "Alice", role: "Frontend Developer", avatar: "/img/alice.jpg" },
  { name: "Bob", role: "Backend Developer", avatar: "/img/bob.jpg" },
  { name: "Charlie", role: "UI/UX Designer", avatar: "/img/charlie.jpg" },
];

const App = () => {
  return (
    <div className="app">
      <h1 className="app-title">CodeVerse Studio</h1>
      <p className="app-subtitle">Meet Our Development Team 🚀</p>

      <div className="team-list">
        {teamMembers.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            avatar={member.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
