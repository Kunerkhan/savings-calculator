import React, { memo } from 'react';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';

import InputIcon from '../../assets/icons/InputIcon.svg';

import './styles.scss';
import {Label} from "../Label";

export const Input = ({ value, name, label, onChange }) => {

    const reference = React.createRef();
    const wheelHandler = () => {
        reference.current.blur();
    };

    const renderStartAdornment = () => (
            <InputAdornment position="start" classes={{root: "input__icon"}}>
                <img src={InputIcon} alt="input"/>
            </InputAdornment>
    );

    return (
        <div className="savings-calculator__inputs">
            <Label label={label} name={name}/>
            <InputBase
                type="number"
                value={value}
                inputRef={reference}
                startAdornment={renderStartAdornment()}
                onWheel={wheelHandler}
                classes={{
                    root: 'input',
                    focused: 'input--focused',
                }}
                onChange={onChange}
            />
        </div>
    );
};

export default memo(Input);
