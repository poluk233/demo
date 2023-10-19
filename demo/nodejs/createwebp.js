import fs from "fs";
import path from "path";
import webp from "webp-converter";
import sharp from "sharp";
const [_path = "/public"] = process.argv.slice(2);
const cur_path = path.join(process.cwd(), _path);

const getFilePath = async (dirPath) => {
  let paths = await fs.readdirSync(dirPath);
  paths.forEach((flie) => {
    const filePath = path.join(dirPath, flie);
    const stats = fs.lstatSync(filePath);
    if (stats.isDirectory()) {
      getFilePath(filePath);
    } else if (!filePath.endsWith(".webp")) {
      const webpFilePath = path.join(dirPath, `${flie}.webp`);
      toWebp(filePath, webpFilePath);
      // toWebp1(filePath, webpFilePath);
      console.log(webpFilePath);
    }
  });
};
const toWebp = async (dirPath, filePath) => {
  try {
    let res = await webp.cwebp(dirPath, filePath);
    if(res){
      console.log(filePath);
      
    }
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};

const toWebp1 = (dirPath, filePath) => {
  sharp(dirPath)
    .toFormat("webp")
    .toFile(filePath, (err) => {
      if (err) {
        console.error(`Error converting ${filePath} to WebP:`, err);
      } else {
        console.log(`${filePath} converted to WebP`);
      }
    });
};

getFilePath(cur_path);
