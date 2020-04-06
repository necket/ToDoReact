import React from 'react';

class Input extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
          input : ''
        }
    }

    changeVal = e => {
        let input = e.target.value;
        this.setState({
            input: input
        })
    }

    enterHandle = e => {
        if(e.keyCode === 13) this.addTask()
    }

    addTask = () =>{
        if(this.state.input !== '' ) {
            this.props.addTask(this.state.input)
            this.setState({
                input: ''
            })
        }
    }

    render() {
        return (
            <div className="todo_footer">
                <input type="text" placeholder="new task"
                 value={this.state.input}
                 onChange={e => this.changeVal(e)}
                 onKeyDown={(e) => this.enterHandle(e)}
                 />
                <button onClick={() => this.addTask()}>ADD</button>
            </div>
        )
    }
}

export default Input;