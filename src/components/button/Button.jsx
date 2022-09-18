// import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
// import styles from './Button.module.scss';
import './button.scss';

// const cx = classNames.bind(styles);

// primary = false,
// outline = false,
// text = false,
// rounded = false,
// small = false,
// large = false,

function Button({ to, href, disabled = false, children, className, leftIcon, rightIcon, onClick, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={`wrapper-btn ${props.type} ${className}`} {...props}>
            {leftIcon && <span className="icon">{leftIcon}</span>}
            <span className="title">{children}</span>
            {rightIcon && <span className="icon">{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
