import React, { Component } from 'react';
import { Text, DefaultButton } from '@fluentui/react';

class App extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            dice: [
                {
                    id: 0,
                    maxValue: 6,
                    currentValue: 6,
                },
                {
                    id: 1,
                    maxValue: 6,
                    currentValue: 6,
                },
            ]           
        }
        
    }
    
    render() {
        return(
            <>
                <Text variant={"xLarge"}>Dice Roller</Text>
                <Dice dice={this.state.dice}/>
            </>
        );
    }
}

function Dice(props) {

    function rollDice() {
        props.dice.map(die =>
                
        );
    }

    return(
        <div className="ms-Grid">
            {props.dice.map(die =>
                <Die key={die.id} die={die}/>
            )}
        </div>
    );
}

class Die extends Component {

    constructor (props) {
        super(props);

        this.state = {
            maxValue: this.props.die['maxValue'],
            currentValue: this.props.die['maxValue'],
        }
    }
    
    onClickHandler () {
        this.setState({
            currentValue: Math.trunc((Math.random() * 1000) % this.state.maxValue) + 1
        });
    }

    render() {
        return(
            <DefaultButton onClick={() => this.onClickHandler()}>{this.state.currentValue}</DefaultButton>
        );
    }
}

export default App;