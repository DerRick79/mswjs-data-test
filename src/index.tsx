import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { seedDb } from './service';


async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
 
  const { worker } = await import('./service')
  seedDb();

  return worker.start()
}

enableMocking().then(() => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
      <App />
  );
})
