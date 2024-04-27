import { useEffect } from 'react';
import { NavBar, Footer } from '../../main/components';
import { TableData } from '../components';

function DataPage() {

    useEffect(() => {
        new WebSocket("ws://192.168.1.91:3000");
    }, []);

    return ( 
        <div id="page-container">
            <NavBar />
            <TableData />
            <Footer />
        </div>
     );
}

export default DataPage;