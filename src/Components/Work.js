import React from 'react';
import PickMeals from '../Assets/pick-meals-image.png';
import ChooseMeals from '../Assets/choose-image.png';
import DeliveryMeals from '../Assets/delivery-image.png';

const Work = () => {
  const workInfodata = [
    {
      image: PickMeals,
      title: 'Pick Meals',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum vitae laboriosam dignissimos quia.',
    },
    {
      image: ChooseMeals,
      title: 'Choose How Often',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
    {
      image: DeliveryMeals,
      title: 'Fast Deliveries',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum vitae.',
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
          consequatur eos dolorum officiis perferendis, hic maxime fugit sunt
          error voluptatibus.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfodata.map((data) => (
          <div className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
