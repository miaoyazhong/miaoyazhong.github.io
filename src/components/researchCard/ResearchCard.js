import React from 'react';
import PropTypes from 'prop-types';
import './ResearchCard.scss';

const ResearchCard = ({ title, description, link, image }) => {
    return (
        <div className="research-card">
            <img src={image} alt={title} className="research-card-image" />
            <div className="research-card-content">
                <h3 className="research-card-title">{title}</h3>
                <p className="research-card-description">{description}</p>
                <a href={link} className="research-card-link" target="_blank" rel="noopener noreferrer">
                    Read More
                </a>
            </div>
        </div>
    );
};

ResearchCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default ResearchCard;