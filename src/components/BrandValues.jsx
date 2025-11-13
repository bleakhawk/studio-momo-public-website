import './BrandValues.css';

const BrandValues = () => {
  const values = ['Flow', 'Ease', 'Clarity', 'Connection', 'Motion'];

  return (
    <section className="brand-values">
      <div className="section-content">
        <h2>Our Values</h2>
        <div className="values-list">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="value-item"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {value}
            </div>
          ))}
        </div>
        <div className="momo-story">
          <h3>Why "Momo"?</h3>
          <p>
            Inspired by mindfulness and motion — a reminder that great design 
            disappears when it flows.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandValues;
