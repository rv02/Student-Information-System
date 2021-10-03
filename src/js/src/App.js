import React, { useState, useEffect } from 'react';
import './App.css';
import Container from './Container';
import Footer from './Footer';
import AddStudentForm from './forms/AddStudentForm';
import getAllStudents from './client';
import { Table, Avatar, Spin, Modal} from 'antd';

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

function App() {

  const [students, setStudents] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [isAddStudentModalVisible, setIsStudentModalVisible] = useState(false);

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

  const openAddStudentModal = () => {
    setIsStudentModalVisible(true)
  }

  const closeAddStudentModal = () => {
    setIsStudentModalVisible(false)
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
        <Modal
          title='Add new student'
          visible={isAddStudentModalVisible}
          onOk={closeAddStudentModal}
          onCancel={closeAddStudentModal}
          width={1000}>
            <AddStudentForm />
        </Modal>  
        <Footer noOfStudents={students.length}
          handleAddStudentClickEvent={openAddStudentModal}
        />
      </Container>
    );
  }
    
  return <h1>No students found!!</h1>;


}

export default App;
