import React from 'react';
import './sectionC.scss';

const SectionC = () => {
    return (
        <div id="section-c" className="p-2">
            {/* <h4 className="lead">Technical skills</h4> */}
            <div className="container">
                <h3 className="lead">technical skills</h3>
                <div className="progress">
                    <div className="box">
                        <h5 className="progress-title">HTML</h5>
                            <div className="percent">
                                <svg className="html">
                                    <circle cx="23" cy="23" r="23"></circle>
                                    <circle cx="23" cy="23" r="23"></circle>
                                </svg>
                                <div className="number">
                                    <h2>99<span>%</span></h2>
                                </div>
                            </div>
                    </div>

                    <div className="box">
                        <h5 className="progress-title">CSS</h5>
                            <div className="percent">
                                <svg className="css">
                                    <circle cx="23" cy="23" r="23"></circle>
                                    <circle cx="23" cy="23" r="23"></circle>
                                </svg>
                                <div className="number">
                                    <h2>85<span>%</span></h2>
                                </div>
                            </div>
                    </div>
                    <div className="box">
                        <h5 className="progress-title">Javascript</h5>
                            <div className="percent">
                                <svg className="javascript">
                                    <circle cx="23" cy="23" r="23"></circle>
                                    <circle cx="23" cy="23" r="23"></circle>
                                </svg>
                                <div className="number">
                                    <h2>90<span>%</span></h2>
                                </div>
                            </div>
                    </div>
                    <div className="box">
                        <h5 className="progress-title">sass</h5>
                            <div className="percent">
                                <svg className="sass">
                                    <circle cx="23" cy="23" r="23"></circle>
                                    <circle cx="23" cy="23" r="23"></circle>
                                </svg>
                                <div className="number">
                                    <h2>87<span>%</span></h2>
                                </div>
                            </div>
                    </div>
                    <div className="box">
                        <h5 className="progress-title">npm</h5>
                            <div className="percent">
                                <svg className="npm">
                                    <circle cx="23" cy="23" r="23"></circle>
                                    <circle cx="23" cy="23" r="23"></circle>
                                </svg>
                                <div className="number">
                                    <h2>70<span>%</span></h2>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            {/* <p>HTML:</p> */}
            {/* <i className="fas fa-user-graduate "></i> */}
        </div>
    );
}

export default SectionC;