import Divider from '@components/Divider/Divider';
import Page from '@components/Page/Page';
import contentService from '@services/content.service';

const Projects = () => {
  const projects = contentService.getProjects();
  return (
    <Page
      title='Projects'
      className='projects'>
      <div className='projects--container flex-column flex-responsive full-height center'>
        {projects.map(({ title, city, description, period, tools, website, repo, video }) => (
          <>
            <div className='project flex-row'>
              <div className='project--video'>{/* <video src={require(`@assets/videos/${video}.mp4`)}></video> */}</div>
              <div className='project--info'>
                <div className='project--title title'>{title}</div>
                <div className='project--city'>{city}</div>
                <div className='project--description'>{description}</div>
                <div className='project--period'>{period}</div>
                <div className='project--tools'>{tools}</div>
              </div>
            </div>
            <Divider
              type='horizontal'
              className='full-width'
            />
          </>
        ))}
      </div>
    </Page>
  );
};

export default Projects;
