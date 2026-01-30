export function generateIndexHtml() {

  const html = /* HTML */ `
      <html>
      <head>
        <script src="scripts.js" type="module"></script>
      </head>
      <body>
        <h1>Spurningaleikur!</h1>
        <p>Velkomin.</p>
        <p>Veldu flokk til að svara spurningum í:</p>
        <ul>
  <li><a href="almenn.html">Almenn</a></li>
  <li><a href="nattura.html">Náttura og vísindi</a></li>
  <li><a href="bok.html">Bókmenntir og listir</a></li>
  <li><a href="saga.html">Saga</a></li>
  <li><a href="landa.html">Landafræði</a></li>
  <li><a href="skemmtun.html">Skemmtun</a></li>
  <li><a href="ithrottir.html">Íþróttir</a></li>
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
        <style>
        .question {
          display: flex;
          justify-content: center;
        }
        </style>
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
