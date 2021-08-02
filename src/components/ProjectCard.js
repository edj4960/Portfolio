import React from 'react';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import ProjectAccent from './ProjectAccent';

import './ProjectCard.scss';

const ProjectCard = ({ title, company, description, technologies }) => {

    return (
        <div className="project-card">
            <div className="project-inner">
                <header>
                    <div className="project-top">
                        <div className="d-flex flex-column w-100">
                            <ProjectAccent width="80%" />
                            <ProjectAccent width="20%" />
                        </div>
                        <FontAwesomeIcon
                            icon={faExternalLinkSquareAlt}
                            size="lg"
                        />
                    </div>
                    <div className="project-title">
                        {title}
                    </div>
                </header>
                <div className="project-description">
                    {description}
                </div>
                <footer>
                    <ul className="project-technologies">
                        {
                            technologies &&
                            technologies.map(technology => <li>{technology}</li>)
                        }
                    </ul>
                    {/* <div className="project-technologies">
                    </div> */}
                </footer>
            </div>
        </div>
    )
}

export default ProjectCard;