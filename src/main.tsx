import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import  DataList from './components/dataList'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    {/* <App /> */}
    <DataList />
  </StrictMode>,
  </Provider>

)
