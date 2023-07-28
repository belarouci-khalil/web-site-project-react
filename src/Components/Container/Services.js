import React from 'react';
import './Services.css'
const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: 'service 01',
      description: 'Our mission is to provide you with the best experience possible and to share valuable information and resources with our community',
    },
    {
      id: 2,
      title: 'service 02',
      description: 'Our mission is to provide you with the best experience possible and to share valuable information and resources with our community',
    },
    {
      id: 3,
      title: 'service 03',
      description: 'Our mission is to provide you with the best experience possible and to share valuable information and resources with our community',
    },
    {
      id: 4,
      title: 'service 04',
      description: 'Our mission is to provide you with the best experience possible and to share valuable information and resources with our community',
    },
    {
      id: 5,
      title: 'service 05',
      description: 'Our mission is to provide you with the best experience possible and to share valuable information and resources with our community',
    },
    {
      id: 6,
      title: 'service 06',
      description: 'Our mission is to provide you with the best experience possible and to share valuable information and resources with our community',
    },
  ];

  return (
    <div className='stylee'>
      <h2>Our Services</h2>
      <ul>
        {servicesData.map((service) => (
          <li key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
