import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        username: '',
        comments:'',
        topic:'react'
      }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`Welcome ${this.state.username}! You just submitted your comment on ${this.state.topic} which was ${this.state.comments}`)
        event.preventDefault()
    }
    
  render() {

    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>UserName</label>
                <input type="text" 
                    value={this.state.username} 
                    onChange={this.handleUsernameChange}
                /><br/>
            </div>
            <div>
                <label>Comments</label>
                <textarea
                    value={this.state.comments}
                    onChange={this.handleCommentsChange}
                ></textarea><br/>
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handleTopicChange} >
                    <option value="react">React</option>
                    <option value="redux">Redux</option>
                    <option value="udacity">Udacity</option>
                </select>
            </div>
            <button>Submit</button>
        </form>
    )
  }
}
export default Form