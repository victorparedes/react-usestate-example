import ReactDOM from 'react-dom/client'
import Casa from './Casa.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import {ambientesDeCasa} from './dataMock'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Casa ambientes={ambientesDeCasa}/>
)
