// Linear Search
const beasts = ["Cenataur", "Godzilla", "Mosura", "Minotaur"];

beasts.find((item) => item === "Godzilla") // "Godzilla"
beasts.findIndex((item) => item === "Godzilla") // 1
beasts.indexOf("Godzilla") // 1
beasts.includes("Godzilla") // true
