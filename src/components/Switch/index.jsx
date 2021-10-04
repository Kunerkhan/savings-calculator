import React, { memo } from "react";
import { Switch as MaterialSwitch } from '@material-ui/core';

import {Label} from "../Label";

import './styles.scss';

const Switch = ({label, name, isRequired, checked, onCheckChange}) => {
    return(
        <div className="switch">
            <MaterialSwitch
                classes={{
                    colorPrimary: 'primary',
                }}
                checked={checked}
                name={name}
                onChange={onCheckChange}
            />
            <Label label={label} name={name} isRequired={isRequired}/>
        </div>
    )
}

export default memo(Switch);