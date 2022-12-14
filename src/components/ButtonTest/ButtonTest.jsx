import PropTypes from 'prop-types';
import React from 'react';

import styles from './ButtonTest.module.scss';

/**
 * Primary UI component for user interaction
 */
export const ButtonTest = ({ primary, backgroundColor, size, label, ...props }) => {
    const mode = primary ? styles.primary : styles.secondary
    return (
        <button
            type='button'
            className={[styles.button, styles[size] || undefined, mode].join(' ')}
            style={backgroundColor && { backgroundColor }}
            {...props}
        >
            {label} <span>iconX</span>
        </button>
    )
}

ButtonTest.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func
}

ButtonTest.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined
}
