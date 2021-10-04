import React, { memo } from 'react';

import './styles.scss';

export const Label = ({ label, name }) => (
    <div className="label">
        {label && (
            <label htmlFor={name} className="label">
                {label}
            </label>
        )}
    </div>
);

export default memo(Label);