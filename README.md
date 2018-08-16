# Jest ~ async & mock

## Installation

```bash
git clone https://github.com/javascriptst18/jest-async-exercise.git
cd jest-async-exercise
npm install # yarn
```

## Running

Startar både servern som ni ska hämta data från samt kommandot för att testa

```js
npm run test:serve
```

## Övning 1

* Skriv klart de tomma testen samt skriv tester för `filterActions.js`. Annars kan du bara skriva tester för `asyncActions.js`. De tester i `timerActions.js` behöver du inte röra.

# Övning 2

* Kalla på valfritt API och testa det

Använd ett API som du har använt tidigare och använd kod från tidigare projekt. Se bara till så att koden är "pure" och inte hanterar DOMen eftersom vi inte har en DOM att arbeta med och vi vill inte testa DOMen heller.
  * Anropa APIet och gör assertions på svaret
  * Mocka APIet så att du inte kallar på APIet utan gör anrop till din egen mock istället för APIet i dina test
  * Testa för failing behavior, d.v.s. att du har anropat APIet fel.
