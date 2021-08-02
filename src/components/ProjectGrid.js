import React from 'react';

import ProjectCard from './ProjectCard';

import './ProjectGrid.scss';

const ProjectGrid = ({ projects }) => {

    return (
        <div className="project-grid">

            {projects.map(project => <ProjectCard {...project} />)}

        </div>
    )
}

export default ProjectGrid;