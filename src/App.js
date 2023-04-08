import './App.css';
import {Provider} from "react-redux";
import {store} from "./store";
import Feed from "./components/Feed";


function App() {
  return (
      <Provider store={store}>
        <Feed />
      </Provider>
  );
}

export default App;
