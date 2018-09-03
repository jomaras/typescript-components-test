import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface IProps {

}

export interface IState {
    input?: string;
    isValid?: boolean;
}

export class EmailValidator extends React.Component <IProps, IState> {
    constructor(props: IProps){
        super(props);

        this.handleValidate = this.handleValidate.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            input: "",
            isValid: false
        };
    }

    public render(){
        return <div className="email-validator-root">
                <input type="text" value={this.state.input} onChange={this.handleInputChange}></input>
                <button disabled={!this.state.isValid} onClick={this.handleValidate}>send</button>
               </div>
    }

    private handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
        this.setState({
            input: e.target.value,
            isValid: this.validateEmail(e.target.value)
        });
    }

    private handleValidate(){
        this.validateEmail(this.state.input) ? alert("Valid") : alert("Invalid");
    }

    private validateEmail(email): boolean {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email || "").toLowerCase());
    }
}

export const EmailValidatorRenderer = {
    render(element: Element){
        if(!element) { return; }

        ReactDOM.render(<EmailValidator/>, element);
    }
};