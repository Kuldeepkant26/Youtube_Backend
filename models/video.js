const mongoose = require('mongoose');
const videoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    description: { type: String },
    channelId: { type: String, required: true },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    uploadDate: { type: Date, default: Date.now },  // Automatically set upload date
    category: { type: String, required: true }
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;