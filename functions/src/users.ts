const express = require('express');
import * as cors from 'cors';
import { Request, Response } from 'express'
import admin from './admin';
const users = express();

users.use(cors({ origin: true }));
users.post('/', async (req: Request, res: Response) => {
    const token = req.body.token;
    try {
        const response = await admin.messaging()
            .subscribeToTopic([token], 'update');
        const snapshot = await admin.database().ref('/tokenList').push({ token });
        if (response && snapshot) {
            res.json('success');
        }
    } catch (error) {
        res.json(error);
    }
});

export default users