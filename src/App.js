import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faBell, faUser } from '@fortawesome/free-regular-svg-icons'
import ellie from './ellie.png';
import './App.css';
import portfolio1 from'./portfolio1.png';
import portfolio2 from'./portfolio2.png';
import graduation from './graduation.svg';





function App() {
    
  
      return (
        <div >
            <div style={{backgroundColor:'#f8f8f8',}}>
                {/* 不同於背景色, 整頁A4履歷頁 */}
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', }} >                   
                    {/* 藍綠色的個人資料區 */}
                    <div className='containerBlue'>
                        {/* 頭像+個人聯絡資料區(email+phone) */}
                        <div style={{minWidth:'340px' }}>
                            <div style={{width:'119px', height:'119px', borderRadius:'50%', overflow:'hidden',position: 'relative'}}>
                                <img src ={ellie} alt= "ellie" style={{
                                                                width:'100%',
                                                                height:'100%',
                                                                objectFit: 'contain',                                                                
                                                                position:'absolute',
                                                                transform: 'scale(1.4)',                                                
                                                                top: '20px',
                                                                }}></img>
                            </div>
                            <h1>
                                Ellie Lai
                            </h1>
                            <h4>
                                Front end engineer
                            </h4>
                            <p>
                                Taipei City, Taiwan
                            </p>
                            <p>
                                camera20120109@gmail.com
                            </p>
                            
                        </div>
                        {/* 自我介紹區 */}
                        <div style={{}}>
                            <div style={{lineHeight:'30px', fontWeight:550}}>
                                <p>
                                    Last year determined to change roles, and I look forward to see other scenery which is unpredictable via another path. It's a challenge no matter what will happened I just go forward it to enjoy my life. 
                                </p>
                                <p>
                                    As an ENFP, I am passionate about front-end development, endowed with rich interpersonal communication skills and innovative thinking. I am deeply committed to leveraging technology to bring creative ideas to life, focusing on crafting engaging user experiences in my front-end endeavors. My enthusiasm is not just reflected in my code, but also in every collaborative effort and problem-solving opportunity I encounter.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    {/* Skill+Language區 */}
                    <div className='containerL'>
                        {/* skill */}
                        <div >
                            <h2>
                                <span style ={{backgroundColor:'#EBECCB'}}>Skill
                                </span>
                            </h2>
                            <hr style={{borderColor:'#333333'}}/>
                            <ul style={{lineHeight:2, }}>
                                <li>
                                    程式語言: <span className='liItems'>JavaScript</span>
                                          <span className='liItems'>CSS</span>
                                          <span className='liItems'>HTML</span>
                                </li>
                                <li>
                                    框架工具: <span className='liItems'>Node.js</span>
                                          <span className='liItems'>Next.js</span>
                                          <span className='liItems'>react.js</span>
                                </li>
                                <li>
                                    Devops: <span className='liItems'>github</span>
                                          <span className='liItems'>Vercel</span>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Language */}
                        <div style={{width:'40%'}}>
                            <h2>
                                <span style ={{backgroundColor:'#EBECCB'}}>Language</span>
                            </h2>                        
                            <hr style={{minWidth:'320px', borderColor:'#333333'}}/>
                            <ul>
                                <li>
                                    Chinese
                                </li>
                                <li>
                                    English
                                </li>
                            </ul>
                        </div>

                    </div>
                    {/* Education */}
                    <div className='containerEdu' >
                        <div>
                            <h2>
                                <span style ={{backgroundColor:'#EBECCB'}}>Education
                                </span>
                            </h2>
                            <div style={{display:'flex',  }}>
                                <img src={graduation} alt='graduation' style={{marginRight:'10px'}}></img>
                                <h3 style={{fontSize:'20px', color:'#55553F'}}>
                                    Bachelor, Shih Hsin University
                                </h3>
                            </div>
                            <hr style={{borderTop:'2px solid #eee', width:'100%'}}/>
                            <p style={{fontWeight:'bold', fontSize:'20px', color:'rgb(154, 176, 167)', fontWeight:700}}>
                                Tourism
                            </p>
                        </div>
                    </div>
                    {/* Experience */}
                    <div  className='containerExpHeader'>
                        <h2>
                            <span style ={{backgroundColor:'#EBECCB'}}>Experiences
                            </span>
                        </h2>
                    
                        {/* 第一份公司職位年資 */}
                        <div className='containerExp'>
                            <div style={{minWidth:'390px', }} >
                                <p>
                                    Feb. 2023 - Sep. 2023
                                </p>
                                <h3>
                                    Consignment Associate
                                </h3>
                                <h4>
                                    Alcon Services AG, Taiwan Branch  
                                </h4>                      
                            </div>
                            {/* 工作內容 */}
                            <div style={{width:'100%'}}>
                                <ul style={{flexWrap:'wrap',fontStyle:'normal', color:'rgb(85, 85, 85)', fontWeight:400, lineHeight:1.5, fontSize:'16.7px',color:'#555555',  fontFamily:'Roboto,Noto Sans TC,Noto Sans SC,Noto Sans KR,Noto Sans JP,Noto Sans,PingFang TC,Microsoft JhengHei,PMingLiU,sans-serif'}}>
                                    <li>
                                        Management and analysis consignment inventory
                                    </li>
                                    <li>
                                        Consignment contracts management
                                    </li>
                                    <li>
                                        Data analysis (eg. consignment product in low sale)                            
                                    </li>
                                    <li>
                                        SAP write off and record
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr style={{borderColor:'#eee', borderTop:'1px solid #eee'}}/>
                        {/* 第二份工作經驗 */}
                        <div className='containerExp'>
                            <div style={{minWidth:'390px', }}>
                                <p>
                                    Sep. 2020 - Dec 2022
                                </p>
                                <h3>
                                    Admin Associate
                                </h3>
                                <h4>
                                    MSD Taiwan Branch   
                                </h4>                      
                            </div>
                            {/* 工作內容 */}
                            <div style={{width:'100%'}}>
                                <ul style={{flexWrap:'wrap',fontWeight:540, lineHeight:1.5, fontSize:'16.7px',color:'#555555',  fontFamily:'Roboto,Noto Sans TC,Noto Sans SC,Noto Sans KR,Noto Sans JP,Noto Sans,PingFang TC,Microsoft JhengHei,PMingLiU,sans-serif'}}>
                                    <li>
                                        Associate internal department meeting arrange
                                    </li>
                                    <li>
                                        Assist domestic marketing event or oversea medical conference attendance
                                    </li>
                                    <li>
                                        Co work with admin team to improve our process and set up standard SOP                            
                                    </li>
                                    <li>
                                        Communicate with dealer every simple business relate(eg. price/return goods/deliver standards)
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr style={{borderBottom:'2px solid #eee', borderTop:'2px solid #eee', borderColor:'#eee', borderStyle:'double', height:'5px', borderTopWidth:'3px', }}/> 
                        {/* <hr style={{borderColor:'#dfe9e4'}}/>                    */}
                    </div>
                    {/* Portfolio */}
                    <div className='containerExpHeader'>
                        <h2>
                            <span style ={{fontWeight:'bold', 
                                            color:'#647b71',
                                            fontFamily:'Roboto, Noto Sans TC, Noto Sans SC, Noto Sans HK, Noto Sans JP, Noto Sans, PingFang TC, Microsoft JhengHei, PMingLiU, sans-serif'}}>
                                            Portfolio
                              </span>
                        </h2>
                        
                        <hr style={{borderColor:'#eee',borderTop:'1px solid #eee',  }}/>
                        
                    </div>
                        {/* 第一個作品集 */}  
                        <div className='containerProf'>                      
                            <div style={{maxWidth:'340px', }}>                               
                                <img src={portfolio1} alt='portfolio1' style={{width:'310px', height:'auto'}}>                         
                                </img> 
                                <h3>
                                    MBTI Match Web
                                </h3>                       
                                <p >
                                    Input your MBTI and others to know how match you are in friend, family and lover.
                                </p>
                            </div>
                            {/* 第二個作品集 */}
                            <div style={{maxWidth:'340px', }} >                               
                                <img src={portfolio2} alt='portfolio2' style={{width:'310px',  height:'auto'}}>                         
                                </img>
                                <h3>
                                    Debate chat room (on building)
                                </h3>
                                <p>
                                    Provide a chat room to discuss any topics.
                                </p>
                            </div>
                        </div>
                    
                </div>
            </div>           
        </div>
    ) 
}

export default App;
