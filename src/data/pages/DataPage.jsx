import { useEffect } from 'react';
import { NavBar, Footer } from '../../main/components';
import { TableData } from '../components';
import { useCollectedDataStore } from '../../hooks/useCollectedDataStore';

function DataPage() {

    const { updateVaccumCollectedData, vaccumCollectedData } = useCollectedDataStore();

    console.log(vaccumCollectedData);

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