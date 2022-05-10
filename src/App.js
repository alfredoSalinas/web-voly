import logo from './logo.svg';
import './App.css';
import { db } from './services/firebase';
import { Container } from 'react-bootstrap';
import { PublicRoutes } from './routes/publicRoutes';

function App() {
  return (
    <Container>
      <PublicRoutes />
    </Container>
  );
}

export default App;
