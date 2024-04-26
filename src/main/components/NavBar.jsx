import './NavBar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';

export function NavBar() {
    return ( 
        <nav id="navbar-container">    
            <DashboardIcon fontSize='large'/>
            <h1>Centro de control</h1>
            <a href="#"><h2>Principal</h2></a>
            <a href="#"><h2>Registro</h2></a>
        </nav>
     );
}