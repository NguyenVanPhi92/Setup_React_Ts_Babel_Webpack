// images để import ảnh không bị typescript bắt lỗi.
// Nếu sau này có thêm những định dạng video, ảnh khác thì khai báo thêm vào trong file nà0
declare module '*.png' {
  const src: string
  export default src
}
declare module '*.jpg' {
  const src: string
  export default src
}
declare module '*.jpeg' {
  const src: string
  export default src
}
declare module '*.svg' {
  const src: string
  export default src
}
