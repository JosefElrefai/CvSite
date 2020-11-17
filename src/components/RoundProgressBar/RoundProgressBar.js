import React from 'react';
import './roundProgressBar.scss';

const RoundProgressBar = (props) => {
    return (
        <div className="box">
            <h5 className="progress-title">{props.title}</h5>
                <div className="percent">
                    <svg className={`${props.cn}`}>
                        <circle cx="23" cy="23" r="23"></circle>
                        <circle cx="23" cy="23" r="23"></circle>
                    </svg>
                    <div className="number">
                        <h2>{props.percent}<span>%</span></h2>
                    </div>
                </div>
        </div>
    );
}

export default RoundProgressBar;