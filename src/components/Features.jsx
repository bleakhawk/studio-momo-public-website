import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '✓',
      title: 'Easy Check-in Flow',
      description: 'Seamless arrival experience for students and staff'
    },
    {
      icon: '📋',
      title: 'Membership & Class Management',
      description: 'Complete control over schedules, packages, and enrollment'
    },
    {
      icon: '💳',
      title: 'Front-Desk POS',
      description: 'Simple payment processing and retail management'
    },
    {
      icon: '📱',
      title: 'Student Portal & Mobile View',
      description: 'Beautiful experience on any device'
    },
    {
      icon: '🔔',
      title: 'Automated Reminders & Reports',
      description: 'Stay informed without the manual work'
    }
  ];

  return (
    <section className="features">
      <div className="section-content">
        <h2>Core Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <p className="features-tagline">
          Everything you need, nothing you don't.
        </p>
      </div>
    </section>
  );
};

export default Features;
