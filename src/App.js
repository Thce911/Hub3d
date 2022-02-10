import './css/App.css';
import {useFirebaseApp} from 'reactfire'
import { Text} from 'atomize';





function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);
  return (
    
      <Text textSize="display1">
          This app View
      </Text>
  );
}

export default App;
