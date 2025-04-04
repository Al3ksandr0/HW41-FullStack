import { useState } from 'react';

import styles from './App.module.scss';

import logo from '@/assets/images/logo.avif';

import CategoryButtons from './components/CategoryButtons/CategoryButtons';
import DataGrid from './components/DataGrid/DataGrid';
import Pagination from './components/Pagination/Pagination';
import Modal from './components/Modal/Modal';
import Footer from './components/Footer/Footer';

import { useData } from './hooks/useData';

const App = () => {

  const [category, setCategory] = useState('people');
  const [page, setPage] = useState(1);

  const [selectedItem, setSelectedItem] = useState(null);

  const { items, pagination, loading, error } = useData(category, page);

  return (
    <div className={styles.wrapper} style={{ backgroundImage: `url('./images/bg.jpg')` }}>
      <img src={logo} className={styles.logo} alt="Logo" />

      <CategoryButtons onChange={(cat) => {
        setCategory(cat);
        setPage(1);
      }} />

      {loading && <p>Loading...</p>}
      {error && <p>Error loading data</p>}

      <DataGrid items={items} onItemClick={setSelectedItem} />

      <Pagination
        hasNext={!!pagination.next}
        hasPrev={!!pagination.previous}
        onNext={() => setPage((p) => p + 1)}
        onPrev={() => setPage((p) => Math.max(p - 1, 1))}
      />

      <Modal
        open={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
        category={category}
      />

      <Footer />
    </div>
  );
};

export default App;