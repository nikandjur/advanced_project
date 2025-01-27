const fs = require("fs");
const path = require("path");

const structure = {
  src: [
    "app",
    "processes",
    "pages",
    "widgets",
    "features",
    "entities/product/ui",
    "entities/product/model",
    "entities/product/lib",
    "shared/ui",
    "shared/lib",
  ],
};

Object.entries(structure).forEach(([base, folders]) => {
  folders.forEach((folder) => {
    const dirPath = path.join(base, folder);
    fs.mkdirSync(dirPath, { recursive: true });
  });
});

console.log("FSD структура создана!");
