import { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState(''); // 'submitting', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // TODO: Replace with your actual form submission logic
    // Example: Formspree, serverless function, or API endpoint
    try {
      // Simulated submission - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({ name: '', email: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="signup" id="signup">
      <div className="section-content">
        <h2>Join the Journey</h2>
        <p className="signup-intro">
          We'll reach out when Studio Momo opens its private beta.
        </p>
        
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status === 'submitting'}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === 'submitting'}
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Joining...' : 'Join the Waitlist'}
          </button>
        </form>

        {status === 'success' && (
          <div className="form-message success">
            ✓ Thank you! We'll be in touch soon.
          </div>
        )}
        
        {status === 'error' && (
          <div className="form-message error">
            Something went wrong. Please try again.
          </div>
        )}
      </div>
    </section>
  );
};

export default SignUp;
