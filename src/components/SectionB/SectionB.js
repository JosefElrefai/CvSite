import React from 'react';
import './sectionB.scss';

const SectionB = () => {
    return (
        <div id="section-b" className="p-2">
            <div className="container">
                <h4 className="lead">My Mentality</h4>
                <div className="cards">
                    <div className="card">
                        <i className="fas fa-user-graduate fa-2x"></i>
                        <h4 className="card-title">Keep learning</h4>
                        <p>
                            As mentioned above I like to constantly keep imroving my skills
                            and learn new stuff. Since coding is a passion of mine I genuinely 
                            enjoy learning more about it.
                        </p>
                    </div>
                    <div className="card">
                        <i className="fas fa-tasks fa-2x"></i>
                        <h4 className="card-title">Challenges</h4>
                        <p>
                            I enjoy solving problems and because of that challenges don't 
                            frighten me, solving them in a good way makes me happy.
                        </p>
                    </div>
                    <div className="card">
                        <i className="fas fa-ad fa-2x"></i>
                        <h4 className="card-title">more?</h4>
                        <p>
                            Roumor has it that by this time it's becoming pretty repetitive
                            and it seems that the author does not know what to put here. I 
                            personally believe that this is purley decorative
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default SectionB;