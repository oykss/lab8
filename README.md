# Lab8 - Algorithm Class

TypeScript проект з реалізацією алгоритмічних методів та тестами за допомогою Jest.

## Вимоги

- **Node.js**: v18.x або вище
- **npm**: v9.x або вище

## Встановлення залежностей

```bash
npm install
```

## Доступні команди

### Запуск тестів

Запустити всі тести:

```bash
npm run test
```

### Перевірка покриття коду

Запустити тести з звітом про покриття коду:

```bash
npm run test:coverage
```

Звіт буде згенеровано в папці `coverage/`. Відкрийте `coverage/lcov-report/index.html` у браузері для перегляду детального звіту.

### Розробка

Запустити сервер розробки:

```bash
npm run dev
```

### Збірка проекту

Зібрати проект для продакшену:

```bash
npm run build
```

Перегляд зібраного проекту:

```bash
npm run preview
```

## Структура проекту

```
lab8/
├── src/
│   └── main.ts           # Основний файл з класом Algorithm
├── tests/
│   └── algorithm.test.ts # Тести для класу Algorithm
├── coverage/             # Звіт про покриття коду (ігнорується в git)
├── public/               # Статичні файли
├── tsconfig.json         # Конфігурація TypeScript
├── jest.config.js        # Конфігурація Jest
├── package.json          # Залежності та скрипти
└── index.html            # Головний HTML файл
```