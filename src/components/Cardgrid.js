import React from 'react';
import CardFlip from '../components/Card';

const Cardgrid = () => {
  const cardData = [
    {
      id: 1,
      fullName: 'John Doe',
      occupation: 'Software Developer',
      company: 'Tech Co',
      businessEmail: 'john.doe@techco.com',
      businessContact: '+1 123 456 7890',
    },
    {
        id: 2,
        fullName: 'John Doe',
        occupation: 'Software Developer',
        company: 'Tech Co',
        businessEmail: 'john.doe@techco.com',
        businessContact: '+1 123 456 7890',
      },
      {
        id: 3,
        fullName: 'John Doe',
        occupation: 'Software Developer',
        company: 'Tech Co',
        businessEmail: 'john.doe@techco.com',
        businessContact: '+1 123 456 7890',
      },
      {
        id: 4,
        fullName: 'John Doe',
        occupation: 'Software Developer',
        company: 'Tech Co',
        businessEmail: 'john.doe@techco.com',
        businessContact: '+1 123 456 7890',
      },
      {
        id: 5,
        fullName: 'John Doe',
        occupation: 'Software Developer',
        company: 'Tech Co',
        businessEmail: 'john.doe@techco.com',
        businessContact: '+1 123 456 7890',
      },
      {
        id: 6,
        fullName: 'John Doe',
        occupation: 'Software Developer',
        company: 'Tech Co',
        businessEmail: 'john.doe@techco.com',
        businessContact: '+1 123 456 7890',
      },
    // Add more card data as needed
  ];

  return (
    <div className="card-container">
      {cardData.map((card) => (
        <CardFlip
          key={card.id}
          fullName={card.fullName}
          occupation={card.occupation}
          company={card.company}
          businessEmail={card.businessEmail}
          businessContact={card.businessContact}
        />
      ))}
    </div>
  );
};

export default Cardgrid;