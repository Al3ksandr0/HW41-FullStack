import { useState, useEffect } from 'react';

const BASE_URL = 'https://swapi.dev/api/';

//хук - категория и номер стр
export const useData = (category, page) => {
    // по сути состояние люди планеты транспорт, в app зададим по умолч
    const [items, setItems] = useState([]);
    // пагинация страниц (пред или след)
    const [pagination, setPagination] = useState({ next: null, previous: null });
    // загрузка
    const [loading, setLoading] = useState(false);
    // ошибки если запрос не получисля
    const [error, setError] = useState(null);

    // срабатывает только при [category или page]
    useEffect(() => {
        const fetchData = async () => {
            const url = `${BASE_URL}${category}/?page=${page}`;
            setLoading(true); // индикатор загрзки перед началом запроса (типо покажем это  {loading && <p>Loading...</p>})
            try {
                const res = await fetch(url); // запрос
                const data = await res.json();// to json
                setItems(data.results); //сохраняем полученный объекты (массив)
                setPagination({
                    next: data.next,
                    previous: data.previous
                });
                setError(null);  // очищаем ошибку, если она могла появиться раньше
            } catch (err) {
                setError(err); // {error && <p>Error loading data</p>}
            } finally {
                setLoading(false); // отключаем индикатор загрузки (в любом случае так как конец запроса)
            }
        };

        fetchData();
    }, [category, page]);

    return { items, pagination, loading, error };
};