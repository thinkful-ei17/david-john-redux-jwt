import React from 'react';
import {DIALOG_BOX, LOGOUT_TIMER, dialogBox} from '../actions/auth';


export class Activity extends React.Component {
    // onClick() {
        
    //     this.props.dispatch(dialogBox());

    // }
    // timeoutClock(){
    //     const mins = 9 * 60 * 1000;
    // }
    render() {
        return (
            <div className='dialog'>
                <div onClick={() => this.'whatever'}>
                    {alert('You will be logged out in a minute unless you click this message')}
                </div>
            </div>
        )
    }
}