import {React, Component} from 'react';
import Card from '../card/Card'
import WORKS from '../../works'

class Content extends Component{

    
    render() {
        const gridLength = WORKS.length;
        return(
        <div className="section two">
            
            <div className="wave absolute -z-10">
                <img className="w-screen" src="images/wave.svg" alt="" />
            </div>
            <h1 className="text-white font-semibold text-center text-4xl">
                    My Works
                </h1>
            <div className="card-contents my-10 h-screen flex  items-center">
                
                <div className="container mx-auto flex justify-center">
                    {/* <p>{gridLength}</p>  */}
                    <div className={"gap-5 justify-items-center grid "+(gridLength <3? 'grid-cols-2':"grid-cols-3")}>

                        {
                            WORKS && WORKS.map((item)=>
                            <Card url={item.WorkLogo} outerLink={item.outerLink} bgColor={item.bgColor}/>
                            )
                        }

        

                    </div>
                
                </div>
                
            </div>

        </div>
    );

    };
    
}


export default Content;