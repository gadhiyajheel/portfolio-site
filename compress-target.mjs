import sharp from 'sharp';
import fs from 'fs';

const inputFile = 'c:/Users/User/OneDrive/Pictures/Screenshots/Screenshot 2026-03-28 224155.png';
const outputFile = 'c:/Users/User/OneDrive/Documents/POrtfolio/portfolio-site/public/every-word.jpg';

async function compress() {
  try {
    let quality = 90;
    while (quality > 0 && quality <= 100) {
      await sharp(inputFile)
        .resize({ width: 800 })
        .jpeg({ quality })
        .toFile(outputFile);
        
      const sizeBytes = fs.statSync(outputFile).size;
      const sizeKb = sizeBytes / 1024;
      
      console.log(`Quality: ${quality}, Size: ${sizeKb.toFixed(2)} KB`);
      
      if (sizeKb >= 75 && sizeKb <= 100) {
        console.log("Success! Final size:", sizeKb.toFixed(2), "KB");
        break;
      } else if (sizeKb > 100) {
        quality -= Math.max(1, Math.floor((sizeKb - 100) / 10));
      } else if (sizeKb < 75) {
        quality += Math.max(1, Math.floor((75 - sizeKb) / 10)); // Increase quality if too small
      }
      
      if (quality <= 1) {
          console.log("Reached min quality, size is still too large.");
          break;
      }
      if (quality > 100) {
          console.log("Reached max quality, size is still too small.");
          break;
      }
    }
  } catch(err) {
    console.error("Compression Error:", err);
  }
}

compress();
