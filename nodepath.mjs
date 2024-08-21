import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";

const directoryPath = "C:/Users/Esteban/Pictures/Saved Pictures";

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log("Cant read directory " + err);
  }

  files.forEach(transform);
});

const transform = function (file) {
  const sizes = [480, 640, 1200];
  const resizesPromises = sizes.map((size) => {
    const fileName = path.basename(file, path.extname(file));
    const fileExtension = path.extname(file);
    const pathFileName = path.join(directoryPath, file);
    const pathFileNameOpt = path.join(
      directoryPath,
      `${fileName}-${size}${fileExtension}`
    );
    return sharp(pathFileName).resize(size).toFile(pathFileNameOpt);
  });
  Promise.all(resizesPromises);
};
