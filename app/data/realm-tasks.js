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


// export function getSyncRealm(user) {
//     return new Realm({
//         sync: {
//             user: user,
//             url: config.db_uri,
//         },
//         schema: [Request, User, Photo],
//         path: config.db_path,
//     });
// }

// export function loginUser(email, password) {
//     Realm.Sync.User.login(config.auth_uri, email, password, (error, user) => {
//         if (!error) {
//             realm = getSyncRealm(user);
//             console.log("LOGGED IN AS:", user.identity);
//             return true;
//         } else {
//             console.log("COULD NOT LOGIN THE USER");
//             return false;
//         }
//     });
// }

// export function registerUser(email, password, username, location) {
//     let success = false;
//     Realm.Sync.User.register(config.auth_uri, email, password, (error, user) => {
//         console.log("HELLO");
//         if (!error) {
//             realm = getSyncRealm(user);
//             console.log("NEW USER REGISTERED:", user.identity);
//             try {
//                 realm.write(() => {
//                     realm.create('User', {
//                         uuid: user.identity,
//                         email: email,
//                         username: username,
//                         location: location,
//                         avatar: null,
//                     });
//                 });
//                 console.log("NEW USER ADDED TO THE DATABASE:", user.identity);
//                 success = true;
//                 return success;
//             } catch (e) {
//                 console.log("ERROR WHILE REGISTERING A NEW USER:", e);
//                 realm = null;
//                 success = false;
//                 return success;
//             };
//         } else {
//             console.log("COULD NOT REGISTER THE USER");
//             realm = null;
//             success = false;
//             return success;
//         }
//     });
//     return success;
// }

export function addRequest(latitude, longitude, message, author = null) {
    if (realm) {
        realm.write(() => {
            realm.create('Request', {
                timestamp: parseInt(moment().format('x')),
                latitude: latitude,
                latitude: longitude,
                message: message,
                author: author,
                photos: [],
            });
        });
    }
}

export function getAllRequests() {
    console.log("GETTING ALL REQUESTS")
    if (realm) {
        console.log("WILL RETURN ALL REQUESTS")
        return realm.objects('Request');
    }
}

export function getAllPhotosForRequest(requestTimestamp) {
    console.log('GETTING PHOTOS FOR REQUEST:', timestamp);
    if (realm) {
        const query = `timestamp = ${requestTimestamp}`;
        console.log('QUERY:', query);
        const request = realm.objects('Request').filtered(query);
        return request.photos;
    }
}

export default {
    login: connect.bind(undefined, 'login'),
    register: connect.bind(undefined, 'register'),
    realm,
};