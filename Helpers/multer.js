// import multer from "multer";
// import * as dotenv from "dotenv";
// dotenv.config();
// import AWS from 'aws-sdk';
// import multerS3 from "multer-s3";

// const s3 = new AWS.S3({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: process.env.AWS_REGION,
// });

// const storage = multerS3({
//     s3: s3,
//     bucket: process.env.AWS_BUCKET_NAME,
//     key: function (req, file, cb) {
//         cb(null, 'Turf_Photos/' + Date.now().toString() + file.originalname);
//     },
// });

// const upload = multer({ storage });

// export default upload;


import * as dotenv from "dotenv";
dotenv.config();
import * as firebase from 'firebase/app';
import 'firebase/storage';
import multer from "multer";

// Initialize Firebase
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024 // 5 MB limit
    }
});

export default upload;
