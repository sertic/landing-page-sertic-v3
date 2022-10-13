import './App.css';
import { I18nContext } from './context/I18nContext';
import { AppRouter } from './routes/AppRouter';


function App() {
  return (
    <I18nContext>
      <AppRouter />
    </I18nContext>
  )
}

export default App;
