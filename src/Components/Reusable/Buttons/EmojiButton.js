import React, {Component} from 'react';
import './emoji-button.css'

import {Button, Row, Column} from 'reactstrap'
import ShareEmoji from '../Emoji-Icons/Salon-Ownership/ShareEmoji.jsx'
import OwnEmoji from '../Emoji-Icons/Salon-Ownership/OwnEmoji.jsx'


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
                    <div className='emoji-image-container pt-3'><ShareEmoji /><OwnEmoji /> </div>
                    <div className='emoji-button-text pt-4'>{this.props.ButtonText}</div>
                </Button>
            </div>
        )
    }
}

export default EmojiButton
