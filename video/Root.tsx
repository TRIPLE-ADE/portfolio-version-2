import { Composition } from 'remotion';
import { ProjectVideo, ProjectVideoProps } from './ProjectVideo';
import { projects } from '../data/projects';

export const RemotionRoot: React.FC = () => {
    const defaultProject = projects[0];

    return (
        <>
            <Composition
                id="ProjectVideo"
                component={ProjectVideo}
                durationInFrames={300} // 10 seconds at 30fps
                fps={30}
                width={1280}
                height={720}
                defaultProps={{
                    title: defaultProject.title,
                    description: defaultProject.description,
                    image: defaultProject.image,
                    tags: defaultProject.tags,
                    highlights: defaultProject.highlights,
                } as ProjectVideoProps}
            />
        </>
    );
};
