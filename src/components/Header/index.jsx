import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
    
    handleKeyUp = (e) => {
        if(e.keyCode !== 13) return
        if(e.target.value.trim() === '') {
            alert('输入不能为空')
            return
        }
        const todoObj = {id: nanoid(),name: e.target.value,done: false}
        //id怎么表示？用nanoid（自己安装 npm add nanoid)然后引入import {nanoid} from 'nanoid'
        this.props.addTodo(todoObj)
        e.target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )}
    }