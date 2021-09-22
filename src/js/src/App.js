import React, { useState, useEffect } from 'react';
import './App.css';
import Container from './Container';
import getAllStudents from './client';
import { Table, Avatar, Spin } from 'antd';

function App() {

  const [students, setStudents] = useState([]);
  const [fetching, setFetching] = useState(false);

  const columns = [
    {
      title: '',
      key: 'avatar',
      render: (text, student) => (
        <Avatar size='large'>
          {`${student.firstName.charAt(0).toUpperCase()}${student.lastName.charAt(0).toUpperCase()}`}
        </Avatar>
      )
    },
    {
      title: 'Student Id',
      dataIndex: 'studentId',
      key: 'studentId',
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
  ];

  const fetchStudents = () => {
    setFetching(true);
    getAllStudents()
    .then(res => res.json()
    .then(students => {
      console.log(students);
      setStudents(students);
      setFetching(false);
    }));
  }

  useEffect(() => {
    console.log("Component mounted");
    fetchStudents();
  }, []);

  if (fetching) {
    return (
      <Container>
        <Spin/>
      </Container>
    );
  }
  if(students && students.length) {

    return (
      <Container>
        <Table 
          columns={columns} 
          dataSource={students}
          pagination={false} 
          rowKey='studentId' />
      </Container>
    );
  }
    
  return <h1>No students found!!</h1>;


}

export default App;
