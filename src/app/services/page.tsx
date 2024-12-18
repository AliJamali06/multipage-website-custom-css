import React from 'react';
const services = [
  {
    title: 'Web Development',
     description: 'Bulid modern, responsive website with latest technologies.',
      icon:'🌐',
    
  },
  {
    title: 'App Development',
     description: 'Create cross-platform mobile applications for iOS and Android.',
       icon: '📱',

   
  },
  {
    title: 'SEO Optimization',
     description: 'Improve your website ranking on search engines with SEO services.',
      icon: '🔍',

   
  },
  {
    title: 'Digital Marketing',
     description: 'Boost your business with targrt online marketing strategies.',
      icon: '📈',

  },
];

const Services = () => {
  return (

    <div className="main-container">
    <h1>Our Services</h1>
    <div className="services-grid">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <span className="service-icon">{service.icon}</span>
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      ))}
    </div>
  </div>
);
}
export default Services;