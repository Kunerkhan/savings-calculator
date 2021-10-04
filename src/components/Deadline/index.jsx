import React, {memo} from "react";
import moment from 'moment';

import LeftArrow from '../../assets/icons/LeftArrow.svg';
import RightArrow from '../../assets/icons/RightArrow.svg';

import './styles.scss';

const Deadline = ({ text, deadline, incrementMonth, decrementMonth}) => {

    const month = moment(deadline).format('MMMM, YYYY');

    return(
        <div className="savings-calculator__inputs">
            <p className="deadline--title">{text}</p>
            <div className="deadline">
                <button className="deadline__btn" onClick={incrementMonth}>
                    <img src={LeftArrow} alt="LeftArrow"/>
                </button>
                <span className="deadline--date">{month}</span>
                <button className="deadline__btn" onClick={decrementMonth}>
                    <img src={RightArrow} alt="RightArrow"/>
                </button>
            </div>
        </div>
    )
}

export default memo(Deadline);