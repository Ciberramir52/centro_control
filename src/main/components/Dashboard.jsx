import "./Main.css";
import { Card } from "./Card";
import { useAppDispatch, useDataStore } from "../../hooks";

export function Dashboard() {
    const { vaccumData, updateVaccumData } = useDataStore();

    const { productCode, testTime, status, minPressure } = vaccumData;

    const dispatch = useAppDispatch();

    console.log(vaccumData);

    return ( 
        <main id="dashboard-container">
            <div id="cards-container">
                <Card title='Product Code' data={ productCode } unit='' />
                <Card title='Test Time' data={ testTime } unit='s' />
                <Card title='Status' data={ status } unit='' />
                <Card title='Min. Pressure' data={ minPressure } unit='kPa' />
            </div>
            <button type="button">Iniciar Proceso</button>
        </main>
     );
}