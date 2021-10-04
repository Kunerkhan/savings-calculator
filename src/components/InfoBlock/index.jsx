import React from 'react'

import './styles.scss';

const InfoBlock = ({ isCalculated, data, text}) => (
    <div className="results">
        <div className="results-intro">
            <span className="results--choice_by">
                {isCalculated}
            </span>
            <span className="results--money">
                {data}$
            </span>
        </div>
        <div className="results--text">
            <span>
                {text}
            </span>
        </div>
    </div>
)

export default InfoBlock;