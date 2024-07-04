import logo from './logo.svg';
import './App.css';
import Add_Sub from './components/Add_Sub';
import View_Sub from './components/View_Sub';
import Search_Sub from './components/Search_Sub';
import Delete_Sub from './components/Delete_Sub';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Add_Sub/>}/>
      <Route path="/viewsub" element={<View_Sub/>}/>
      <Route path="/searchsub" element={<Search_Sub/>}/>
      <Route path="/deletesub" element={<Delete_Sub/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
