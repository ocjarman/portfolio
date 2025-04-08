import { Box, Button, Flex, Heading } from '@radix-ui/themes';
import { useState, ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        address: formData.address,
        message: formData.message,
      };

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!, // Using environment variable
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!, // Using environment variable
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY! // Using environment variable
      );

      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const inputStyle = {
    padding: '0.75rem',
    borderRadius: '8px',
    border: 'none',
    fontSize: '0.95rem',
    width: '100%',
    backgroundColor: '#F0F0FF',
    color: '#000000',
    '::placeholder': {
      color: '#666666'
    }
  };

  return (
    <Box style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      minHeight: '100vh',
      backgroundColor: '#E8E6F3',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingTop: '6rem',
      paddingBottom: '2rem',
      paddingLeft: '2rem',
      paddingRight: '2rem'
    }}>
      <Box style={{ 
        maxWidth: '700px', 
        width: '90%', 
        margin: '0 auto',
        padding: '2.5rem',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <Heading 
          size="6" 
          style={{ 
            marginBottom: '2rem', 
            textAlign: 'center',
            color: '#000000',
            fontSize: '2.2rem'
          }}
        >
          Get In Touch
        </Heading>
        <form onSubmit={handleSubmit}>
          <Flex direction="column" style={{ gap: '1.5rem' }}>
            <Flex style={{ gap: '2rem', width: '100%' }}>
              <Box style={{ width: '50%' }}>
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => 
                    setFormData({ ...formData, firstName: e.target.value })}
                  required
                  style={inputStyle}
                />
              </Box>
              <Box style={{ width: '50%' }}>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => 
                    setFormData({ ...formData, lastName: e.target.value })}
                  required
                  style={inputStyle}
                />
              </Box>
            </Flex>
            
            <Flex style={{ gap: '2rem', width: '100%' }}>
              <Box style={{ width: '50%' }}>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => 
                    setFormData({ ...formData, email: e.target.value })}
                  required
                  style={inputStyle}
                />
              </Box>
              <Box style={{ width: '50%' }}>
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => 
                    setFormData({ ...formData, phone: e.target.value })}
                  style={inputStyle}
                />
              </Box>
            </Flex>

            <Box style={{ width: '100%' }}>
              <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e: ChangeEvent<HTMLInputElement>) => 
                  setFormData({ ...formData, address: e.target.value })}
                style={inputStyle}
              />
            </Box>
            
            <Box style={{ width: '100%' }}>
              <textarea
                placeholder="Type your message here"
                value={formData.message}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => 
                  setFormData({ ...formData, message: e.target.value })}
                required
                style={{
                  ...inputStyle,
                  minHeight: '120px',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
              />
            </Box>
            
            <Button
              type="submit"
              disabled={sending}
              style={{
                backgroundColor: '#4040B2',
                color: 'white',
                border: 'none',
                padding: '0.75rem',
                borderRadius: '8px',
                cursor: sending ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.2s',
                width: '180px',
                margin: '0.5rem auto 0',
                fontSize: '1rem',
                opacity: sending ? 0.7 : 1
              }}
            >
              {sending ? 'Sending...' : 'Submit'}
            </Button>
          </Flex>
        </form>
        
        {submitted && (
          <Box style={{ 
            textAlign: 'center', 
            marginTop: '1rem',
            color: '#4CAF50',
            fontSize: '1rem'
          }}>
            Thanks for submitting!
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ContactForm; 