import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, 'public');

const files = fs.readdirSync(PUBLIC_DIR).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

for (const file of files) {
  const filePath = path.join(PUBLIC_DIR, file);
  const stats = fs.statSync(filePath);
  const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
  
  console.log(`Processing: ${file} (${sizeMB} MB)`);
  
  const ext = path.extname(file).toLowerCase();
  const tempPath = filePath + '.tmp';
  
  try {
    if (ext === '.png') {
      await sharp(filePath)
        .resize({ width: 800, withoutEnlargement: true })
        .png({ quality: 60, compressionLevel: 9 })
        .toFile(tempPath);
    } else {
      await sharp(filePath)
        .resize({ width: 800, withoutEnlargement: true })
        .jpeg({ quality: 55, mozjpeg: true })
        .toFile(tempPath);
    }
    
    const newStats = fs.statSync(tempPath);
    const newSizeMB = (newStats.size / 1024 / 1024).toFixed(2);
    
    fs.unlinkSync(filePath);
    fs.renameSync(tempPath, filePath);
    
    console.log(`  -> Compressed: ${sizeMB} MB -> ${newSizeMB} MB`);
  } catch (err) {
    console.error(`  -> Error: ${err.message}`);
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
  }
}

console.log('Done!');
