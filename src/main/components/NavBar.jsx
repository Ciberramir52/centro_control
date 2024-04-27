import './NavBar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';

export function NavBar() {
    return ( 
        <nav id="navbar-container">    
            <DashboardIcon fontSize='large'/>
            <h1>Control Center</h1>
            <a href="/"><h2>Main</h2></a>
            <a href="/data"><h2>Collected Data</h2></a>
        </nav>
     );
}