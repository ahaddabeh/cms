const path = require("path");
const faker = require("faker");
const fs = require("fs-extra");

const getRandomInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomArrayElements = arr => Array.from(new Set(Array.from({ length: 10 }, () => getRandomInclusive(0, arr.length - 1)))).sort((a, b) => a - b);

const randomParagraph = (min = 3, max = 8) => `<p>${faker.lorem.paragraph(getRandomInclusive(min, max))}</p>`;

const randomList = () => {
    const result = []
    result.push("<ul>")
    for (let i = 0; i < getRandomInclusive(1, 10); i++) {
        result.push(`<li>${faker.lorem.words(getRandomInclusive(1, 10))}</li>`)
    }
    result.push("</ul>")
    return result.join("");
}

const OUTPUT = {}

const generateHTMLContent = () => randomParagraph() + randomList() + randomParagraph();

// const ROLES = [
//     { id: 100, role: "root" },
//     { id: 200, role: "admin" },
//     { id: 300, role: "user" }
// ]

const setTimestamps = obj => {
    const date = new Date(faker.date.recent());
    const { 0: MM, 1: DD, 2: YYYY } = date.toLocaleDateString('en-US', { year: "numeric", month: "2-digit", day: "2-digit" }).split("/");
    const { 0: HH, 1: M, 2: SS } = date.toLocaleTimeString('en-US', { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }).split(":");
    const timestamp = `${YYYY}-${MM}-${DD} ${HH}:${M}:${SS}`; // 2020-05-02 18:43:30
    return { ...obj, createdAt: timestamp, updatedAt: timestamp };
}

const newContentId = () => OUTPUT && OUTPUT.content && OUTPUT.content.length ? OUTPUT.content[OUTPUT.content.length - 1].id + 1 : 10000;
const createContent = (title, directory, slug, contentTypeId, categoryId, options = {}) => {
    // Destrutcture and assign default values to object properties
    const { hasContent = true, isPermanent = 0, content = null } = options;
    return {
        id: newContentId(),
        historyId: 0,
        contentTypeId,
        categoryId,
        createdBy: 1,
        updatedBy: 1,
        isPermanent,
        title,
        subtitle: faker.lorem.words(getRandomInclusive(3, 7)),
        content: content || (hasContent && generateHTMLContent()) || null,
        directory,
        slug
    }
}



OUTPUT.content_types = [
    { id: 1, title: "Page", description: faker.lorem.sentence() },
    { id: 2, title: "Category", description: faker.lorem.sentence() },
    { id: 3, title: "Tag", description: faker.lorem.sentence() }
]

OUTPUT.users = [
    { id: 1, firstName: "Alaa", lastName: "Haddabeh", email: "ah@gmail.com", isActive: 1 },
    { id: 2, firstName: "John", lastName: "Doe", email: "jd@gmail.com", isActive: 1 }
]

const categories = ["Blog", "Services", "Products", "Stories"]

const tags = Array.from(new Set(Array.from({ length: 20 }, () => faker.lorem.word())));

OUTPUT.content = []

OUTPUT.content.push(createContent("Home", "/", "index", 1, 0, { isPermanent: 1, hasContent: true }))
OUTPUT.content.push(createContent("About", "/", "about", 1, 0))
OUTPUT.content.push(createContent("Contact", "/", "contact", 1, 0))
categories.forEach(it => OUTPUT.content.push(createContent(it, "/", it.toLowerCase(), 2, 0)))
tags.forEach(it => OUTPUT.content.push(createContent(it, "/", it.toLowerCase(), 3, 0)))

const categoriesArray = OUTPUT.content.filter(it => it.contentTypeId === 2).map(it => ({ id: it.id, category: it.title }))
const tagsArray = OUTPUT.content.filter(it => it.contentTypeId === 3).map(it => ({ id: it.id, tag: it.title }))
const getRandomTags = () => getRandomArrayElements(tagsArray).map(it => tagsArray[it]);


console.log(categoriesArray, tagsArray, getRandomTags());
// Todo: generate n number of pages 


fs.writeFileSync(path.join(__dirname, "../", "output.json"), JSON.stringify(OUTPUT, null, 2))