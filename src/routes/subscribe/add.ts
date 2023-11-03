import { RequestHandler } from 'express';

import Subscriber from '../../models/Subscriber';
import validateEmail from '../../utils/validateEmail';
import sendEmail from '../../utils/sendEmail';

const addSubscriber: RequestHandler = async (req, res) => {
  try {
    const { email } = req.body;
    const eAddress = email.toLowerCase();

    // Check if email is provided
    if (!eAddress) {
      return res.status(400).json({
        status: 'error',
        message: 'No email provided',
        result: {},
      });
    }

    // Check if the email is entered with the right formatting
    if (!validateEmail(eAddress)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid email format',
        result: {},
      });
    }

    // Check if email is already registered
    const existingSubscriber = await Subscriber.findOne({ email: eAddress });
    if (existingSubscriber) {
      return res.status(400).json({
        status: 'error',
        message: 'Email already joined',
        result: {},
      });
    }

    // Create a new subscriber
    const newSubscriber = new Subscriber({ email: eAddress });

    // Save the subscriber to the database
    const savedSubscriber = await newSubscriber.save();

    await sendEmail(
      eAddress,
      `Thank you for joining Fluxity's waitlist!`,
      `Hey there! 
      
      You have been successfully added to our waitlist. We really appreciate your interest in Fluxity. 
      
      You'll be among the first to know about our news and product updates.
      
      Best wishes,
      Team Fluxity`,
    );

    return res.status(201).json({
      status: 'success',
      message: 'Subscriber saved successfully',
      result: savedSubscriber,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return res.status(500).json({
      status: 'error',
      message: error.message,
      result: {},
    });
  }
};

export default addSubscriber;
