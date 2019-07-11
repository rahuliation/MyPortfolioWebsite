import * as  functions from 'firebase-functions';
import users from './users'
import messages from './messages'

exports.users = functions.https.onRequest(users);
exports.messages = functions.https.onRequest(messages);