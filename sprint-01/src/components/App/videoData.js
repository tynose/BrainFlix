// import uuid from 'uuid';
// cant use because it resets id after page refresh

const videoData = [
  {
    id: 1111,
    thumbnail: './assets/Images/hqdefault.jpg',
    video: './assets/Videos/BrainStation Sample Video.mp4',
    videoTimeStamp: '4:45',
    videoTitle: 'TEX @ TOR Gm5: Dingers were hit in the 7th inning',
    videoCaption: '10/14/15: Jose Bautista crushes a long go-ahead three-run homer in the 7th inning of ALDS Game 5',
    videoPublishDate: 'Oct 14, 2015',
    channel: 'MLB',
    subscribers: 1.7,
    views: 2304189,
    likes: 8.9,
    dislikes: 2,
    comments: [
      {
        avator: './assets/Images/ben-hershey-578539-unsplash.jpg',
        name: 'Gary Paul',
        timestamp: 'May 12, 2017',
        comment: 'what a dinger OMG!!'
      },
      {
        avator: './assets/Images/mean-shadows-495199-unsplash.jpg' ,
        name: 'Peter Jeff',
        timestamp: 'Oct  12, 2017',
        comment: 'wow Baseball, what a sport'
      }
    ]
  },
  {
    id: 2222,
    thumbnail: './assets/Images/donaldson.jpg',
    video: './assets/Videos/Kirk Gibsons game winning home run 1988 World Series.mp4',
    videoTimeStamp: '4:45',
    videoTitle: 'kirk Gibsons game winning home run 1988 World Series',
    videoCaption: '9/15/88: Kirk Gibsons game winning home run 1988 World Series',
    videoPublishDate: 'Oct 14, 2010',
    channel: 'MLB',
    subscribers: 1.2,
    views: 1204189,
    likes: 6.9,
    dislikes: 2.3,
    comments: [
      {
        avator: './assets/Images/ben-hershey-578539-unsplash.jpg',
        name: 'Gary Paul',
        timestamp: 'May 12, 2017',
        comment: 'what a dinger OMG!!'
      },
      {
        avator: './assets/Images/mean-shadows-495199-unsplash.jpg',
        name: 'Peter Jeff',
        timestamp: 'Oct  12, 2017',
        comment: 'wow Baseball, what a sport'
      }
    ]
  },
  {
    id: 3333,
    thumbnail: './assets/Images/r241851_600x400_3-2.jpg',
    video: './assets/Videos/BrainStation Sample Video.mp4',
    videoTimeStamp: '4:45',
    videoTitle: 'TEX @ TOR Gm5: Blue Jays take lead in wild 7th inning',
    videoCaption: '10/14/18: Jose Bautista crushes a long go-ahead three-run homer in the 7th inning of ALDS Game 5',
    videoPublishDate: 'Oct 14, 2018',
    channel: 'MLB',
    subscribers: 1.5,
    views: 1004189,
    likes: 6.5,
    dislikes: 2.5,
    comments: [
      {
        avator: './assets/Images/ben-hershey-578539-unsplash.jpg',
        name: 'Gary Paul',
        timestamp: 'May 12, 2017',
        comment: 'what a dinger OMG!!'
      },
      {
        avator: './assets/Images/mean-shadows-495199-unsplash.jpg',
        name: 'Peter Jeff',
        timestamp: 'Oct  12, 2017',
        comment: 'wow Baseball, what a sport'
      }
    ]
  },
  {
    id: 4444,
    thumbnail: './assets/Images/PR6AGOQ7XREI5B7UMKM3KAGWFA.jpg',
    video: './assets/Videos/BrainStation Sample Video.mp4',
    videoTimeStamp: '4:45',
    videoTitle: 'TEX @ TOR Gm5: Blue Jays take lead in wild 7th inning',
    videoCaption: '10/9/15: Jose Bautista crushes a long go-ahead three-run homer in the 7th inning of ALDS Game 5',
    videoPublishDate: 'Oct 9, 2015',
    channel: 'MLB',
    subscribers: 1.7,
    views: 3504189,
    likes: 5,
    dislikes: 2,
    comments: [
      {
        avator: './assets/Images/ben-hershey-578539-unsplash.jpg',
        name: 'Gary Paul',
        timestamp: 'May 12, 2017',
        comment: 'what a dinger OMG!!'
      },
      {
        avator: './assets/Images/mean-shadows-495199-unsplash.jpg',
        name: 'Peter Jeff',
        timestamp: 'Oct  12, 2017',
        comment: 'wow Baseball, what a sport'
      }
    ]
  },
  {
    id: 5555,
    thumbnail: './assets/Images/920x920.jpg',
    video: './assets/Videos/BrainStation Sample Video.mp4',
    videoTimeStamp: '4:45',
    videoTitle: 'TEX @ TOR Gm5: Blue Jays take lead in wild 7th inning',
    videoCaption: '10/31/15: Jose Bautista crushes a long go-ahead three-run homer in the 7th inning of ALDS Game 5',
    videoPublishDate: 'Oct 31, 2015',
    channel: 'MLB',
    subscribers: 1.8,
    views: 1204189,
    likes: 7.5,
    dislikes: 7.7,
    comments: [
      {
        avator: './assets/Images/ben-hershey-578539-unsplash.jpg',
        name: 'Gary Paul',
        timestamp: 'May 12, 2017',
        comment: 'what a dinger OMG!!'
      },
      {
        avator: './assets/Images/mean-shadows-495199-unsplash.jpg',
        name: 'Peter Jeff',
        timestamp: 'Oct  12, 2017',
        comment: 'wow Baseball, what a sport'
      }
    ]
  },
  {
    id: 6666,
    thumbnail: './assets/Images/Big-Read-Vladimir-Guerrero-Jr-Swings-470x264.jpg',
    video: './assets/Videos/BrainStation Sample Video.mp4',
    videoTimeStamp: '4:45',
    videoTitle: 'MIL @ TOR Gm5',
    videoCaption: '6/14/15: Jose Bautista crushes a long go-ahead three-run homer in the 7th inning of ALDS Game 5',
    videoPublishDate: 'june 14, 2015',
    channel: 'MLB',
    subscribers: 1.1,
    views: 5304189,
    likes: 8.5,
    dislikes: 1.1,
    comments: [
      {
        avator: './assets/Images/ben-hershey-578539-unsplash.jpg',
        name: 'Gary Paul',
        timestamp: 'May 12, 2017',
        comment: 'what a dinger OMG!!'
      },
      {
        avator: './assets/Images/mean-shadows-495199-unsplash.jpg',
        name: 'Peter Jeff',
        timestamp: 'Oct  12, 2017',
        comment: 'wow Baseball, what a sport'
      }
    ]
  },
  {
    id: 7777,
    thumbnail: './assets/Images/BASEBALL-MLB-HOU-LAD-.jpg',
    video: './assets/Videos/BrainStation Sample Video.mp4',
    videoTimeStamp: '4:45',
    videoTitle: 'Bal  @ TOR Gm5: Baltimore take lead in wild 9th inning',
    videoCaption: '5/14/15: Jose Bautista crushes a long go-ahead three-run homer in the 7th inning of ALDS Game 5',
    videoPublishDate: 'May 14, 2015',
    channel: 'MLB',
    subscribers: 2.1,
    views: 2302589,
    likes: 9.7,
    dislikes: 5,
    comments: [
      {
        avator: './assets/Images/ben-hershey-578539-unsplash.jpg',
        name: 'Gary Paul',
        timestamp: 'May 12, 2017',
        comment: 'what a dinger OMG!!'
      },
      {
        avator: './assets/Images/mean-shadows-495199-unsplash.jpg',
        name: 'Peter Jeff',
        timestamp: 'Oct  12, 2017',
        comment: 'wow Baseball, what a sport'
      }
    ]
  },
  {
    id: 8888,
    thumbnail: './assets/Images/THKMOYWFLWJCPXQ.20170430201114.jpg',
    video: './assets/Videos/BrainStation Sample Video.mp4',
    videoTimeStamp: '4:45',
    videoTitle: 'NYY @ TOR Gm6: Blue Jays take lead in wild 8th inning and hit a grand slam',
    videoCaption: '10/10/15: Jose Bautista crushes a long go-ahead three-run homer in the 7th inning of ALDS Game 5',
    videoPublishDate: 'Oct 10, 2015',
    channel: 'MLB',
    subscribers: 1.0,
    views: 2353189,
    likes: 9.9,
    dislikes: 7.8,
    comments: [
      {
        avator: './assets/Images/ben-hershey-578539-unsplash.jpg',
        name: 'Gary Paul',
        timestamp: 'May 12, 2017',
        comment: 'what a dinger OMG!!'
      },
      {
        avator: './assets/Images/mean-shadows-495199-unsplash.jpg',
        name: 'Peter Jeff',
        timestamp: 'Oct  12, 2017',
        comment: 'wow Baseball, what a sport'
      }
    ]
  }
]
  
export default videoData