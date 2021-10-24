/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state,action) => {

    
    switch(action.type) {
        case 'DELETE_CONTACT' :
            return {
                contacts: state.contacts.filter(contact =>
                    contact.id !== action.payload)
            };
            case 'ADD_CONTACT' :
                return {
                    contacts: [action.payload, ...state.contacts]
                }
            default:
                return state;
    }
}

export class Provider extends Component {
    state = {
        contacts : [
            {
                id : 1,
                nom : 'Robert',
                email : 'robert@gmail.com',
                tel : "555-864-254"
            },
              {
                id : 2,
                nom : 'Dylan',
                email : 'steven@gmail.com',
                tel : "555-714-965"
            },
              {
                id : 3,
                nom : 'Vince',
                email : 'steven@gmail.com',
                tel : "555-147-203"
            }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
