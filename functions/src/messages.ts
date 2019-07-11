const express = require('express');
import * as cors from 'cors';
import { Request, Response } from 'express'
import admin from './admin';
const messages = express();

messages.use(cors({ origin: true }));
messages.post('/', async (req: Request, res: Response) => {
    const message = {
        data: req.body.data,
        topic: req.body.topic
    };

    try {
      const response = await admin.messaging().send(message);
      res.json(response);
    } catch (error) {
        res.json(error);
    }
});

export default messages