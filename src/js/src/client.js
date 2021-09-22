import fetch from 'unfetch';

const getAllStudents = () => fetch('/api/v1/students');

export default getAllStudents;
