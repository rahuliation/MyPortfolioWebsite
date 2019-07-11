const express = require('express');
import * as cors from 'cors';
import { Request, Response } from 'express'
import admin from './admin';
const users = express();

users.use(cors({ origin: true }));
users.get('/:id', (req: Request, res: Response): any => res.send('www'));
users.post('/', async (req: Request, res: Response) => {
    const token = req.body.token;
    try {
        const response = await admin.messaging()
            .subscribeToTopic([token], 'update')
        if (response) {
            res.json(response);
        }
    } catch (error) {
        res.json(error);
    }
});
users.put('/:id', (req: Request, res: Response): any => res.send('www'));
users.delete('/:id', (req: Request, res: Response): any => res.send('www'));
users.get('/', (req: Request, res: Response): any => res.send('www'));

export default users