import React,{Component} from 'react';
import Hero from './core/Hero';
import Content from './core/Content';

const BlankSection = props => {
    
    return(
        <section style={
            {
                height: "5vh",
                
                backgroundColor:props.color,
            }
        }>
        </section>
    );
  }

BlankSection.defaultProps = {
    color: "#DF7861"
}


export default class Home extends Component {
    
    render() {
        return (
            <div>
                <Hero/>
                <BlankSection />
                <Content/>
                <BlankSection color="#FCF8E8" />
                
    
            </div>
        )
    }
}