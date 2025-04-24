import { Toaster } from 'react-hot-toast';
import RouterConfig from '../Configs/Router/RouterConfig';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div dir="rtl" >
            <BrowserRouter>
            <Toaster position='top-center' reverseOrder={false} toastOptions={{ duration: 2000 }} />
            
            <RouterConfig />
            </BrowserRouter>
            
        </div>
    )
    
}export default App;