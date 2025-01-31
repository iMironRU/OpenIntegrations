---
id: GoogleCalendar
---

<img src={require('../../static/img/APIs/GoogleCalendar.png').default} width='64px' />

# Google Календарь

Этот раздел посвящен библиотеке для работы с API Google Календаря. На данной странице описаны все действия, необходимые для полноценного начала работы

## Начало работы

### Создание проекта

1. Перейдите на [главную страницу Google Cloud](https://console.cloud.google.com) и создайте проект

![BF](../../static/img/Docs/GoogleCalendar/1.png)

2. Выберите созданный проект и в боковом меню перейдите APIs and Services -> OAuth consent screen

![BF](../../static/img/Docs/GoogleCalendar/2.png)

3. Выберите пункт External

![BF](../../static/img/Docs/GoogleCalendar/3.png)

4. Заполните поля App name, User support email и Email addresses (все поля со звездочками)

![BF](../../static/img/Docs/GoogleCalendar/4.png)

5. Нажимайте далее и Save and continue на последней вкладке

![BF](../../static/img/Docs/GoogleCalendar/5.png)

6. Нажмите Publish App

![BF](../../static/img/Docs/GoogleCalendar/6.png)


### Настройка OAuth

1. В боковом меню выберите пункт Credentials -> Create Credentials -> OAuth client ID

![BF](../../static/img/Docs/GoogleCalendar/7.png)

2. Введите имя и выберите Application type - Desktop app

![BF](../../static/img/Docs/GoogleCalendar/8.png)

3. Сохраните ClientID и Client Secret

![BF](../../static/img/Docs/GoogleCalendar/9.png)


### Включение сервиса Google Calendar

1. Перейдите на [страницу Календаря в Marketplace](https://console.cloud.google.com/marketplace/product/google/calendar-json.googleapis.com) 

2. Нажмите Enable

![BF](../../static/img/Docs/GoogleCalendar/12.png)


### Получение Токена

1. Передайте ClientID в функцию OPI_GoogleWorkspace.СформироватьСсылкуПолученияКода(ClientID). Результатом функции будет URL, который необходимо открыть в браузере. Авторизуйтесь при помощи своего аккаунта Google

![BF](../../static/img/Docs/GoogleCalendar/10.png)

2. Скопируйте код из URL после авторизации

![BF](../../static/img/Docs/GoogleCalendar/11.png)

3. Используйте полученный код, ClientID и Client Secret для вызова функции OPI_GoogleWorkspace.ПолучитьТокенПоКоду(ClientID, ClientSecret, Code)

```json title="Результат функции ПолучитьТокенПоКоду(), если перевести его в JSON"

{
 "token_type": "Bearer",
 "refresh_token": "1//09au6OES3JN9oCgYIARAAGAkSNwF-L9Ir1B7uawfwafT1wE0FKO519Xj6JxawfawfyjMyJ_QlUZYLHZqw",
 "scope": "https://www.googleapis.com/auth/calendar",
 "expires_in": 3599,
 "access_token": "ya29.a0AfB_byA344tXkIawdawdwadadhyZQV8bSZn_snNXtY2HLb7l71awdawdawdad-ASgpzyOSWIvEmPruhUa_1yCCq6jvoD0r_q-fNEsARrH8zpJ3c6LNGWvwdg8CXsSxYaCgYKAWkSawfwafawfrCK0EP5kZY_A0171"
}

```

4. Используйте **access_token** для передачи в качестве параметра Токен при вызове функций библиотеки, а refresh_token - для получения нового access_token (функция OPI_GoogleWorkspace.ОбновитьТокен(ClientID, ClientSecret, RefreshToken)), когда время жизни старого истечет. При обновлении токена refresh_token не обновляется - вы можете использовать его один и тот же для получения нового access_token каждый раз.
