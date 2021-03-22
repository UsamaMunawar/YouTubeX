import MainContainer from './container/MainContainer';
import store from './Store/store';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <MainContainer></MainContainer>
    </Provider>
  );
}

export default App;
