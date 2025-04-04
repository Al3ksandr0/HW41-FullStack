import styles from './CategoryButtons.module.scss';
import { Button } from 'antd';

const buttons = [
    { label: 'People', value: 'people' },
    { label: 'Planets', value: 'planets' },
    { label: 'Transport', value: 'vehicles' },
];

const CategoryButtons = ({ onChange }) => {
    return (
        <div className={styles.buttons}>

            {/* проходимся по массиву buttons и создаем одну для каждого */}
            {buttons.map(({ label, value }) => (
                <Button
                    key={value}
                    className={styles.btn}
                    // при клике вызываем функцию и передаем значение категории
                    onClick={() => onChange(value)}
                    shape="round"
                    type="primary"
                >
                    {label}
                </Button>
            ))}
        </div>
    );
};

export default CategoryButtons;