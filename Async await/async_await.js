// Напишите функцию fetchUserData, которая
// использует async/await для загрузки данных
// о пользователе с сервера по его
// идентификатору. Функция должна
// принимать идентификатор пользователя в
// качестве аргумента и возвращать объект с
// данными о пользователе.

async function fetchUserData(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) {
            throw new Error('Ошибка при загрузке данных о пользователе');
        }
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Произошла ошибка:', error);
        throw error;
    }
}

// Пример
const userId = '123';
fetchUserData(userId)
    .then(userData => {
        console.log('Данные о пользователе:', userData);
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных о пользователе:', error);
    });