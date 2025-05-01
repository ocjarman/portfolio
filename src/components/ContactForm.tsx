import { Box, Button, Flex } from '@radix-ui/themes';
import { useState, ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';
import PageWrapper from './PageWrapper';

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
    border: '1px solid #e0e0e0',
    fontSize: '0.95rem',
    width: '100%',
    backgroundColor: '#ffffff',
    color: '#000000',
    '::placeholder': {
      color: '#666666'
    }
  };

  return (
    <PageWrapper title="Get In Touch">
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
              backgroundColor: '#ffffff',
              color: '#000000',
              border: '1px solid #000000',
              padding: '0.75rem',
              borderRadius: '8px',
              cursor: sending ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              width: '180px',
              margin: '0.5rem auto 0',
              fontSize: '1rem',
              opacity: sending ? 0.7 : 1,
              fontFamily: "'Enriqueta', serif"
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
    </PageWrapper>
  );
};

export default ContactForm; 