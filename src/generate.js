import fs from "node:fs/promises";
import { parseLine } from "./lib/parse.js";
import {
  generateIndexHtml,
  generateQuestionCategoryHtml,
  generateQuestionHtml,
} from "./lib/html.js";

const MAX_QUESTIONS_PER_CATEGORY = 100;

async function main() {
  // Búa til dist möppu ef ekki til
  const distPath = "./dist";
  await fs.mkdir(distPath);

  const content = await fs.readFile("./questions.csv", "utf-8");

  const lines = content.split("\n");

  const questions = lines.map(parseLine);

  //hardkóðað enn ég þarf momentum til að komast áfram fyrst :( 
  //geri þetta betur þegar ég leysi punktameiri kröfunar og grunndvallar kröfunar fyrst. -jcs

  //almenn 1
  const qualityGeneralQuestions = questions
    .filter((q) => q && q.categoryNumber === "1" && q.quality === "3")
    .slice(0, MAX_QUESTIONS_PER_CATEGORY);

  //Nattura og visindi 2
  const qualityNatureQuestions = questions
    .filter((q) => q && q.categoryNumber === "2" && q.quality === "3")
    .slice(0, MAX_QUESTIONS_PER_CATEGORY);

  //Bokmenntir og listir 3
  const qualityArtsQuestions = questions
    .filter((q) => q && q.categoryNumber === "3" && q.quality === "3")
    .slice(0, MAX_QUESTIONS_PER_CATEGORY);

    //Saga 4
  const qualityHistoryQuestions = questions
    .filter((q) => q && q.categoryNumber === "4" && q.quality === "3")
    .slice(0, MAX_QUESTIONS_PER_CATEGORY);

    //landafraedi 5
  const qualityGeoQuestions = questions
    .filter((q) => q && q.categoryNumber === "5" && q.quality === "3")
    .slice(0, MAX_QUESTIONS_PER_CATEGORY);

    //skemmtun og afreying 6
  const qualityEntertainmentQuestions = questions
    .filter((q) => q && q.categoryNumber === "5" && q.quality === "3")
    .slice(0, MAX_QUESTIONS_PER_CATEGORY);

    //ithrottir og tomstund 7
  const qualitySportsQuestions = questions
    .filter((q) => q && q.categoryNumber === "7" && q.quality === "3")
    .slice(0, MAX_QUESTIONS_PER_CATEGORY);

  // TODO ítra gegnum alla flokka og búa til

  const questionsHtml = qualityHistoryQuestions
    .map(generateQuestionHtml)
    .join("\n");

    //vantar lista til að ítra gegnum enn ég þarf að láta þetta virka fyrst -jcs
  const o1 = generateQuestionCategoryHtml("Almenn", questionsHtml);
  const o2 = generateQuestionCategoryHtml("Náttura og vísindi", questionsHtml);
  const o3 = generateQuestionCategoryHtml("Bókmenntir og listir", questionsHtml);
  const output = generateQuestionCategoryHtml("Saga", questionsHtml);
  const o5 = generateQuestionCategoryHtml("Landafræði", questionsHtml);
  const o6 = generateQuestionCategoryHtml("Skemmtun", questionsHtml);
  const o7 = generateQuestionCategoryHtml("Íþróttir", questionsHtml);

  const p1 = "./dist/almenn.html";
  const p2 = "./dist/nattura.html";
  const p3 = "./dist/bok.html";
  const path = "./dist/saga.html";
  const p5 = "./dist/landa.html";
  const p6 = "./dist/skemmtun.html";
  const p7 = "./dist/ithrottir.html";

  await fs.writeFile(p1, output, "utf-8");
  await fs.writeFile(p2, output, "utf-8");
  await fs.writeFile(p3, output, "utf-8");
  await fs.writeFile(path, output, "utf-8"); //4
  await fs.writeFile(p5, output, "utf-8");
  await fs.writeFile(p6, output, "utf-8");
  await fs.writeFile(p7, output, "utf-8");

  // TODO gera alvoru itrun -jcs

  //TODO gera CSS -jcs

  // TODO búa til index
  const indexHtml = generateIndexHtml();

  await fs.writeFile('./dist/index.html', indexHtml, "utf-8");
}

main().catch((error) => {
  console.error("error generating", error);
});
