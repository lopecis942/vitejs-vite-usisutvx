import './style.css'
import { setupCounter } from './counter.js'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Counter App</h1>
    <setupCounter/>
  </StrictMode>
);