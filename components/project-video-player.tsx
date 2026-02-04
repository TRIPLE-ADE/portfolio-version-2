"use client";

import React, { useMemo } from 'react';
import { Player } from '@remotion/player';
import { ProjectVideo, ProjectVideoProps } from '../video/ProjectVideo';

interface ProjectVideoPlayerProps {
    project: {
        title: string;
        description: string;
        image: string;
        tags: string[];
        highlights?: string[];
    };
    isActive?: boolean;
}

export const ProjectVideoPlayer: React.FC<ProjectVideoPlayerProps> = ({
    project,
    isActive = false,
}) => {
    const inputProps: ProjectVideoProps = useMemo(() => ({
        title: project.title,
        description: project.description,
        image: project.image,
        tags: project.tags,
        highlights: project.highlights,
    }), [project]);

    return (
        <div className="w-full h-full relative group">
            <Player
                component={ProjectVideo}
                inputProps={inputProps}
                durationInFrames={300}
                fps={30}
                compositionWidth={1280}
                compositionHeight={720}
                style={{
                    width: '100%',
                    height: '100%',
                }}
                autoPlay={isActive}
                loop
                controls={false}
            />
            {/* Overlay to catch clicks and prevent player interaction if needed */}
            <div className="absolute inset-0 z-10" />
        </div>
    );
};

export default ProjectVideoPlayer;
