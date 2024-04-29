import { useAppDispatch } from '../../hooks/hooks';
import { useDataStore } from '../../hooks/useDataStore';
import { NavBar, Dashboard, Footer } from '../components/';

export function MainPage() {
    const { vaccumData } = useDataStore();

    console.log(vaccumData);

    const dispatch = useAppDispatch();

    return ( 
        <div id="page-container">
            <NavBar />
            <Dashboard />
            {/* <TableData /> */}
            <Footer />
        </div>
     );
}