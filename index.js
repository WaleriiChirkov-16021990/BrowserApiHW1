'use strict';

const data = [
    {
        "id": 1,
        "name": "Йога",
        "time": "10:00 - 11:00",
        "maxParticipants": 15,
        "currentParticipants": 8
    },
    {
        "id": 2,
        "name": "Пилатес",
        "time": "11:30 - 12:30",
        "maxParticipants": 10,
        "currentParticipants": 5
    },
    {
        "id": 3,
        "name": "Кроссфит",
        "time": "13:00 - 14:00",
        "maxParticipants": 20,
        "currentParticipants": 15
    },
    {
        "id": 4,
        "name": "Танцы",
        "time": "14:30 - 15:30",
        "maxParticipants": 12,
        "currentParticipants": 10
    },
    {
        "id": 5,
        "name": "Бокс",
        "time": "16:00 - 17:00",
        "maxParticipants": 8,
        "currentParticipants": 6
    }
];

localStorage.setItem('data', JSON.stringify(data));

// // Получение данных из JSON и заполнение таблицы
// // пример так же подойдет для асинхронного запроса
// fetch('schedule.json')
//     .then(response => response.json())
//     .then(data => {
//         const table = document.getElementById('schedule-table');
//
//         data.forEach(item => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//       <td>${item.name}</td>
//       <td>${item.time}</td>
//       <td>${item.maxParticipants}</td>
//       <td>${item.currentParticipants}</td>
//       <td><button onclick="enroll(${item.id})">Записаться</button></td>
//       <td><button onclick="cancelEnrollment(${item.id})">Отменить запись</button></td>
//     `;
//
//             // Проверка состояния кнопок и обновление их класса
//             if (item.currentParticipants >= item.maxParticipants) { // Проверка на максимальное количество участников
//                 row.querySelector('button:nth-child(5)').disabled = true;
//             }
//
//             if (item.currentParticipants === 0) { // Проверка на отсутствие записанных участников
//                 row.querySelector('button:nth-child(6)').disabled = true;
//             }
//
//             table.appendChild(row);
//         });
//     });
