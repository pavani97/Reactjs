//forms in react
import React ,{Component} from 'react';
class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            data: 'enter name .....'
        }
        this.updateState =this.updateState.bind(this);
    };
    updateState(e){
        this.setState({data: e.target.value});
    }
    render(){
        return(
            <div className ="App">
                <input type="text" value={this.state.data} onChange={this.updateState}/>
                <h2>{this.state.data}</h2>
                </div>
        );
    }
}
export default Form;