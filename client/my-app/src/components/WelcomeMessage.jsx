import React from "react";

const WelcomeMessage = () => {
  return (
    <div className="profile-page">
      <h2>Welcome to your daily activity tracker!</h2>
      <p>
        Our goal is to help you learn and grow by completing daily activities
        that are designed to build your confidence and help you develop
        important life skills that will set you up for success when it comes to
        any adventure you choose to set your sights on. We're so glad you're
        here!
      </p>
      <h3>What experts are saying:</h3>
      <div className="reviews">
        <div className="review">
          <img
            className="review-image"
            src="https://images.app.goo.gl/5znR6S91J1yKTxP9A"
            alt="Reviewer 1"
          />
          <div className="review-content">
            <div className="review-author">Dr. Jane Smith</div>
            <div className="review-text">
              The daily activity tracker is an excellent tool for promoting
              child development. It provides a structured approach to learning
              and encourages children to explore new activities, fostering their
              creativity and curiosity.
            </div>
          </div>
        </div>
        <div className="review">
          <img
            className="review-image"
            src="https://example.com/reviewer2.jpg"
            alt="Reviewer 2"
          />
          <div className="review-content">
            <div className="review-author">Dr. John Doe</div>
            <div className="review-text">
              I highly recommend the daily activity tracker for parents and
              children. It not only helps children develop essential skills but
              also strengthens the parent-child bond through shared activities
              and learning experiences.
            </div>
          </div>
        </div>
        <div className="review">
          <img
            className="review-image"
            src="https://example.com/reviewer3.jpg"
            alt="Reviewer 3"
          />
          <div className="review-content">
            <div className="review-author">Dr. Emily Johnson</div>
            <div className="review-text">
              As a child development expert, I appreciate the daily activity
              tracker's focus on holistic development. It emphasizes not only
              cognitive skills but also physical, social, and emotional aspects,
              ensuring a well-rounded learning experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
