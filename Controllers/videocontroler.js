const Videos = require('../models/video')
const Channels = require('../models/channels');
const Users = require('../models/user');
const Comments = require('../models/comment')
const jwt = require('jsonwebtoken');

module.exports.getAllVideosController = async (req, res) => {
    try {
        const data = await Videos.find().populate({ path: "channelId" });
        return res.status(200).json({
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
        // await Videos.insertMany([
        //     {
        //         title: "Latest World News",
        //         thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
        //         description: "Breaking news from around the world.",
        //         channelId: "channel_news_001",
        //         views: 5000,
        //         likes: 1500,
        //         dislikes: 100,
        //         uploadDate: new Date(),
        //         category: "News",
        //         videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        //     },
        //     {
        //         title: "Top 10 Gaming Moments",
        //         thumbnailUrl: "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
        //         description: "Highlights from the gaming world.",
        //         channelId: "channel_gaming_001",
        //         views: 8000,
        //         likes: 3000,
        //         dislikes: 200,
        //         uploadDate: new Date(),
        //         category: "Gaming",
        //         videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        //     },
        //     {
        //         title: "Introduction to JavaScript",
        //         thumbnailUrl: "https://e7.pngegg.com/pngimages/250/264/png-transparent-education-background-with-teacher-chalkboard-thumbnail.png",
        //         description: "A complete beginner's guide to JavaScript.",
        //         channelId: "channel_js_001",
        //         views: 2500,
        //         likes: 1200,
        //         dislikes: 50,
        //         uploadDate: new Date(),
        //         category: "Javascript",
        //         videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        //     },
        //     {
        //         title: "How to Ace Your Job Interview",
        //         thumbnailUrl: "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
        //         description: "Tips and tricks to succeed in job interviews.",
        //         channelId: "channel_job_001",
        //         views: 1000,
        //         likes: 600,
        //         dislikes: 20,
        //         uploadDate: new Date(),
        //         category: "Job",
        //         videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        //     },
        //     {
        //         title: "Live Music Stream",
        //         thumbnailUrl: "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
        //         description: "Enjoy live performances by top musicians.",
        //         channelId: "channel_music_001",
        //         views: 3000,
        //         likes: 1800,
        //         dislikes: 40,
        //         uploadDate: new Date(),
        //         category: "Live",
        //         videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        //     },
        //     {
        //         title: "Relaxing Music Compilation",
        //         thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
        //         description: "A mix of relaxing music to help you unwind.",
        //         channelId: "channel_music_002",
        //         views: 7000,
        //         likes: 5000,
        //         dislikes: 10,
        //         uploadDate: new Date(),
        //         category: "Music",
        //         videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        //     },
        //     {
        //         title: "How to Learn Effectively",
        //         thumbnailUrl: "https://img.freepik.com/premium-psd/school-education-admission-youtube-thumbnail-web-banner-template_475351-451.jpg",
        //         description: "Tips and strategies to maximize learning.",
        //         channelId: "channel_education_001",
        //         views: 2000,
        //         likes: 1100,
        //         dislikes: 30,
        //         uploadDate: new Date(),
        //         category: "Education",
        //         videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        //     },
        //     {
        //         title: "Best Software for Developers",
        //         thumbnailUrl: "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
        //         description: "A review of essential software for developers.",
        //         channelId: "channel_software_001",
        //         views: 1200,
        //         likes: 900,
        //         dislikes: 15,
        //         uploadDate: new Date(),
        //         category: "Software",
        //         videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        //     },
        //     {
        //         title: "Web Development in 2024",
        //         thumbnailUrl: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200214170056/Web-Thumbnail.jpg",
        //         description: "An overview of the latest trends in web development.",
        //         channelId: "channel_dev_001",
        //         views: 4500,
        //         likes: 3000,
        //         dislikes: 40,
        //         uploadDate: new Date(),
        //         category: "Development",
        //         videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        //     },
        //     {
        //         title: "World Affairs Today",
        //         thumbnailUrl: "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
        //         description: "An analysis of the current world affairs.",
        //         channelId: "channel_world_001",
        //         views: 3000,
        //         likes: 1400,
        //         dislikes: 80,
        //         uploadDate: new Date(),
        //         category: "World Affairs",
        //         videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        //     },
        //     {
        //         title: "Comedy Skits Compilation",
        //         thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
        //         description: "Laugh-out-loud skits from top comedians.",
        //         channelId: "channel_comedy_001",
        //         views: 6000,
        //         likes: 4000,
        //         dislikes: 50,
        //         uploadDate: new Date(),
        //         category: "Comedy",
        //         videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        //     },
        //     {
        //         title: "Investing in Stocks 101",
        //         thumbnailUrl: "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
        //         description: "A beginner's guide to investing in the stock market.",
        //         channelId: "channel_stocks_001",
        //         views: 2000,
        //         likes: 1000,
        //         dislikes: 60,
        //         uploadDate: new Date(),
        //         category: "Stocks",
        //         videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        //     },
        //     {
        //         title: "Java Programming for Beginners",
        //         thumbnailUrl: "https://thecodex.me/static/5c02153876c8f9c5740350364990a18a/ee604/Java_Thumbnail_java_875e0d6a31.png",
        //         description: "A comprehensive guide to learning Java programming.",
        //         channelId: "channel_java_001",
        //         views: 5000,
        //         likes: 2500,
        //         dislikes: 100,
        //         uploadDate: new Date(),
        //         category: "Java",
        //         videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        //     },
        //     {
        //         title: "Watched Video Example",
        //         thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
        //         description: "A previously watched video about various topics.",
        //         channelId: "channel_watched_001",
        //         views: 1500,
        //         likes: 900,
        //         dislikes: 20,
        //         uploadDate: new Date(),
        //         category: "Watched",
        //         videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        //     }
        // ])

        const { title, videoUrl, thumbnailUrl, description, category } = req.body;
        console.log(title, videoUrl, thumbnailUrl, description, category)
        const token = req.headers.authorization.split(' ')[1];

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        if (!decode) {
            return res.status(400).json({
                success: false,
                message: "Token expired",
            })
        }
        const user = await Users.findOne({ email: decode.email })
        const chanel = await Channels.findOne({ _id: user.channel });
        console.log(user);
        console.log(chanel);
        const newVideo = new Videos({
            title, videoUrl, thumbnailUrl, description, category, channelId: chanel._id
        });
        chanel.videos.push(newVideo);
        await chanel.save();
        await newVideo.save();

        return res.status(200).json({
            success: true,
            message: 'video uploaded'
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Fail to upload"
        })
    }
}

module.exports.getVideoController = async (req, res) => {
    try {
        const { id } = req.params;
        const video = await Videos.findById(id)
            .populate({ path: 'channelId' })
            .populate({
                path: 'comments',
                populate: {
                    path: 'user',  // Assuming 'user' is the field inside each comment that references a User model
                    populate: {
                        path: 'channel'
                    }
                }
            });

        if (video) {
            let updatedviews = video.views + 1;
            await Videos.findByIdAndUpdate(id, { views: updatedviews })
        }
        return res.status(200).json({
            success: true,
            message: "Video data fetched",
            video
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Fail to fetch video"
        })
    }

}

module.exports.likevideoController = async (req, res) => {
    try {
        const { vid, uid } = req.params;
        const video = await Videos.findById(vid);
        const user = await Users.findById(uid);

        if (!video || !user) {
            return res.status(404).json({
                success: false,
                message: "User or Video not found"
            });
        }

        // Check if the user has already liked the video
        if (user.likedVideos.includes(video._id)) {
            // Unlike the video (remove from likedVideos and decrement likes)
            user.likedVideos = user.likedVideos.filter(v => v.toString() !== video._id.toString());
            video.likes = video.likes > 0 ? video.likes - 1 : 0; // Prevent negative likes

            await video.save();
            await user.save();

            return res.status(200).json({
                success: true,
                message: "Video unliked successfully"
            });
        }

        // Like the video (if not already liked)
        user.likedVideos.push(video._id);
        video.likes = video.likes + 1;

        await video.save();
        await user.save();

        // console.log(video, user);

        res.status(200).json({
            success: true,
            message: "Video liked successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Failed to like/unlike the video"
        });
    }
};

module.exports.addCommentController = async (req, res) => {
    try {
        const { vid, uid } = req.params;
        let { comment } = req.body;
        comment = comment.toString();
        const video = await Videos.findById(vid);
        const user = await Users.findById(uid);

        if (!video || !user) {
            return res.status(404).json({
                success: false,
                message: "User or Video not found"
            });
        }

        // Create new comment
        const newcomment = new Comments({
            text: comment,
            user: uid
        });

        // Push comment ID into the video's comments array
        video.comments.push(newcomment._id);

        // Save the new comment and updated video
        await newcomment.save();
        await video.save();

        return res.status(200).json({
            success: true,
            message: "Comment added successfully",
            comment: newcomment
        });

    } catch (error) {
        // Handle errors and respond with a meaningful message
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Server error. Please try again later."
        });
    }
};


module.exports.deleteCommentController = async (req, res) => {
    try {
        const { vid, comid } = req.params;

        // Find the video by ID
        const video = await Videos.findById(vid);
        if (!video) {
            return res.status(404).json({
                success: false,
                message: "Video not found"
            });
        }

        // Find the comment by ID
        const comment = await Comments.findById(comid);
        if (!comment) {
            return res.status(404).json({
                success: false,
                message: "Comment not found"
            });
        }

        // Remove the comment from the video's comments array
        video.comments = video.comments.filter(commentId => commentId.toString() !== comid);


        // Delete the comment from the database
        await Comments.findByIdAndDelete(comid);

        // Save the updated video
        await video.save();


        return res.status(200).json({
            success: true,
            message: "Comment deleted successfully"
        });
    } catch (error) {
        // Handle errors and respond with a meaningful message
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Server error. Please try again later."
        });
    }
};


module.exports.updateCommentController = async (req, res) => {
    try {
        const { cid } = req.params;
        const { newcomment } = req.body;
        await Comments.findByIdAndUpdate(cid, { text: newcomment });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error. Please try again later."
        });
    }
}