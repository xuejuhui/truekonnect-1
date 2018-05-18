import React, {Component} from 'react';
import './emoji-button.css'

import {Button} from 'reactstrap'
import PhoneEmoji from '../Emoji-Icons/Communication/PhoneEmoji'

class EmojiButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false
        };
    };

    toggleButton() {
        const currentState = this.state.selected;
        this.setState({selected: !currentState});
        console.log('this is what the selected state is: ' + this.state.selected)
    };


    render() {
        return (
            <div>
                <Button block
                        outline
                        className={this.state.selected ? 'selected' : 'rounded-button active-button'}
                        onClick={this.toggleButton}>
                    <div className='emojiImageContainer'> </div>
                    <div>{this.props.ButtonText}</div>
                </Button>
            </div>
        )
    }
}

export default EmojiButton
