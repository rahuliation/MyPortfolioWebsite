const express = require('express');
import * as cors from 'cors';
import { Request, Response } from 'express'
import admin from './admin';
import * as nodemailer from 'nodemailer';
const contacts = express();

const transporter = nodemailer.createTransport({
    service: "Yandex",
        auth: {
            user: "mail@rahul.com.bd",  // to be replaced by actual username and password
            pass: "rock807red961"
        }
});

contacts.use(cors({ origin: true }));

contacts.get('/',  (req: Request, res: Response): void => {
    const mailOptions = {
        from: 'Rahul <mail@rahul.com.bd>', // Something like: Jane Doe <janedoe@gmail.com>
        to: 'rahul.workspace@gmail.com',
        subject: 'I\'M A PICKLE!!!', // email subject
        html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
            <br />
            <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
        ` // email content in HTML
    };

    transporter.sendMail(mailOptions, (erro: any , info) => {
        if(erro){
            return res.send(erro.toString());
        }
        return res.send({info});
    });

})

contacts.post('/', async (req: Request, res: Response) => {
    const { } = req.body;
    try {
        await admin.database().ref('/contacts').push();
       
    } catch (error) {
        res.json(error);
    }
});

export default contacts