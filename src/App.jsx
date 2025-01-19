import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import DisplayCounter from './components/DisplayCounter';
import Container from './components/Container';
import Controls from './components/Controls';
import { useSelector } from 'react-redux';
import PrivacyMessage from './components/PrivacyMessage';

function App() {

  const privayFlag = useSelector(store => store.privacy);

  return (
    <Container> 
      <div className="px-4 py-5 my-5 text-center">
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          {privayFlag === false ? <DisplayCounter /> : <PrivacyMessage />}
          <Controls />
        </div>
        </div>
    </Container>
  )
}

export default App
