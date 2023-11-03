import './App.css'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

// import store from './store'
// import { toast, ToastContainer } from 'react-toastify'

function App() {
  return (
    // <Provider>
    <RouterProvider router={router} />
    // </Provider>
  )
}
export default App
