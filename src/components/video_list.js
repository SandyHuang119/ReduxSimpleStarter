import React from 'react';
import VideoListItem from './video_list_item';

const VideoList =(props)=>{
  //map是一个function，这个map里面的每一个元素叫做video
  const videoItems = props.videos.map((video)=>{
    //每一个项目都需要一个ID
    return (
      <VideoListItem
      key={video.etag}
      video={video} />
    );
  });

  return(
    <ul className="col-md-4 list-group">
     {videoItems}
    </ul>
  );
};

export default VideoList;
