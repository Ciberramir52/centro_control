import "./Main.css";
import { Card } from "./Card";
import { useAppDispatch, useDataStore, useProcessStore } from "../../hooks";
import { useEffect, useState } from "react";

export function Dashboard() {


    const [inputValues, setInputValues] = useState({
        productCode: '',
        testTime: 0
    });

    const { vaccumData, updateVaccumData, socket } = useDataStore();

    const { isVaccumRunning, startVaccum, stopVaccum } = useProcessStore();

    const { productCode: product_code,
        testTime: test_time,
        status: status_s,
        minPressure: min_Pressure } = vaccumData;

    const dispatch = useAppDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes hacer lo que quieras con el objeto que contiene los valores de los inputs
        console.log(inputValues);
        if (inputValues.productCode !== "" && inputValues.testTime !== "" && parseInt(inputValues.testTime, 10) > 0) {
            socket.send(`vaccum:control:start:${inputValues.productCode},${inputValues.testTime}`);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

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
        socket.addEventListener("open", () => {
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
                <Card title='Pressure' data={min_Pressure} unit='Bar' />
            </div>
            <div id="data-container">
                <div className="input-container">
                    <label htmlFor="product-code">Insert Product Code</label>
                    <input
                        id="product-code"
                        type="text" 
                        autoComplete="false"
                        value={inputValues.productCode}
                        placeholder="Product Code"
                        onChange={handleChange}
                        name="productCode"
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="test-time">Insert Test Time</label>
                    <input
                        type="number"
                        id="test-time"
                        autoComplete="false"
                        value={inputValues.testTime}
                        placeholder="Test Time"
                        onChange={handleChange}
                        name="testTime"
                    />
                </div>
            </div>
            <button disabled={isVaccumRunning} onClick={handleSubmit} type="button">Iniciar Proceso</button>
        </main>
    );
}