import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { RequestHandler } from 'express';

const handleValidationErrors: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  next();
};

export const validateMyUserRequest = [
  body('name').isString().notEmpty().withMessage('Name is required'),
  body('adressLine1').isString().notEmpty().withMessage('Address is required'),
  body('city').isString().notEmpty().withMessage('City is required'),
  body('country').isString().notEmpty().withMessage('Country is required'),
  handleValidationErrors,
];
