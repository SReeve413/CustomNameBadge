import React, {Component} from 'react'
import './myNameIs.css'

class NameBadge extends Component {

    render() {

        let bgcolor =  {  backgroundColor: this.props.color }

        return (
            <div id='page'>
                <div className = 'name-tag' style={bgcolor}>
                    <h1>Hello!</h1>
                    <h2>My Name is...</h2>
                    <div className = 'name-place' >

                    <h3>{this.props.name}</h3>
                    </div>
                </div>
            </div>


        )
    }
}

export default NameBadge
