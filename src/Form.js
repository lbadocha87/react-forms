import React, {Component} from 'react';


class Form extends Component {

    constructor() {
        super();
        this.state = {
            headingText: 'Nagłówek przed nadpisaniem',
            inputValue: ''
        }

    }


    setTextFromForm = (event) => {
        event.preventDefault();
        // console.log(this.textInput.value)

        // this.setState({headingText: this.textInput.value})

        this.setState({headingText: this.state.inputValue});
    }

    inputChangeHeandler = (event) => {
        console.log(event.target.value);
        this.setState({inputValue: event.target.value})
    }


    render() {
        return(

            <div>
                <h1>{this.state.headingText}</h1>
            
                <form onSubmit={this.setTextFromForm}>
                    {/* <input type="text" ref={textInput=> this.textInput = textInput} /> */}
                    <input type="text" onChange={this.inputChangeHeandler}/>
                    <button>Wpisz tekst w h1</button>
                </form>
            </div>
        );
    }
}

export default Form;