import React, { Component } from 'react'
import {Consumer} from '../../context'
import uuid from 'uuid'

export default class Addcontact extends Component {

    state = {
        nom:'',
        email : '',
        tel : ''
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value})

    onSubmit = (dispatch,e) => { 
        e.preventDefault()
       
        const newContact = {
            id: uuid(),
            nom: this.state.nom,
            email: this.state.email,
            tel: this.state.tel
        }

        dispatch({type: 'ADD_CONTACT', payload: newContact})

        this.setState({
            nom : '',
            email : '',
            tel : ''
        })

        this.props.history.push('/')
    }

    render() {

        return ( 
            <Consumer>
                {value => {
                    return(
                         <div className='card mb-3'>
                <div className='card-header'>Ajouter un contact</div>
                <div className='card-body'>
                    <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                        <div className='form-group'>
                            <label htmlFor='nom'></label>
                            <input type="text" 
                            className='form-control form-control-lg' 
                            placeholder='entrez un nom ..'
                             name="nom" value={this.state.nom} 
                             onChange={this.onChange}>
                             </input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'></label>
                            <input type="text" 
                            className='form-control form-control-lg' 
                            placeholder='entrez un email ..'
                             name="email" value={this.state.email} 
                             onChange={this.onChange}>
                             </input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='tel'></label>
                            <input type="text" 
                            className='form-control form-control-lg' 
                            placeholder='entrez un num ..'
                             name="tel" value={this.state.tel} 
                             onChange={this.onChange}>
                             </input>
                        </div>
                        <input 
                        type="submit"
                        value="ajouter mon contact"
                         className='btn btn-block btn-primary'>
                         </input>
                    </form>
                    </div>
                    </div>

                    )
                }}
            </Consumer>
        )
                }
            }
