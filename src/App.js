
import './App.css';
import FullName from "./Components/Profile/FullName";
import Bio from "./Components/Profile/Bio";
import Profession from './Components/Profile/Profession';
import Photoprofile from "./Components/Profile/Photoprofile";
import Message from "./Components/Profile/Message";

function App() {
  const alertMyInput = name => alert (name) ;

  return (
    <div  id ="card" style={{ textAlign: 'center' , backgroundColor: ' #f6d365', borderRadius: '.5rem'}}  > 
    <div >
    <h3 style={{fontFamily: 'Times New Roman'}}> Hello it's me ! </h3>
<Photoprofile/>
   <FullName  name="Raboudi Farah" /> 
   
   
   <Profession job="Fullstck developper"/>
 <Bio bio="I am an organized person and
 creative doubtful of
 proven skills in  web developpmentand
  willing to know more. I am versatile
 motivating, dynamic and
 responsible" />
 <Message alertMyInput ={alertMyInput}/>
 </div>
                

    </div>
  );
}

export default App;
