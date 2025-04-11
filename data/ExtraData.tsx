
interface User {
    username: string;
    profilePic: string;
  }
  
 export  interface VideoItem {
    id: string;
    videoUrl: string;
    user: User;
    description: string;
    likes: string;
    comments: string;
  }
  
 export const videos: VideoItem[] = [
    {
      id: '1',
      videoUrl: 'https://cdn.cohort.social/glimps/900cd98d-43c9-4da8-8a29-45227a355d80/videos/87def849-5bbc-4c8c-8044-0770b75c946e/360/360.m3u8',
      user: { username: 'user1', profilePic: 'https://via.placeholder.com/40' },
      description: 'Breathtaking sunset over the mountains! #sunset #nature',
      likes: '1.2K',
      comments: '234',
    },
    { 
      "id": "2", 
      "videoUrl": "https://cdn.cohort.social/glimps/900cd98d-43c9-4da8-8a29-45227a355d80/videos/20dcb601-c9a4-400f-851a-a17557c80991/360/360.m3u8", 
      "user": { 
        "username": "user2", 
        "profilePic": "PROFILE_PIC_URL_2" 
      }, 
      "description": "Joining the viral dance challenge! Can you do it too? 💃🔥 #dance #viral", 
      "likes": "4.5K", 
      "comments": "567" 
    }, 
     {"id": "3", 
      "videoUrl": "https://cdn.cohort.social/glimps/900cd98d-43c9-4da8-8a29-45227a355d80/videos/5dcdda30-e2d5-487e-866f-e394bd605fad/360/360.m3u8", 
      "user": { 
        "username": "user1", 
        "profilePic": "PROFILE_PIC_URL_1" 
      }, 
      "description": "Golden hour magic! The sky looks like a painting. #sunset #aesthetic", 
      "likes": "1.2K", 
      "comments": "234" 
    },
    { 
      "id": "4", 
      "videoUrl": "https://cdn.cohort.social/glimps/900cd98d-43c9-4da8-8a29-45227a355d80/videos/8f264642-2966-4872-9625-c562ce2b4ef0/360/360.m3u8", 
      "user": { 
        "username": "user2", 
        "profilePic": "PROFILE_PIC_URL_2" 
      }, 
      "description": "Trying out new moves! Let's get this trending. 💃🕺 #dance #trending", 
      "likes": "4.5K", 
      "comments": "567" 
    }, 
    { 
      "id": "5", 
      "videoUrl": "https://cdn.cohort.social/glimps/900cd98d-43c9-4da8-8a29-45227a355d80/videos/02fff321-702b-40f0-a78b-66ca370d9fcf/360/360.m3u8", 
      "user": { 
        "username": "user1", 
        "profilePic": "PROFILE_PIC_URL_1" 
      }, 
      "description": "Peaceful beachside sunset 🌊🌅 #relax #serene", 
      "likes": "1.2K", 
      "comments": "234" 
    }, 
    { 
      "id": "6", 
      "videoUrl": "https://cdn.cohort.social/glimps/900cd98d-43c9-4da8-8a29-45227a355d80/videos/2c5a2558-3e14-42f4-b586-f7a9391f2d7b/360/360.m3u8", 
      "user": { 
        "username": "user2", 
        "profilePic": "PROFILE_PIC_URL_2" 
      }, 
      "description": "Energy level 💯! Who's dancing with me? 🔥 #dance #fun", 
      "likes": "4.5K", 
      "comments": "567" 
    }, 
    { 
      "id": "7", 
      "videoUrl": "https://cdn.cohort.social/glimps/900cd98d-43c9-4da8-8a29-45227a355d80/videos/cabdb3c4-40ef-4b36-b049-52d9f6806485/360/360.m3u8", 
      "user": { 
        "username": "user1", 
        "profilePic": "PROFILE_PIC_URL_1" 
      }, 
      "description": "Golden sky, calming vibes! ☀️✨ #nature #sunset", 
      "likes": "1.2K", 
      "comments": "234" 
    }, 
    { 
      "id": "8", 
      "videoUrl": "https://cdn.cohort.social/glimps/900cd98d-43c9-4da8-8a29-45227a355d80/videos/02fff321-702b-40f0-a78b-66ca370d9fcf/360/360.m3u8", 
      "user": { 
        "username": "user1", 
        "profilePic": "PROFILE_PIC_URL_1" 
      }, 
      "description": "Peaceful beachside sunset 🌊🌅 #relax #serene", 
      "likes": "1.2K", 
      "comments": "234" 
    }, 
    
  ];