const fs = require("fs")

// Функция для записи логов в файл
function logMessage(message) {
    // Добавляем сообщение в конец файла log.txt
    fs.appendFile('log.txt', message + '\n', (err) => {
        if (err) {
            console.error('Ошибка при записи в файл:', err);
        } else {
            console.log('Сообщение записано в log.txt');
        }
    });
}

logMessage('Новое сообщение');
module.exports = logMessage
