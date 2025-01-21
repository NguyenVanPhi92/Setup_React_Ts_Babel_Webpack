import { FC } from 'react'
// import reactlogo from './assets/images/react.svg'
import './assets/styles/app.css'
import './assets/styles/app.scss'
import Home from './Home'

const App: FC = () => {
  return (
    <div>
      {/* <img src={reactlogo} alt='React Logo' width={100} height={100} /> */}
      <h1>{'Nguyễn Vạn Phi'}</h1>
      <h2>Bài viết được viết tại blog</h2>
      <Home />
    </div>
  )
}

export default App
