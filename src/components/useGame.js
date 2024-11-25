import React from "react";

export default function useGame(images) { //images - массив объектов, все фотографии

    const [finishedItems, setFinishedItems] = React.useState([]); // Вычисление текущего состояния игры, сохраняем список отгаданых карточек
    const [stepsCount, setStepsCount] = React.useState(0); // Счетчик шагов - счетчик игры

    const checkItems = (firstItem, secondItem) => { // Сравнение двух карточек
        const firstImage = images.find(({ id }) => id === firstItem); //Нужно получить полные объекты данных. Найдем объекты по их id из параметров функции
        const secondImage = images.find(({ id }) => id === secondItem);

        if (firstImage.url === secondImage.url) { // Сравним карточки по адрусу изображения.
            // Если изображения совпадают, обновляем список отгаданых карточек.
            // Создаем новый массик из копии текущего.
            // Добавляем оба id в новый массив.
            setFinishedItems((items) => [...items, firstItem, secondItem]);
        }
        setStepsCount((i) => i + 1);
    };

    const handleReset = () => { // Сброси игры - очищение массива отгаданых карточек и счетчика.
        setFinishedItems([]);
        setStepsCount(0);
    };

    // Что бы понять, что все карточки отгаданы, сравниваем длину массива карточек и списка.
    const isWin = finishedItems.length > 0 && finishedItems.length === images.length; 

    return {
        finishedItems, 
        handleReset, // Сброс
        stepsCount, // Счетчик шагов
        checkItems, // Сравнение
        isWin, // Победа
    };
};