import logo from './logo.svg';
import './App.css';
import userIcon from './user.svg';
import warningIcon from './warning.svg';
import commentIcon from './comment.svg';
import printIcon from './print.svg';
import ellie from './ellie.png';
import mail from './mail.svg';
import location from './location.svg';
import graduation from './graduation.svg';
import useRWD from './handleRWD';
import portfolio1 from'./portfolio1.png';
import portfolio2 from'./portfolio2.png';
import reactIcon from'./react.svg';
import jsIcon from'./js.svg';
import css from'./css3.svg';
import HTML from'./html5.svg';
import node from'./node.svg';
import figma from'./figma.svg';
import firebase from './firebase.svg';
import nextJS from './next.svg'


function App() {
  const device=useRWD();

  if(device=='PC'||device=='tablet'){
      return (
        <div style= {{
          display:'flex',
          justifyContent:'center',
          backgroundColor:'#f8f8f8'
        }}>
                     
                <div style = {{display:'flex',
                              flexDirection:'column',
                              justifyContent:'center',
                              alignItems:'center',
                              width:device=='PC'?'1000px':'600px',
                              backgroundColor:'white'
                              //  padding:'5%'
                            }}>
                      {/* top icon */}
                      <div style= {{width:'100%',
                                    height:'28px',
                                    display:'flex',
                                    justifyContent:'flex-end',
                                    // marginBottom: '16px',
                                    padding:'22px 0px 15px 0px',
                                    // marginTop:'20px'
                                    backgroundColor:'#f8f8f8'
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
                    width:'100%',               
                    // justifyContent:'center',
                    height:'auto',
                    // flexWrap:'wrap'   
                    flexDirection:'row'
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
                            <div style={{
                              // padding:'60px',
                              padding:'tablet'?'60px 60px 60px 0px':'60px 60px',

                                        color:'#fff',
                                        fontFamily:'sans-serif',
                                        fontSize:'16px',
                                        lineHeight:1.5,
                                        justifyContent:'space-between'}}>
                              <div>
                                <span>Last year determined to change roles, and I look forward to see other scenery which is unpredictable via another path. It's a challenge no matter what will happened I just go forward it to enjoy my life. </span>
                              </div>
                              <div style={{
                                marginTop:'20px'
                              }}>
                                <span>As an ENFP, I am passionate about front-end development, endowed with rich interpersonal communication skills and innovative thinking. I am deeply committed to leveraging technology to bring creative ideas to life, focusing on crafting engaging user experiences in my front-end endeavors. My enthusiasm is not just reflected in my code, but also in every collaborative effort and problem-solving opportunity I encounter.</span>
                              </div>
                            </div>
                    </div>
                  <div style={{
                    display:'flex',
                    justifyContent:'flex-start',
                    width:'100%'
                  }}>
                        <div style={{
                          width:'100%',
                          padding:'0 60px ',
                          fontWeight: 700
                        }} >
                          <h2 style={{ 
                            // borderBottom: '1px solid black',
                            // backgroundColor:'#EBECCB',
                            
                            }}>
                    
                            <span style ={{backgroundColor:'#EBECCB'}}>Skill</span></h2>
                            <div style={{border:'1px solid gray'}}></div>

                            <ul style={{lineHeight:2}}> 
                                <li >程式語言:<span className='liItems'>JavaScript</span>
                                             <span className='liItems'>CSS</span>
                                             <span className='liItems'>HTML</span></li>
                                <li >框架工具:<span className='liItems'>Node.js</span>
                                             <span className='liItems'>Next.js</span>
                                             <span className='liItems'>react.js</span></li>
                                <li >Devops:<span className='liItems'>github</span>
                                             <span className='liItems'>Vercel</span></li>
                                
                            </ul>
                        </div>
                        <div style={{
                          width:'100%',
                          padding:'0 60px'
                        }} >
                          <h2 style={{ 
                            // borderBottom: '1px solid black',
                            
                            }}><span style ={{backgroundColor:'#EBECCB'}}>Language</span></h2>
                            <div style={{border:'1px solid gray'}}></div>

                            <ul style={{lineHeight:'auto',fontWeight:'bold'}}>
                                <li >Chinese</li>
                                <li >English</li>
                           </ul>
    
                        </div>
                  </div>
    
                  <div style={{
                    display:'flex',
                    justifyContent:'flex-start',
                    width:'100%'
                  }}>
                    <div style={{
                          width:'40%',
                          padding:'0 60px',
                          
                        }} >
                          <h2 ><span style ={{backgroundColor:'#EBECCB'}}>Education</span></h2>
                          <p style={{fontWeight:'bold', fontSize:'20px'}}><img src={graduation} alt='graduation'></img>Bachelor, Shih Hsin University</p>
                          <div style = {{borderBottom: '1px solid #dfe9e4'}}></div>

                          <p style={{color:'rgb(154, 176, 167)', fontWeight:700, fontSize:'18px',marginLeft:'40px' }}>Tourism</p>
    
                    </div>
    
                  </div>
    {/* experiences */}
                  <div style={{
                    display:'flex',
                    justifyContent:'flex-start',
                    width:'100%'
                  }}>
                      <div style={{
                            width:'40%',
                            padding:'0 60px'                         
                          }} >
                          <h2>
                            <span style ={{backgroundColor:'#EBECCB'}}>Experiences</span>
                          </h2>         
                      </div>    
                  </div>                                


                  <div style={{
                    display:'flex',
                    // justifyContent:'center',
                    alignItems:'center',
                    width:'100%',
                    flexDirection:'column',
                    padding:'0 100px'                   
                  }}>
                    <div style={{display:'flex',width:'90%',justifyContent:'space-around'}} > 
                      <div style={{width:'40%',fontWeight:700, }}>
                        {/* <h2>experiences</h2> */}
                        <p style={{color:'#888'}}>Feb. 2023 - Sep. 2023</p>
                        <p style={{fontSize:'18px'}}>Consignment Associate</p>
                        <p style={{color:'#647b71'}}>Alcon Services AG, Taiwan Branch</p>                  

                      </div>
                      
                      <div style={{width:'60%'}}>
                        <ul>
                          <li>Management and analysis consignment inventory</li>
                          <li>Consignment contracts management</li>
                          <li>Data analysis (eg. consignment product in low sale)</li>
                        </ul>                       
                      </div>
                  </div>
                  <hr style={{
                    display:'flex',
                    borderBottom: '1px solid #dfe9e4', 
                    width:'80%',
                    flexDirection:'column',
                    alignItems:'center',
                    marginBottom:'30px',
                    marginTop:'30px'
                  }}></hr>
                    <div style={{display:'flex',width:'90%',justifyContent:'space-around', padding:'10px'}} > 
                        <div style={{width:'40%',fontWeight:700}} >
                          <p style={{color:'#888'}}>Sep. 2020 - Dec 2022</p>
                          <p style={{fontSize:'18px'}}>Admin Associate</p>
                          <p style={{color:'#647b71'}}>MSD Taiwan Branch</p>                  
  
                        </div>
                        
                        <div style={{width:'60%', }}>
                          <ul>
                            <li>Associate internal department meeting arrange</li>
                            <li>Assist domestic marketing event or oversea medical conference attendance</li>
                            <li>Co work with admin team to improve our process and set up standard SOP</li>
                            <li>Communicate with dealer every simple business relate(eg. price/return goods/deliver standards)</li>
                          </ul>                       
                        </div>
                    </div>
                  </div>

                  <hr style={{borderTop: '1px solid #dfe9e4', height:'3px',  width:'80%',margin:'50px 0'}}>                    
                  </hr>
{/* portfolio */}
                  <div style={{
                    display:'flex',
                    justifyContent:'flex-start',
                    width:'100%'
                  }}>
                        <div style={{
                              width:'100%',
                              padding:'0 50px',                             
                            }} >
                            <h2>
                              <span style ={{fontWeight:'bold', 
                                            color:'#647b71',
                                            fontFamily:'Roboto, Noto Sans TC, Noto Sans SC, Noto Sans HK, Noto Sans JP, Noto Sans, PingFang TC, Microsoft JhengHei, PMingLiU, sans-serif'}}>
                                            Portfolio
                              </span>
                            </h2> 
                            <hr style={{border: '1px solid #dfe9e4',  width:'90%'}} ></hr>          
                        </div>
    
                  </div>
                  <div style={{display:'flex',width:'100%',justifyContent:'space-around',padding:'3%' }} > 
                      <div style={{width:'40%', alignItems:'center', padding:'10px'}}>
                        <img src={portfolio1} alt='portfolio1' style={{width:'346px', height:'auto'}}>                         
                        </img>
                        <h3>MBTI Match Web</h3>
                        <p style={{paddingRight:'60px'}}>Input your MBTI and others to know how match you are in friend, family and lover.</p>
                        <div style={{display:'flex', justifyContent:'flex-start', alignItems:'flex-end'}}>
                          <img src={reactIcon} alt='react' style={{marginRight:'6px'}}></img>
                          <img src={nextJS} alt='next' style={{marginRight:'6px'}}></img>
                          <img src={jsIcon} alt='js' style={{marginRight:'6px'}}></img>
                          <img src={css} alt='css'style={{marginRight:'6px'}}></img>
                          <img src={HTML} alt='html' style={{marginRight:'6px'}}></img>
                          <img src={node} alt='node' style={{marginRight:'6px'}}></img>
                          <img src={figma} alt='figma' style={{marginRight:'6px'}}></img>

                          </div>                

                      </div>
                      
                      <div style={{width:'40%', alignItems:'center', padding:'10px'}}>
                          <img src={portfolio2} alt='portfolio2' style={{width:'346px', height:'auto'}}>                         
                          </img>
                          <h3>Debate chat room (on building)                         
                          </h3> 
                          <p>Provide a chat room to discuss any topics.
                          </p> 
                          <div style={{display:'flex', justifyContent:'flex-start', alignItems:'flex-end'}}>
                          <img src={reactIcon} alt='react' style={{marginRight:'6px'}}></img>
                          <img src={nextJS} alt='next' style={{marginRight:'6px'}}></img>
                          <img src={firebase} alt='firebase' style={{marginRight:'6px'}}></img>
                          <img src={jsIcon} alt='js' style={{marginRight:'6px'}}></img>
                          <img src={css} alt='css'style={{marginRight:'6px'}}></img>
                          <img src={HTML} alt='html' style={{marginRight:'6px'}}></img>
                          <img src={node} alt='node' style={{marginRight:'6px'}}></img>
                          
                          

                          </div>                

                      </div>
                  </div>





                </div>
        </div>
      );
  }else{
    return (
        <div style= {{
          display:'flex',
          justifyContent:'center',
          backgroundColor:'#f8f8f8'
        }}>
                     
                <div style = {{display:'flex',
                              flexDirection:'column',
                              justifyContent:'center',
                              alignItems:'center',
                              width:'90%',
                              backgroundColor:'white',
                              //  padding:'5%'
                              marginBottom:'50px'
                            }}>
                      {/* top icon */}
                      <div style= {{width:'100%',
                                    height:'28px',
                                    display:'flex',
                                    justifyContent:'flex-end',
                                    // marginBottom: '16px',
                                    padding:'22px 0px 15px 0px',
                                    // marginTop:'20px'
                                    backgroundColor:'#f8f8f8'
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
                    width:'100%',               
                    // justifyContent:'center',
                    height:'auto',
                    // flexWrap:'wrap'   
                    flexDirection:'column'
                  }}> 
                      {/* 個人資料 */}
                          <div style = {{
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'flex-start',
                            padding:'60px 60px 0px 60px'
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
                            <div style={{padding:'0px 60px 60px 60px',
                                        color:'#fff',
                                        fontFamily:'sans-serif',
                                        fontSize:'16px',
                                        lineHeight:1.5,
                                        justifyContent:'space-between'}}>
                              <div>
                                <span>Last year determined to change roles, and I look forward to see other scenery which is unpredictable via another path. It's a challenge no matter what will happened I just go forward it to enjoy my life. </span>
                              </div>
                              <div style={{
                                marginTop:'20px'
                              }}>
                                <span>As an ENFP, I am passionate about front-end development, endowed with rich interpersonal communication skills and innovative thinking. I am deeply committed to leveraging technology to bring creative ideas to life, focusing on crafting engaging user experiences in my front-end endeavors. My enthusiasm is not just reflected in my code, but also in every collaborative effort and problem-solving opportunity I encounter.</span>
                              </div>
                            </div>
                    </div>
                  <div style={{
                    display:'flex',
                    justifyContent:'flex-start',
                    width:'100%',
                    flexDirection:'column'
                  }}>
                        <div style={{
                          width:'100%',
                          padding:'3%'
                        }} >
                          <h2 style={{ 
                            // borderBottom: '1px solid black',
                            // backgroundColor:'#EBECCB',
                            
                            }}>
                              <span style ={{backgroundColor:'#EBECCB'}}>Skill
                              </span>
                          </h2>
                          <div style={{border:'5px solid #dfe9e4'}}></div>
                          <ul style={{lineHeight:2}}> 
                              <li >程式語言:<span className='liItems'>JavaScript</span>
                                          <span className='liItems'>CSS</span>
                                          <span className='liItems'>HTML</span></li>
                              <li >框架工具:<span className='liItems'>Node.js</span>
                                          <span className='liItems'>Next.js</span>
                                          <span className='liItems'>react.js</span></li>
                              <li >Devops:<span className='liItems'>github</span>
                                          <span className='liItems'>Vercel</span></li>
                              
                          </ul>
                        </div>
                        <div style={{
                          width:'100%',
                          padding:'3%'
                        }} >
                          <h2 style={{ 
                            borderBottom: '1px solid black',
                            
                            }}><span style ={{backgroundColor:'#EBECCB'}}>Language</span></h2>
                            <ul style={{lineHeight:'auto',fontWeight:'bold'}}>
                                <li >Chinese</li>
                                <li >English</li>
                           </ul>
    
                        </div>
                  </div>
    
                  <div style={{
                    display:'flex',
                    justifyContent:'flex-start',
                    width:'100%'
                  }}>
                    <div style={{
                          width:'40%',
                          padding:'3%',
                          
                        }} >
                          <h2 ><span style ={{backgroundColor:'#EBECCB'}}>Education</span></h2>
                          <p style={{fontWeight:'bold', fontSize:'20px'}}><img src={graduation} alt='graduation'></img>Bachelor, Shih Hsin University</p>
                          <div style = {{borderBottom: '1px solid black'}}></div>
                          <p>Tourism</p>
    
                        </div>
    
                  </div>
    {/* experiences */}
                      {/* experiences */}
                      <div style={{
                    display:'flex',
                    justifyContent:'flex-start',
                    width:'100%'
                  }}>
                    <div style={{
                          width:'40%',
                          paddingRight:'3%',
                          paddingLeft:'3%'
                          
                        }} >
                      <h2>
                        <span style ={{backgroundColor:'#EBECCB'}}>Experiences</span>
                      </h2>         
                    </div>    
                  </div>


                  <div style={{
                    display:'flex',
                    // justifyContent:'center',
                    alignItems:'center',
                    width:'100%',
                    flexDirection:'column',
                    // marginBottom:'60px'
                    // padding:'10px 70px 10px 70px'
                  }}>
                    <div style={{display:'flex',width:'90%',justifyContent:'space-around'}} > 
                      <div style={{width:'40%',fontWeight:700}}>
                        {/* <h2>experiences</h2> */}
                        <p style={{color:'#888'}}>Feb. 2023 - Sep. 2023</p>
                        <p style={{fontSize:'18px'}}>Consignment Associate</p>
                        <p style={{color:'#647b71'}}>Alcon Services AG, Taiwan Branch</p>                  

                      </div>
                      
                      <div style={{width:'60%'}}>
                        <ul>
                          <li>Management and analysis consignment inventory</li>
                          <li>Consignment contracts management</li>
                          <li>Data analysis (eg. consignment product in low sale)</li>
                        </ul>                       
                      </div>
                  </div>
                  <div style={{
                    display:'flex',
                    borderBottom: '1px solid black', 
                    width:'100%',
                    flexDirection:'column',
                    alignItems:'center',
                    marginBottom:'30px'
                  }}></div>
                    <div style={{display:'flex',width:'90%',justifyContent:'space-around'}} > 
                        <div style={{width:'40%',fontWeight:700}} >
                          <p style={{color:'#888'}}>Sep. 2020 - Dec 2022</p>
                          <p style={{fontSize:'18px'}}>Admin Associate</p>
                          <p style={{color:'#647b71'}}>MSD Taiwan Branch</p>                  
  
                        </div>
                        
                        <div style={{width:'60%'}}>
                          <ul>
                            <li>Associate internal department meeting arrange</li>
                            <li>Assist domestic marketing event or oversea medical conference attendance</li>
                            <li>Co work with admin team to improve our process and set up standard SOP</li>
                            <li>Communicate with dealer every simple business relate(eg. price/return goods/deliver standards)</li>
                          </ul>                       
                        </div>
                    </div>
                  </div>

                  <div style={{borderBottom: '1px solid gray', borderStyle:'double', width:'100%',marginTop:'60px'}}></div>
{/* portfolio */}
                  <div style={{
                    display:'flex',
                    justifyContent:'flex-start',
                    width:'100%'
                  }}>
                        <div style={{
                              width:'40%',
                              padding:'3%',                             
                            }} >
                            <h2>
                              <span style ={{fontWeight:'bold', 
                                            color:'#647b71',
                                            fontFamily:'Roboto, Noto Sans TC, Noto Sans SC, Noto Sans HK, Noto Sans JP, Noto Sans, PingFang TC, Microsoft JhengHei, PMingLiU, sans-serif'}}>
                                            Portfolio
                              </span>
                            </h2>           
                        </div>
    
                  </div>
                  <div style={{display:'flex',width:'100%',justifyContent:'space-around',padding:'3%' }} > 
                      <div style={{width:'40%', alignItems:'center', padding:'10px'}}>
                        <img src={portfolio1} alt='portfolio1' style={{width:'346px', height:'auto'}}>                         
                        </img>
                        <h3>MBTI Match Web</h3>
                        <p style={{paddingRight:'60px'}}>Input your MBTI and others to know how match you are in friend, family and lover.</p>
                        <div style={{display:'flex', justifyContent:'flex-start', alignItems:'flex-end'}}>
                          <img src={reactIcon} alt='react' style={{marginRight:'5px'}}></img>
                          <img src={jsIcon} alt='js' style={{marginRight:'5px'}}></img>
                          <img src={css} alt='css'style={{marginRight:'5px'}}></img>
                          <img src={HTML} alt='html' style={{marginRight:'5px'}}></img>
                          <img src={node} alt='node' style={{marginRight:'5px'}}></img>
                          <img src={figma} alt='figma' style={{marginRight:'5px'}}></img>

                          </div>                

                      </div>
                      
                      <div style={{width:'40%', alignItems:'center', padding:'10px'}}>
                          <img src={portfolio2} alt='portfolio2' style={{width:'346px', height:'auto'}}>                         
                          </img>
                          <h3>Debate chat room (on building)                         
                          </h3> 
                          <p>Provide a chat room to discuss any topics.
                          </p> 
                          <div style={{display:'flex', justifyContent:'flex-start', alignItems:'flex-end'}}>
                          <img src={reactIcon} alt='react' style={{marginRight:'5px'}}></img>
                          <img src={jsIcon} alt='js' style={{marginRight:'5px'}}></img>
                          <img src={css} alt='css'style={{marginRight:'5px'}}></img>
                          <img src={HTML} alt='html' style={{marginRight:'5px'}}></img>
                          <img src={node} alt='node' style={{marginRight:'5px'}}></img>
                          <img src={figma} alt='figma' style={{marginRight:'5px'}}></img>

                          </div>                

                      </div>
                  </div>

    
    
                  
                </div>
        </div>
    )
  }
 
}

export default App;
