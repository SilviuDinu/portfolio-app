import { Project } from '@models/content.model';
import React from 'react';

const Project: React.FC<{ data: Project }> = ({
  data: { title, city, description, period, tools, website, repo, video },
}) => {
  return (
    <div className='project flex-row'>
      <div className='project--video'>{/* <video src={require(`@assets/videos/${video}.mp4`)}></video> */}</div>
      <div className='project--info'>
        <div className='project--title'>{title}</div>
        <div className='project--period-city'>
          {period} | {city}
        </div>
        <div className='project--description'>{description}</div>
        <div className='project--tools'>{tools.join(', ')}</div>
      </div>
    </div>
  );
};

export default Project;
