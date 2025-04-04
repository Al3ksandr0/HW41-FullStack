import { Button } from 'antd';
import styles from './Pagination.module.scss';

const Pagination = ({ hasPrev, hasNext, onPrev, onNext }) => {
    return (
        <div className={styles.pagination}>
            {hasPrev && (
                <Button className={styles.btn} onClick={onPrev}>
                    Prev
                </Button>
            )}
            {hasNext && (
                <Button className={styles.btn} onClick={onNext}>
                    Next
                </Button>
            )}
        </div>
    );
};

export default Pagination;