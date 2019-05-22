import React, {Component, Fragment } from 'react'

class TodoList extends Component{
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
  }
  render() {
    return (
      <Fragment>
        <p>todolist</p>
        <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
        <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index} onClick={this.handleDelete.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    )
  }
  handleInputChange(e) {
    console.log(e)
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleDelete(index) {
    console.log(index)
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}
export default TodoList