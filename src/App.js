import logo from './logo.svg';
import './App.css';
import userIcon from './user.svg';
import warningIcon from './warning.svg';
import commentIcon from './comment.svg';
import printIcon from './print.svg';
import ellie from './ellie.png';
import mail from './mail.svg';
import location from './location.svg';


function App() {
  return (
    <div style = {{display:'flex',
                   flexDirection:'column',
                   justifyContent:'center',alignItems:'center'}}>
          {/* top icon */}
          <div style= {{width:'992px',
                        height:'28px',
                        display:'flex',
                        justifyContent:'flex-end',
                        marginBottom: '16px',
                        marginTop:'20px'
                        }}>
                          <button className='iconButton'><img src= {userIcon} alt="user" /></button>
                          <button className='iconButton'><img src= {commentIcon} alt="user" /></button>
                          <button className='iconButton'><img src= {printIcon} alt="user" /></button>
                          <button className='iconButton'><img src= {warningIcon} alt="user" /></button>                                                                    
          </div>
      
      {/* 藍色區塊 */}
      <div style={{
        display:'flex',
        backgroundColor:'#378AAD',
        width:'992px',
        // height:'647px',
        padding:'50px,10px,30px,10px',
        justifyContent:'space-between'       
      }}> 
          {/* 個人資料 */}
              <div style = {{
                display:'flex',
                flexDirection:'column',
                justifyContent:'flex-start',
                padding:'60px'
              }}>
                        {/* Avatar */}
                        <div style={{
                          width:'119px',
                          height:'119px',
                          borderRadius:'50%',
                          overflow:'hidden',
                          // margin:'50px',
                          position: 'relative'
                        }}>
                          <img src ={ellie} alt= "ellie" style={{
                                                    width:'100%',
                                                    height:'100%',
                                                    objectFit: 'contain',
                                                    // objectFit: 'cover',
                                                    position:'absolute',
                                                    transform: 'scale(1.4)',                                                
                                                    top: '20px',
                                                    // left: '-1px'
                                                    }}></img>
                        </div>
                            <div style={{
                              // padding:'20px',
                                         }}>
                                <h1 style={{color:'#fff'}}>Ellie Lai</h1>
                                <h4 style={{color:'#dfe9e4',
                                           marginTop:'6px',
                                            fontWeight:'bold',
                                            fontSize:'18px',
                                            fontFamily:'Roboto, Noto Sans TC, Noto Sans SC, Noto Sans HK, Noto Sans JP, Noto Sans, PingFang TC, Microsoft JhengHei, PMingLiU, sans-serif',
                                            marginBottom: '10px'}}>
                                          Front end engineer</h4>
                                <p style= {{display:'flex',  
                                            alignItems: 'center', 
                                            color:'#fff',
                                            fontSize:'16.7px',
                                            marginTop: '5px',
                                            fontFamily:'Roboto, Noto Sans TC, Noto Sans SC, Noto Sans HK, Noto Sans JP, Noto Sans, PingFang TC, Microsoft JhengHei, PMingLiU, sans-serif'}}> <img style={{ verticalAlign: 'middle', margin:'3px'}} src={location} alt="location" />Taipei City, Taiwan</p>
                                <p style= {{display:'flex',  
                                            alignItems: 'center',
                                            fontFamily:'sans-serif',
                                            fontWeight:'bold',
                                            color:'#dfe9e4',
                                            textDecoration: 'underline',
                                            marginTop: '15px'
                                            }}> <img style={{ verticalAlign: 'middle', margin:'3px'}} src={mail} alt="mail" />camera20120109@gmail.com</p>
                            </div>
                </div>
                <div style={{padding:'50px',
                             color:'#fff',
                             fontFamily:'sans-serif',
                             fontSize:'16px',
                             lineHeight:1.5}}>
                  <p>Last year determined to change roles, and I look forward to see other scenery which is unpredictable via another path. It's a challenge no matter what will happened I just go forward it to enjoy my life. </p>
                  <p>As an ENFP, I am passionate about front-end development, endowed with rich interpersonal communication skills and innovative thinking. I am deeply committed to leveraging technology to bring creative ideas to life, focusing on crafting engaging user experiences in my front-end endeavors. My enthusiasm is not just reflected in my code, but also in every collaborative effort and problem-solving opportunity I encounter.</p>
                </div>
        </div>

    <div>
      <h1>Skill</h1>
    </div>


      
    </div>
  );
}

export default App;
