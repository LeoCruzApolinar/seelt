const videoData = [
  {
    id: "1",
    channelName: "Channel 1",
    videoTitle: "Title 1",
    description: "Description 1",
    videoFile: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8',
    videoThumbnail: null,
    audioFile: null,
    subtitleFile: null,
    type: "videos",
  },
  {
    id: "2",
    channelName: "Channel 2",
    videoTitle: "Title 2",
    description: "Description 2",
    videoFile: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8',
    videoThumbnail: null,
    audioFile: null,
    subtitleFile: null,
    type: "peliculas",
  },
  // ... repite el patrón para crear más objetos ...
];

// Asegurándonos de que tenemos 20 videos
for (let i = 3; i <= 200; i++) {
  videoData.push({
    id: i.toString(),
    channelName: `Channel ${i}`,
    videoTitle: `Title ${i}`,
    description: `Description ${i}`,
    videoFile: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8',
    videoThumbnail: null,
    audioFile: null,
    subtitleFile: null,
    type: i % 2 === 0 ? "videos" : "peliculas",
  });
}

export default videoData;
