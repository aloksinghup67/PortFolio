import emailjs from '@emailjs/browser';


emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export const sendContactEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      }
    );
    console.log('Email sent successfully:', response);
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Email error details:', {
      code: error.status,
      message: error.text,
      fullError: error
    });
    return { 
      success: false, 
      message: error.text || 'Failed to send email. Please try again.' 
    };
  }
};