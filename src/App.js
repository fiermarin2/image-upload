import { Home } from './components/home/home';
import { useState } from 'react';
import Loading from './components/loading/loading';
import Uploader from './components/uploader/uploader';

function App() {
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState("");

  return (
    <>
      { !link && !loading && 
      <Home setLink={setLink} setLoading={setLoading}/> }
      {loading && <Loading />}
      { link && !loading && <Uploader link={link}/>}
    </>
  );
}

export default App;
