import { useEffect } from 'react';
import { NavBar, Footer } from '../../main/components';
import { TableData } from '../components';
import { useCollectedDataStore } from '../../hooks/useCollectedDataStore';
import { useAppDispatch } from '../../hooks';

function DataPage() {

    const { isLoadingData, getCollectedData, vaccumCollectedData  } = useCollectedDataStore();

    const dispatch = useAppDispatch();

    console.log( vaccumCollectedData );

    useEffect(() => {
        dispatch( getCollectedData() );
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