export function generateIndexHtml() {

  const html = /* HTML */ `
      <html>
      <head>
        <script src="scripts.js" type="module"></script>
      </head>
      <body>
        <h1>Spurningaleikur!</h1>
        <p>Velkomin velkomin! Veldu flokk til að svara spurningum í:</p>
        <ul>
  <li><a href="saga.html">Saga</a></li>
</ul>
      </body>
    </html>`;

  return html
}

export function generateQuestionHtml(q) {
  const html = /* HTML */ ` <section class="question" data-answered="false">
    <h3>${q.question}</h3>
    <p>${q.answer}</p>
    <button type="button" class="button button-correct">Rétt ✅</button>
    <button type="button" class="button button-incorrect">Rangt ❌</button>
  </section>`;

  return html;
}

export function generateQuestionCategoryHtml(title, questionsHtml) {
  const html = /* HTML */ `
    <html>
      <head>
        <script src="scripts.js" type="module"></script>
      </head>
      <body>
        <h1>Spurningaleikur!</h1>
        <p><a href="index.html">Til baka</a></p>
        <div class="counter">
          <div class="correct">0</div>
          <div class="incorrect">0</div>
        </div>
        <div class="questions">
        <h2>${title}</h2>${questionsHtml}</div>
      </body>
    </html>
  `;

  return html;
}
