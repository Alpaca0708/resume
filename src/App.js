import logo from './logo.svg';
import './App.css';
import userIcon from './user.svg';
import warningIcon from './warning.svg';
import commentIcon from './comment.svg';
import printIcon from './print.svg';
import ellie from './ellie.jpg';


function App() {
  return (
    <div style = {{display:'flex',
                   flexDirection:'column',
                   justifyContent:'center',alignItems:'center'}}>
      <div style= {{width:'992px',
                    height:'28px',
                    display:'flex',
                    justifyContent:'flex-end',
                    // marginBottom: '16px'
                    }}>
                      <button className='iconButton'><img src= {userIcon} alt="user" /></button>
                      <button className='iconButton'><img src= {commentIcon} alt="user" /></button>
                      <button className='iconButton'><img src= {printIcon} alt="user" /></button>
                      <button className='iconButton'><img src= {warningIcon} alt="user" /></button>                                                                    
      </div>
      

      <div style={{
        backgroundColor:'#378AAD',
        width:'992px',
        height:'647px',
        padding:'50px,10px,25px,10px'       
      }}>
          <div style={{
            width:'119px',
            height:'119px',
            borderRadius:'50%',
            overflow:'hidden',
            margin:'50px'
          }}>
            <img src ={ellie} alt= "ellie" style={{width:'100%',
                                      height:'100%'}}></img>
          </div>
        </div>


      
    </div>
  );
}

export default App;
