import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Prakash Mishra </span>
            from <span className="purple"> Prayagraj, Uttar Pradesh, India.</span>
            <br />I am a Computer Science undergraduate at United Institute Of Technology.
            <br />
            <br />
            

I am skilled in JavaScript and ReactJS for Frontend, and have working experience in web design. 
I am actively looking for Web developer Intern or Frontend Engineer positions. DM me if interested. Thanks! 😁
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
