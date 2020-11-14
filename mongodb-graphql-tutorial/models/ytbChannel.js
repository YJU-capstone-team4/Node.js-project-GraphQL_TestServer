const mongoose = require('mongoose');
const { Schema } = mongoose;
const channelSchema = new Schema({
    ytbChannel: {
        type: String,
        required: true,
        unique: true,
    },
    ytbProfile: {
        type: String,
        required: true
    },
    ytbLinkAddress: {
        type: String,
        required: true
    },
    ytbSubscribe: {
        type: Number,
        default: 0
    },
    ytbHits: {
        type: Number,
        default: 0
    },
    video: [
        {
            ytbVideoId: {
                type: Number,
                default: 0
            },
            ytbVideoName: {
                type: String,
                required: true
            },
            ytbThumbnail: {
                type: String,
                required: true
            },
            ytbAddress: {
                type: String,
                default: Date.now
            },
            hits: {
                type: Number,
                default: 0
            },
            storeId: {
                type: Number,
                default: 0
            },
            uploadDate: {
                type: Number,
                default: 0
            },
        }
    ],
});

module.exports = mongoose.model('Channel', channelSchema);