import Button from '../../../components/button/Button';
import './menu.scss';
function MenuItem({ data, onClick }) {
    const separate = data.separate;
    return (
        <Button
            leftIcon={data.icon}
            to={data.to}
            className={`menu-item ${separate ? 'separate' : ''}`}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
