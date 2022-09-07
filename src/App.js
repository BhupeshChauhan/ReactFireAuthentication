import './App.css';
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import ProtectedRoute from './Components/ProtectedRoute'
import Home from './Components/Home'
import { Routes, Route } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap';
import { UserAuthContextProvider } from './Context/UserAuthContext';

function App() {
    return (
        <Container>
            <Row>
                <Col>
                <UserAuthContextProvider>
                    <Routes>
                    <Route
                        path="/home"
                        element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                        }
                    />
                        <Route path='/' element={<Login />} />
                        <Route path='/signup' element={<SignUp />}/>
                    </Routes>
                </UserAuthContextProvider>
                </Col>
            </Row>
        </Container>
    );
}

export default App;