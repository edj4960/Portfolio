import React from 'react';

import ProjectCard from './ProjectCard';

import { Fade } from 'react-reveal';

import './ProjectGrid.scss';

const ProjectGrid = ({ projects }) => {

    return (
        <Fade top cascade>
            <div className="project-grid">
                {projects.map(project => <ProjectCard {...project} />)}
            </div>
        </Fade>
    )
}

export default ProjectGrid;