import Realm from 'realm';
import moment from 'moment';

import { Request, User, Photo } from './schema';
import config from '../config/server';

let realm = null;

function connect(action, username, password, email, location, callback) {
    username = username.trim();
    password = password.trim();
    if (username === '') {
        return callback(new Error('Username cannot be empty'));
    } else if (password === '') {
        return callback(new Error('Password cannot be empty'));
    }
    if (action === 'register') {
        Realm.Sync.User[action](config.auth_uri, email, password,
            (error, user) => {
                if (error) {
                    return callback(new Error(error.message));
                } else {
                    realm = new Realm({
                        sync: {
                            user: user,
                            url: config.db_uri,
                        },
                        schema: [Request, User, Photo],
                        path: config.db_path,
                    });
                    console.log("NEW USER REGISTERED:", user.identity);
                    try {
                        realm.write(() => {
                            realm.create('User', {
                                uuid: user.identity,
                                email: email,
                                username: username,
                                location: location,
                                avatar: null,
                            });
                        });
                        console.log("NEW USER ADDED TO THE DATABASE:", user.identity);
                    } catch (e) {
                        console.log("ERROR WHILE REGISTERING A NEW USER:", e);
                    };
                    return callback(null, realm); // TODO errors
                }
            }
        );
    } else {
        Realm.Sync.User[action](config.auth_uri, email, password,
            (error, user) => {
                if (error) {
                    return callback(new Error(error.message));
                } else {
                    realm = new Realm({
                        sync: {
                            user: user,
                            url: config.db_uri,
                        },
                        schema: [Request, User, Photo],
                        path: config.db_path,
                    });
                    return callback(null, realm); // TODO errors
                }
            }
        );
    }

}

export default {
    login: connect.bind(undefined, 'login'),
    register: connect.bind(undefined, 'register'),
    realm,
};