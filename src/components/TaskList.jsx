import { Component } from 'react'
import styled from 'styled-components'

const Box = styled.div`
  width: 400px;
  margin: 30px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #efefef;
  border-radius: 10px;
`

const Title = styled.h1`
  text-align: center;
  font-size: 26px;
`

const Input = styled.input`
  padding: 8px;
  width: 230px;
  border: 1px solid #cac8c8;
  border-radius: 5px;
`

const AddButton = styled.button`
  padding: 8px 12px;
  margin-left: 5px;
  color: white;
  background-color: #2ecc71;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const Task = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f7f7f7;
  margin-bottom: 10px;
`

const DeleteButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  color: white;
  background-color: #e74c3c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

export default class TaskList extends Component {
  tasks = [
    { id: 1, text: 'Погуляти' },
    { id: 2, text: 'Зробити дз' },
    { id: 3, text: 'Повторити JavaScript' }
  ]

  addTask = () => {
    const text = this.inputRef.value.trim()
    if (!text) return;
    const newId = this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1;
    this.tasks.push({ id: newId, text })
    this.inputRef.value = '';
    this.forceUpdate()
  }

  deleteTask = (id) => {
    this.tasks = this.tasks.filter(task => task.id !== id)
    this.forceUpdate()
  }

  render() {
    return (
      <Box>
        <Title>Список завдань</Title>
        <div>
          <Input type="text" placeholder="Введіть завдання" ref={(node) => (this.inputRef = node)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                this.addTask()
              }}}/>
          <AddButton onClick={this.addTask}>Додати</AddButton>
        </div>

        <ul>{this.tasks.map(task => (
            <Task key={task.id}>
              <span>{task.text}</span>
              <DeleteButton onClick={() => this.deleteTask(task.id)}>Видалити</DeleteButton>
            </Task>))}
        </ul>
      </Box>
    )
  }
}