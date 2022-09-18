import './popper.scss';

function Wrapper({ children, className }) {
    return <div className={`wrapper-popper ${className ? className : ''}`}>{children}</div>;
}

export default Wrapper;
