import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
//省略：用prop-Types对props类型进行限制（自己安装）

export default class App extends Component {

    state = {todos: []}
    
    //为app添加、更新，要写在app中
    addTodo = (todoObj) => {
        const{todos}=this.state
        const newTodos = [todoObj,...todos]
        this.setState({todos:newTodos})
    }
    
    updateTodo = (id,done) => {
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id === id) return {...todoObj, done: done}
            else return todoObj
        })
        this.setState({todos:newTodos})
    }

    deleteTodo = (id) => {
        const {todos} = this.state
        //删除指定id的todo对象 filter数组过滤
        const newTodos = todos.filter((todoObj) => {
            // if((todoObj.id !== id)) return 
            return todoObj.id !== id
        })
        this.setState({todos:newTodos})
    }

    checkAllTodo = (done)=> {
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=> {
            return {...todoObj,done: done}
        })
        this.setState({todos:newTodos})
    }

    clearAllDone = () => {
        const {todos} = this.state
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done
        })
        this.setState({todos:newTodos})
    }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        )}
    }