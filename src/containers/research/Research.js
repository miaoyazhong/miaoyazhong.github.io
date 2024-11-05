import React, { useContext } from "react";
import "./Research.scss";
import { researchSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Research() {
    function openUrlInNewTab(url) {
        if (!url) {
            return;
        }
        const win = window.open(url, "_blank");
        if (win) {
            win.focus();
        }
    }

    const { isDark } = useContext(StyleContext);
    if (!researchSection.display) {
        return null;
    }
    
    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main" id="research">
                <div>
                    <h1 className="skills-heading">{researchSection.title}</h1>
                    <p
                        className={
                            isDark
                                ? "dark-mode project-subtitle"
                                : "subTitle project-subtitle"
                        }
                    >
                        {researchSection.subtitle}
                    </p>

                    <div className="projects-container">
                        {researchSection.projects.map((project, i) => (
                            <div
                                key={i}
                                className={
                                    isDark
                                        ? "dark-mode project-card project-card-dark"
                                        : "project-card project-card-light"
                                }
                            >
                                <div className="project-images">
                                    {/* Left Image */}
                                    {project.image2 && (
                                        <div
                                            className="project-image project-image-left"
                                            onClick={() =>
                                                project.footerLink && project.footerLink[1]
                                                    ? openUrlInNewTab(project.footerLink[1].url)
                                                    : null
                                            }
                                            style={{ cursor: "pointer" }}
                                        >
                                            <img
                                                src={project.image2}
                                                alt={`${project.projectName} - Side Image Left`}
                                                className="side-image"
                                            />
                                        </div>
                                    )}
                                    
                                    {/* Center Image */}
                                    {project.image && (
                                        <div
                                            className="project-image project-image-center"
                                            onClick={() =>
                                                project.footerLink && project.footerLink[0]
                                                    ? openUrlInNewTab(project.footerLink[0].url)
                                                    : null
                                            }
                                            style={{ cursor: "pointer" }}
                                        >
                                            <img
                                                src={project.image}
                                                alt={project.projectName}
                                                className="card-image"
                                            />
                                        </div>
                                    )}

                                    {/* Right Image */}
                                    {project.image3 && (
                                        <div
                                            className="project-image project-image-right"
                                            onClick={() =>
                                                project.footerLink && project.footerLink[2]
                                                    ? openUrlInNewTab(project.footerLink[2].url)
                                                    : null
                                            }
                                            style={{ cursor: "pointer" }}
                                        >
                                            <img
                                                src={project.image3}
                                                alt={`${project.projectName} - Side Image Right`}
                                                className="side-image"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className="project-detail">
                                    <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                                        {project.projectName}
                                    </h5>
                                    <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                                        {project.projectDesc}
                                    </p>
                                    {project.footerLink && (
                                        <div className="project-card-footer">
                                            {project.footerLink.map((link, index) => (
                                                <span
                                                    key={index}
                                                    className={isDark ? "dark-mode project-tag" : "project-tag"}
                                                    onClick={() => openUrlInNewTab(link.url)}
                                                >
                                                    {link.name}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Fade>
    );
}
