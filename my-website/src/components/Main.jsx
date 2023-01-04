import {React,Component, Fragment} from 'react';



import Navbar from './navbar/Navbar';


const PageContent = props =>{
    return(
        props.content
    )
}


export default class Main extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <PageContent content={this.props.content}/>
            </Fragment>
        )
    }
}