import styles from './DataGrid.module.scss';

// принимает массив items и функцию onItemClick
const DataGrid = ({ items, onItemClick }) => {
    return (
        <div className={styles.grid}>

            {/* проходимся по массиву данных и отображаем каждый элемент */}
            {items.map((item, index) => (
                <div
                    key={index}
                    className={styles.card}
                    // при клике вызываем функцию и передаем текущий элемент
                    onClick={() => onItemClick(item)}
                >
                    Name: {item.name}
                </div>
            ))}
        </div>
    );
};

export default DataGrid;
