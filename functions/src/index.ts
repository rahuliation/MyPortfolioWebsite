import * as  functions from 'firebase-functions';
import users from './users'
import contacts from './contacts'

exports.users = functions.https.onRequest(users);
exports.contacts = functions.https.onRequest(contacts);