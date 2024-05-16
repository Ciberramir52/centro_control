import { useEffect } from 'react';
import { NavBar, Footer } from '../../main/components';
import { TableData } from '../components';
import { useCollectedDataStore } from '../../hooks/useCollectedDataStore';
import { useAppDispatch } from '../../hooks';

function DataPage() {


    return ( 
        <div id="page-container">
            <NavBar />
            <TableData />
            <Footer />
        </div>
     );
}

export default DataPage;