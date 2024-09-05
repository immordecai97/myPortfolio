import { createRoot } from 'react-dom/client'
import App from '@Pages/App'
import '@Styles/index.css'
import { ModalProvider } from '@Context/ModalContext'

createRoot(document.getElementById('root')).render(
        <ModalProvider>
                <App />
        </ModalProvider>
)
