import React from 'react'
import FormComponent from './FormComponent'

class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName : '',
            lastName : '',
            age : 0,
            gender : '',
            favoriteFood : '',
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        type === 'checkbox' ? this.setState({[name] : checked}) : 
        this.setState({[name] : value})
    }

    render(){
        return(
            <div>
                <FormComponent handleChange={this.handleChange} data={this.state}/>
            </div>
        )
    }
}

export default Form
