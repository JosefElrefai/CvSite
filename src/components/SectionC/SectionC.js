import React from 'react';
import './sectionC.scss';
import RoundProgressBar from '../RoundProgressBar/RoundProgressBar';

const SectionC = () => {
    return (
        <div id="section-c">
            {/* <h4 className="lead">Technical skills</h4> */}
            <h3 className="lead">Technical Skills</h3>
            <div className="container">

                <div className="progress">

                    <RoundProgressBar title="html" percent={99} cn="html" className="box"/>
                    <RoundProgressBar title="css" percent={85} cn="css" className="box"/>
                    <RoundProgressBar title="js" percent={80} cn="javascript" className="box"/>
                    <RoundProgressBar title="react & redux" percent={80} cn="react" className="box" />
                    <RoundProgressBar title="git" percent={40} cn="git" className="box" />
                    <RoundProgressBar title="c#" percent={70} cn="cs" className="box" />
                    <RoundProgressBar title="Entity FW" percent={60} cn="entity" className="box" />

                </div>
            </div>

            {/* <p>HTML:</p> */}
            {/* <i className="fas fa-user-graduate "></i> */}
        </div>
    );
}

export default SectionC;