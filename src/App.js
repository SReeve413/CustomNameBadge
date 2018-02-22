import React, {Component} from 'react'
import './App.css'
import NameBadge from './NameBadge'
import Thinking from './Thinking'


class App extends Component {

    state = {
        name: '',
        color: 'Shane',
        name2: '',
        color2: ''
    };

    changeName(){
        this.setState({ name2: this.state.name, color2: this.state.color })

       // setTimeout((  ) => { console.log(this.state) }, 500  )
       //  console.log(this.state)
    }

    render() {

        // console.log(this.state.name)

        return (
            <div className="App">
                <br/>
                <br/>
                What is you name:
                <input type="text" placeholder="Your Name" value={this.state.name} onChange={ (e) => { this.setState({ name: e.target.value }) } }/>
                <br/>
                Pick a color:
                <input type='color' value={this.state.color} onChange={ (e) => { this.setState({ color: e.target.value }) } }/>
                <br/>
                <br/>
                <input type='submit' onClick={ this.changeName.bind(this) } />

                <NameBadge name={this.state.name2} color={this.state.color2}/>
            </div>
        )
    }
}

export default App
