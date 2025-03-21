import emailjs from '@emailjs/browser';
import axios from 'axios';

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export const sendContactEmail = async (formData) => {
  try {
   
    const ipResponse = await axios.get("https://ipwho.is/");
    
    if (!ipResponse.data.success) {
      console.error("Failed to fetch IP information");
      return { success: false, message: 'Failed to fetch IP information.' };
    }
    
    const userIpInfo = ipResponse.data;

    const emailParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      user_ip: userIpInfo.ip,
      user_country: userIpInfo.country,
      user_region: userIpInfo.region,
      user_city: userIpInfo.city,
      user_isp: userIpInfo.isp
    };

    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      emailParams
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
