import sgMail from '@sendgrid/mail';
import config from '../config/config';
import { IFeedback } from '../interfaces/IFeedback';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

const sendNotificationEmail = async (feedback: IFeedback) => {
  const msg = {
    to: config.adminEmail,
    from: 'no-reply@example.com', // Set according to verified sender
    subject: 'New Feedback Submitted',
    text: `A new feedback has been submitted by ${feedback.user}.\n\nMessage: ${feedback.message}`,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendNotificationEmail;