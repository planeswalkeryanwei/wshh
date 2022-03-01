import { Input, Table, Space, Popconfirm } from 'antd'
import React from 'react'
import './App.css'

const { Search } = Input

class App extends React.Component {
  state = {
    list: [],
    columns: [
      {
        title: '任务编号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '任务名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '任务描述',
        dataIndex: 'des',
        key: 'des',
      },
      {
        title: '操作',
        dataIndex: 'do',
        key: 'do',
        render: (text, record) => (
          <Space size="middle">
            <Popconfirm title="确定要删除吗?"
              onConfirm={() => this.handleDelete(record.id)}>
              <a href="#">删除</a>
            </Popconfirm>
          </Space>
        ),
      },
    ]
  }

  // 搜索

  // 删除

  // 加载列表


  render () {
    return (
      <div className="container">
        <div className="search-box">
          <Search
            placeholder="请输入关键词"
            allowClear
            enterButton="搜索"
            size="large"
            onChange={this.inputChange}
            value={this.state.keyword}
            onSearch={this.onSearch}
          />
        </div>
        <Table bordered dataSource={this.state.list} columns={this.state.columns} pagination={false} />
      </div>
    )
  }
}

export default App
