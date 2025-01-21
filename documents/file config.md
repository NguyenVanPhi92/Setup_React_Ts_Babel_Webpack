**Setup React Typescript With Babel Webpack**
https://duthanhduoc.com/blog/tao-du-an-react-webpack-typescript-babel-eslint

**Các file config**
1 `.babelrc`: Mục đích là chứa các preset babel chuyển đổi code sang js phiên bản es5
2 `.browserslistrc`: Hỗ trợ các phiên bản trình duyệt mà có lượng người dùng lớn hơn 0.2 và chưa bị khai tử > 0.2% and not dead
3 `.editorconfig`: Mục đích là cấu hình các config đồng bộ các editor với nhau nếu dự án có nhiều người tham gia.
4 `.env`: Mục đích là chứa các biến môi trường dùng trong dự án React của chúng ta
5 `.eslintrc.js`: Mục đích là chứa cấu hình ESLint check các error warning code và role code chỉnh các format theo quy tắc chung...
6 `.eslintignore`: Mục đích là ESLint bỏ qua những file không cần thiết
7 `.gitignore`: Mục đích là Git bỏ qua những file không cần thiết
8 `.prettierrc`: Mục đích cấu hình prettier.
9 `webpack.config.js`: Mục đích là cấu hình webpack cho dự án ReactJs Typescript. File cấu hình này áp dụng cho 2 môi trường là development và production luôn.
10 `react-app-env.d.ts`: để import ảnh không bị typescript bắt lỗi. Nếu sau này có thêm những định dạng video, ảnh khác thì khai báo thêm vào trong file nà0
11 `package-lock.json`: file lock ra các lỗi or thông tin của npm package
12 `package.json`: chứa các thư viện đã cày, tạo lệnh start/build/test...
13 `postcss.config.cjs`:
14 `tailwind.config.cjs`: cấu hình css trong tailwind
15 `tsconfig.ts`: cấu hình rule build Import/Export ts trong file này
16 `tsconfig.node.json`:
17 `vercel.json`: giúp vercel hiểu path trong dự án khi deploy product Ex: a/a-1-2
18 `vite.config.ts`: cấu hình vite trong file này
19 `vitest.setup.js`: cấu hình rule test
20 `README.md`:
21 `yarn.lock`: file lock ra các lỗi or thông tin của yarn package

**Chạy câu lệnh dưới đây**
```bash
yarn add eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-prettier prettier-plugin-tailwindcss eslint-plugin-react-hooks -D
```

**Dưới đây là những depedency mà chúng ta cần cài**
1. clean-webpack-plugin: Dọn dẹp thư mục build
2. compression-webpack-plugin: Nén gzip, brotli file build
3. copy-webpack-plugin: Copy các file trong thư mục public vào thư mục dist
4. css-loader: import css trong dự án
5. css-minimizer-webpack-plugin: minify css
6. dotenv-webpack: Giúp dùng được các biến môi trường trong file .env
7. file-loader: import ảnh, font trong dự án
8. html-webpack-plugin: Tự động thêm script và style tag vào file html
9. mini-css-extract-plugin: Tách css ra thành file riêng khi build thay vì đưa vào file js
10. sass: Giúp dùng sass cho dự án
11. sass-loader: Cũng giúp dùng Sass cho dự án, phải cài cả 2 sass sass-loader
12. serve: Giúp preview file build
13. webpack-bundle-analyzer: Phân tích kích thước file build

**Có 3 môi trường khi làm việc**
> 1. Môi trường VS Code, khi chúng ta đưa chuột vào click thì chạy đến đúng file
> 2. Môi trường ES Lint
> 3. Môi trường Terminal\*
