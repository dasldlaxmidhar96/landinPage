import React from 'react';
import ProfilePic from '../Assets/Laxmidhardas-1996.png';
import { AiFillStar } from 'react-icons/ai';

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          fugit dolorum ipsum quo itaque ipsa.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img
          src={ProfilePic}
          alt=""
          className="testimonial-section-bottom-image"
        />
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          fugit dolorum ipsum quo itaque ipsa.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Laxmidhar Das</h2>
      </div>
    </div>
  );
};

export default Testimonial;
