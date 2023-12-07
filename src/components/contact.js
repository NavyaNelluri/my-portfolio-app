// Contact component
const Contact = ({ isDarkTheme }) => {
    const submitForm = async () => {
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;
  
      var formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
  
      try {
        const response = await fetch('https://formspree.io/f/mleykvjy', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          console.log('Form submitted successfully!');
          // You can add a success message or redirect the user to a thank you page
        } else {
          console.log('Error submitting form!', response.status);
          // Handle the error, show an error message or redirect the user to an error page
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    return (
        <section id="contact" className={`mb-8 ${isDarkTheme ? 'bg-dark text-white' : 'bg-light text-black'}`}>
          <header>
            <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
          </header>
          <div className="contact-info">
            <p>
              Let's connect! Feel free to reach out through the form below or via email at{' '}
              <a href="mailto:navya.nelluri981@gmail.com">navya.nelluri981@gmail.com</a>. Phone: +1 314-791-4685
            </p>
          </div>
          <form onSubmit={submitForm} action="https://formspree.io/f/mleykvjy" method="POST" id="contactForm" name="contactForm">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
      
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
      
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
      
            <input type="text" name="_gotcha" style={{ display: 'none' }} />
      
            <button type="submit">Send Message</button>
          </form>
        </section>
      );
      
  };
  
  export default Contact;
  