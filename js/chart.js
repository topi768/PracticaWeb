// chart.js

import Chart from 'https://cdn.jsdelivr.net/npm/chart.js';

// Функция для получения данных из API
export async function getUsers() {
  let response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=CZZeYRlqyqA2h6seOlQyTP1KSUpGrGvupRyJ3IQUuWtlgPUngZr_1CjKhLaJxtsyfxqrNEeu7Ab_YIF1WtAw8mDQgs2tC47Zm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJObTY6sTc9x9lnCnTGZx4dgw9ITDcFq4Vs0GzD2P_xi6asqLp15ztu3lhZi7wZg5RRUvmjnT10eeoao13lgBGvZ32noWemZrg&lib=MFcLx8y6u2GYT4jt060GHuKwVvEVRCTWr');
  let resultAnswers = await response.json();
  
  // Получение контекста для рендера диаграммы
  let pueChart = document.querySelector('#pueChart').getContext('2d');
  pueChart.canvas.parentNode.style.height = '600px';
  pueChart.canvas.parentNode.style.width = '50%';

  // Создание диаграммы
  let myChart = new Chart(pueChart, {
    type: 'pie',
    data: {
      labels: ['да, я собираюсь', 'не буду их решать', 'не сдаю профиль'],
      datasets: [{
        data: [
          resultAnswers.result[0][0],
          resultAnswers.result[0][1],
          resultAnswers.result[0][2],
        ],
        backgroundColor: [
          '#6bd95a',
          '#4276d7',
          '#cf4d4d',
        ],
      }]
    },
    options: {
      maintainAspectRatio: false,
    }
  });
}

// Выполнение функции при загрузке скрипта
getUsers();
