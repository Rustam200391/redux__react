import React, { useState, useEffect } from "react";

export const ProductsPage = () => {
  // Состояния для хранения информации о загрузке, ошибке и товарах
  const [loading, setLoading] = useState(true); // Флаг загрузки
  const [error, setError] = useState(null); // Сообщение об ошибке
  const [products, setProducts] = useState([]); // Список товаров

  useEffect(() => {
    // Функция для загрузки товаров
    const fetchProducts = async () => {
      try {
        // Выполнение запроса к API
        const response = await fetch(
          "http://api.valantis.store:40000/products"
        );
        // Проверка успешности запроса
        if (!response.ok) {
          // Если запрос неудачен, выбрасываем ошибку
          throw new Error("Failed to fetch products");
        }
        // Если запрос успешен, получаем данные и устанавливаем состояние загрузки в false
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        // Если произошла ошибка, устанавливаем состояние ошибки и состояние загрузки в false
        setError(error.message);
        setLoading(false);
      }
    };

    // Вызов функции для загрузки товаров 
    fetchProducts();
  }, []); // Зависимость пустая, поэтому useEffect вызывается только один раз 

  // Если данные загружаются, отображаем сообщение о загрузке
  if (loading) {
    return <div>Loading...</div>;
  }

  // Если произошла ошибка при загрузке данных, отображаем сообщение об ошибке
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Если данные успешно загружены, отображаем список товаров
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
