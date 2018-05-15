import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionsHello from './../actions/HelloAction'

class Hello extends Component {

    constructor(props){
        super(props)
        
        console.log(props)
    }

    state = {
        newText : ''
    }

    handleClick = () => {
        this.props.clickHello(this.state.newText)
        console.log(this.props)
        this.setState({
            newText: ''
        })
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick}>
                    Click
                </button>

                <input 
                    type="text" 
                    value={this.state.newText}
                    onChange={(e) => this.setState({newText: e.target.value})} />

                {this.props.hello.map( todo => (
                    <p key={Math.random()}>{todo.msg}</p>
                ))}
                
            </div>
        )
    }
}


const mapStateToProps = state => ({
    hello: state.hello
}) 

const mapDispatchToProps = dispatch => 
bindActionCreators(actionsHello, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Hello)