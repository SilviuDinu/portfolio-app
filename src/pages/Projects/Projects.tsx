import Divider from '@components/Divider/Divider';
import Page from '@components/Page/Page';
import Project from '@components/Project/Project';
import contentService from '@services/content.service';

const Projects = () => {
  const projects = contentService.getProjects();
  return (
    <Page className='projects'>
      <div className='projects--container flex-column flex-responsive full-height center'>
        {projects.map((projectData, idx) => (
          <>
            <Project data={projectData} />
            {idx < projects.length - 1 && (
              <Divider
                type='horizontal'
                className='full-width'
              />
            )}
          </>
        ))}
      </div>
    </Page>
  );
};

export default Projects;
