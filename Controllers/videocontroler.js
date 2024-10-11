const Videos = require('../models/video')
module.exports.getAllVideosController = async (req, res) => {
    try {
        const data = await Videos.find();
        res.status(200).json({
            success: true,
            message: "All videos fetched",
            videos: data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to fetch videos"
        })
    }

}
module.exports.uploadVideosController = async (req, res) => {
    try {
        await Videos.insertMany(
            [
                {
                    "title": "Learn React in 30 Minutes",
                    "thumbnailUrl": "https://example.com/thumbnails/react30min.png",
                    "description": "A quick tutorial to get started with React.",
                    "channelId": "channel01",
                    "views": 15200,
                    "likes": 1023,
                    "dislikes": 45,
                    "category": "Education"
                },
                {
                    "title": "JavaScript for Beginners",
                    "thumbnailUrl": "https://example.com/thumbnails/jsBeginners.png",
                    "description": "An easy-to-follow guide for those new to JavaScript.",
                    "channelId": "channel02",
                    "views": 20000,
                    "likes": 1500,
                    "dislikes": 25,
                    "category": "Programming"
                },
                {
                    "title": "Node.js Crash Course",
                    "thumbnailUrl": "https://example.com/thumbnails/nodeCrashCourse.png",
                    "description": "A comprehensive crash course on Node.js.",
                    "channelId": "channel03",
                    "views": 9500,
                    "likes": 800,
                    "dislikes": 10,
                    "category": "Technology"
                },
                {
                    "title": "CSS Flexbox Tutorial",
                    "thumbnailUrl": "https://example.com/thumbnails/cssFlexbox.png",
                    "description": "Learn how to master CSS Flexbox layout.",
                    "channelId": "channel04",
                    "views": 5000,
                    "likes": 300,
                    "dislikes": 5,
                    "category": "Web Development"
                },
                {
                    "title": "How to Build a REST API with Express.js",
                    "thumbnailUrl": "https://example.com/thumbnails/expressApi.png",
                    "description": "Step-by-step guide to building a RESTful API using Express.js.",
                    "channelId": "channel05",
                    "views": 12000,
                    "likes": 950,
                    "dislikes": 20,
                    "category": "Backend Development"
                }
            ]
        )
        res.send("Added dataF")
    } catch (error) {

    }
}