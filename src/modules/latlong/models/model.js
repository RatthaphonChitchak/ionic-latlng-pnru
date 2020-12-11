'use strict';
// use model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LatlongSchema = new Schema({
    userId: {
        type: String,
        required: 'Please fill a Latlong userId',
    },
    lat: {
        type: String,
        required: 'Please fill a Latlong lat',
    },
    lng: {
        type: String,
        required: 'Please fill a Latlong lng',
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    },
    createby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    },
    updateby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    }
});

mongoose.model("Latlong", LatlongSchema);