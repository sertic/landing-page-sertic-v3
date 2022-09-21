import './App.css';
import { I18nContext } from './context/I18nContext';
import { SerticPageApp } from './SerticPageApp';


function App() {
  return (
    <I18nContext>
      <SerticPageApp />
    </I18nContext>
  )
}

export default App;
