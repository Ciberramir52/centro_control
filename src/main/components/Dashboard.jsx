import "./Main.css";
import { Card } from "./Card";
import { useAppDispatch, useDataStore, useProcessStore } from "../../hooks";
import { useEffect } from "react";

export function Dashboard() {

    const { vaccumData, updateVaccumData, socket } = useDataStore();

    const { activeProcess, isVaccumRunning, startVaccum, stopVaccum } = useProcessStore();

    const { productCode: product_code,
        testTime: test_time,
        status: status_s,
        minPressure: min_Pressure } = vaccumData;

    const dispatch = useAppDispatch();

    const startProcess = () => {
        socket.send("vaccum:control:start");
    }

    const messageEvent = (event) => {
        const socketData = event.data;
        const socketDataSplit = socketData.split(":");
        const [destination, source, command, info] = socketDataSplit;
        if (destination === "control") {
            const infoSplit = info.split(",");
            const [productCode, testTime, status, minPressure] = infoSplit;
            const objectData = { productCode, testTime, status, minPressure };
            console.log(objectData);
            dispatch(updateVaccumData(objectData));
            if (source === "vaccum" && command === "running" && !isVaccumRunning) {
                dispatch(startVaccum());
                console.log(isVaccumRunning);
            }
            if (source === "vaccum" && command === "finish") {
                dispatch(stopVaccum());
                console.log(isVaccumRunning);
            }
        }
        console.log("Message from server ", socketData);
    }

    useEffect(() => {
        socket.addEventListener("open", (event) => {
            console.log('Connected to WS Server!');
        });
        socket.addEventListener("message", (event) => {
            messageEvent(event);
        });
    }, []);

    return (
        <main id="dashboard-container">
            <div id="cards-container">
                <Card title='Product Code' data={product_code} unit='' />
                <Card title='Test Time' data={test_time} unit='s' />
                <Card title='Status' data={status_s} unit='' />
                <Card title='Min. Pressure' data={min_Pressure} unit='kPa' />
            </div>
            <button disabled={isVaccumRunning} onClick={startProcess} type="button">Iniciar Proceso</button>
        </main>
    );
}