# Gunakan Node.js resmi supaya npm otomatis tersedia
FROM node:18

# Tentukan folder kerja
WORKDIR /app

# Salin semua file project
COPY . .

# Masuk ke folder backend dan install dependencies
RUN npm install --prefix backend

# Jalankan backend
CMD ["npm", "start", "--prefix", "backend"]
