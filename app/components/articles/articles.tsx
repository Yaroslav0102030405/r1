import { useState, useEffect, useLayoutEffect } from "react";
import axios from 'axios';
import SearchForm from "../serchForm/searchForm";

const API_KEY = "2b084a585a6744c9a99186e76694f8db"

interface Article {
    id: number
    title: string
}

const Articles: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([])
     const [loading, setLoading] = useState<boolean>(true);
      const [query, setQuery] = useState<string>('');
      const [currentPage, setCurrentPage] = useState<number>(1)
        const [totalResults, setTotalResults] = useState<number>(0); // Для отслеживания общего количества статей

  // Объявляем состояние для ошибки
  const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      if (query === '') {
      // Если query пустой, не делаем запрос и сразу сбрасываем loading/error
      setLoading(false);
      setError(null);
      setArticles([]); // Очищаем статьи, если запрос пустой
      return; // Выходим из useEffect
    }

    // const fetchArticles = async () => {
    //     setLoading(true);
    //   setError(null);

    //   try {
    //     const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&pageSize=5&page=${cuurentPage}&sortBy=popularity&apiKey=2b084a585a6744c9a99186e76694f8db`); // Замените на ваш API-эндпоинт
    //     setArticles(response.data.articles);
    //     console.log(response.data.articles)

    //     if(response) {
    //         setCurrentPage(cuurentPage + 1)
    //     }
    //   } catch (err) {
    //     setError('Не удалось загрузить статьи.');
    //     console.error(err);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

     const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // NewsAPI требует дату в формате YYYY-MM-DD
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];

        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${query}&pageSize=5&page=${currentPage}&sortBy=popularity&apiKey=${API_KEY}`
        );

        if (response.data && Array.isArray(response.data.articles)) {
          // Если это первая страница, заменяем статьи. Иначе, добавляем.
          if (currentPage === 1) {
            setArticles(response.data.articles);
          } else {
            setArticles(prevArticles => [...prevArticles, ...response.data.articles]);
          }
          setTotalResults(response.data.totalResults); // Сохраняем общее количество результатов
        } else {
          setArticles([]);
          setError('Получены данные в неожиданном формате.');
        }
      } catch (err) {
        console.error("Ошибка при загрузке статей:", err);
        if (axios.isAxiosError(err) && err.response) {
          setError(`Ошибка API: ${err.response.data?.message || 'Неизвестная ошибка сервера'}`);
        } else if (err instanceof Error) {
          setError(`Ошибка: ${err.message}`);
        } else {
          setError('Не удалось загрузить статьи. Попробуйте еще раз.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, currentPage]); //

   const handleQuery = (newQuery: string) => {
    // Только если запрос изменился, обновляем query и сбрасываем currentPage
    if (newQuery.trim() !== query.trim()) {
      setQuery(newQuery.trim());
      setCurrentPage(1); // При новом поиске всегда начинаем с первой страницы
    }
  }

  // Эта функция вызывается при нажатии кнопки "Загрузити ще..."
  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1); // Увеличиваем номер страницы, что вызовет useEffect
  };

   if (loading) {
    return <div>Загрузка статей...</div>;
  }

  // Отображаем сообщение об ошибке, если оно есть
  if (error) {
    return <div style={{ color: 'red' }}>Ошибка: {error}</div>;
  }

  const hasMoreArticles = articles.length < totalResults; // Проверяем, есть ли еще статьи для загрузки
    return ( <>
    <SearchForm onSubmit={handleQuery} />
<h1>Список статей</h1>
{query === '' ? (
        <p>Введите запрос для поиска статей.</p>
      ) :  articles.length === 0 ? (
        <p>Статьи не найдены.</p>
      ) : (
        <ul>
          {articles.map(article => (
            <li key={article.title}>{article.title}</li>
          ))}
        </ul>
      )}
{/* <button onClick={handleLoadMore} type="button" disabled={loading}>
     {loading ? 'Загрузка...' : 'Загрузити ще...'}
</button> */}
  {/* Кнопка "Загрузить еще" показывается только если есть еще статьи */}
          {hasMoreArticles && (
            <button onClick={handleLoadMore} type="button" disabled={loading}>
              {loading ? 'Загрузка...' : 'Загрузити ще...'}
            </button>
          )}
     
    
    </> );
}
 
export default Articles;