import  Container from "./Container";
import { Avatar, Button } from 'antd';
import './Footer.css';


const Footer = (props) => (
    <div className='footer'>
        <Container>
            {
                props.noOfStudents  && 
                <Avatar 
                    size='large'
                    style={{backgroundColor: '#f56a00', marginRight: '5px'}}>
                        {props.noOfStudents}
                </Avatar>
            }
            <Button 
                type='primary' 
                onClick={() => props.handleAddStudentClickEvent()}>
                    Add new student
            </Button>
        </Container> 
    </div>
);

export default Footer;