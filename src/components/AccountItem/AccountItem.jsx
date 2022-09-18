import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './accountitem.scss';

function AccountItem() {
    return (
        <div className="wrapper-accountitem">
            <img
                className="avatar"
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b0bf939e0a3520285396803f9f356b98~c5_100x100.jpeg?x-expires=1662206400&x-signature=qlkODN41gSGpdv4HDgIgqAsQ9Fg%3D"
                alt="Hoaa"
            />
            <div className="info">
                <h4 className="name">
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className="check" icon={faCheckCircle} />
                </h4>
                <span className="username">nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
