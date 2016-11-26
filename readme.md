# auth.js

Библиотека для авторизации и работы с токеном через localStorage

## Использование

```js
  // Получение SID
  auth.login('SID',  loggedIn => {
    if (!loggedIn) {
      auth.logout()
    } else {
      // делаем что-то с полученным SID(напр. сохраняем в state)
    }
  })

  auth.onChange = loggedIn => {
    this.auth = loggedIn
    if (this.auth === false) {
      // тут можно удалить SID из state, если писали его туда
    }
  }
```
