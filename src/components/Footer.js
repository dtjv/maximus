import React from "react";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <>
      <div className="py-5 bg-dark text-white text-center">
        <Container>
          <span>
            Made with{" "}
            <span role="img" aria-label="fire">
              🔥
            </span>{" "}
            by David Valles
          </span>
        </Container>
      </div>
    </>
  );
}

export { Footer };
