import Realm from 'realm';

export class Request extends Realm.Object { }
Request.schema = {
    name: 'Request',
    primaryKey: 'timestamp',
    properties: {
        timestamp: 'int',
        latitude: 'double',
        longitude: 'double',
        message: 'string',
        author: { type: 'User' },
        photos: { type: 'list', objectType: 'Photo' },
    },
};
export class User extends Realm.Object { }
User.schema = {
    name: 'User',
    primaryKey: 'uuid',
    properties: {
        uuid: 'string',
        email: 'string',
        username: 'string',
        location: 'string',
        avatar: { type: 'data', optional: true },
    },
};
export class Photo extends Realm.Object { }
Photo.schema = {
    name: 'Photo',
    properties: {
        request: { type: 'Request' },
        url: 'string',
        author: { type: 'User' },
        likes: { type: 'int', default: 0 },
        dislikes: { type: 'int', default: 0 },
    },
};
