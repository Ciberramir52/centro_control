import "./Main.css";
import { Card } from "./Card";
import { useAppDispatch, useDataStore } from "../../hooks";

export function Dashboard() {
    const { vaccumData, updateVaccumData, socket } = useDataStore();

    const { productCode: product_code, 
        testTime: test_time,
        status: status_s,
        minPressure: min_Pressure } = vaccumData;

    const dispatch = useAppDispatch();

    socket.addEventListener("message", (event) => {
        const socketData = event.data;
        const socketDataSplit = socketData.split(":");
        const [ destination, source, command, info ] = socketDataSplit;
        if ( destination === "control" ) {
            const infoSplit = info.split(",");
            const [ productCode, testTime, status, minPressure ] = infoSplit;
            const objectData = { productCode, testTime, status, minPressure };
            console.log(objectData);
            dispatch( updateVaccumData( objectData ) );
        }
        console.log("Message from server ", socketData);
    });

    const startProcess = () => {
        socket.send("vaccum:control:start");
    }

    // console.log(vaccumData);

    return ( 
        <main id="dashboard-container">
            <div id="cards-container">
                <Card title='Product Code' data={ product_code } unit='' />
                <Card title='Test Time' data={ test_time } unit='s' />
                <Card title='Status' data={ status_s } unit='' />
                <Card title='Min. Pressure' data={ min_Pressure } unit='kPa' />
            </div>
            <button onClick={ startProcess } type="button">Iniciar Proceso</button>
        </main>
     );
}