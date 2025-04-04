import { Modal as AntModal } from 'antd';
import styles from './Modal.module.scss';

const Modal = ({ open, onClose, item, category }) => {
    const renderDetails = () => {

        if (!item) return null; // если объекта нет то ничего не рендерим

        // выбираем шаблон отображения в зависимости от категории
        switch (category) {
            case 'people':
                return (
                    <>
                        <p><strong>Name:</strong> {item.name}</p>
                        <p><strong>Height:</strong> {item.height} cm</p>
                        <p><strong>Mass:</strong> {item.mass} kg</p>
                        <p><strong>Hair Color:</strong> {item.hair_color}</p>
                        <p><strong>Eye Color:</strong> {item.eye_color}</p>
                        <p><strong>Birth Year:</strong> {item.birth_year}</p>
                        <p><strong>Gender:</strong> {item.gender}</p>
                    </>
                );

            case 'planets':
                return (
                    <>
                        <p><strong>Name:</strong> {item.name}</p>
                        <p><strong>Climate:</strong> {item.climate}</p>
                        <p><strong>Gravity:</strong> {item.gravity}</p>
                        <p><strong>Terrain:</strong> {item.terrain}</p>
                        <p><strong>Population:</strong> {item.population}</p>
                    </>
                );

            case 'vehicles':
                return (
                    <>
                        <p><strong>Name:</strong> {item.name}</p>
                        <p><strong>Model:</strong> {item.model}</p>
                        <p><strong>Manufacturer:</strong> {item.manufacturer}</p>
                        <p><strong>Cost:</strong> {item.cost_in_credits} credits</p>
                        <p><strong>Length:</strong> {item.length} meters</p>
                        <p><strong>Crew:</strong> {item.crew}</p>
                        <p><strong>Passengers:</strong> {item.passengers}</p>
                    </>
                );

            default:
                return <p>No details available.</p>;
        }
    };

    // бекаем модалку
    return (
        <AntModal
            open={open}
            onCancel={onClose}
            footer={null}
            centered
            className={styles.modal}
        >
            <div className={styles.content}>
                {renderDetails()} // вставляем сгенеренное содержимое
            </div>
        </AntModal>
    );
};

export default Modal;
