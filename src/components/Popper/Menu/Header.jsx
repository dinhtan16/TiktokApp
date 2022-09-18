import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './menu.scss';

function Header({ title, onBack }) {
    return (
        <header className="header">
            <button className="back-btn" onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className="header-title">{title}</h4>
        </header>
    );
}

export default Header;
