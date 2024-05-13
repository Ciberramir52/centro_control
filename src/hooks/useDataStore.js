import { onUpdateVaccumData } from "../store";
import { useAppDispatch, useAppSelector } from "./hooks";

const socket = new WebSocket("ws://localhost:3000");

socket.addEventListener("open", (event) => {
    console.log('Connected to WS Server!');
});

export const useDataStore = () => {
    const dispatch = useAppDispatch();

    const { vaccumData } = useAppSelector( ( state ) => state.data );

    const updateVaccumData = ( data ) => () => dispatch( onUpdateVaccumData( data ) );

    return {
        socket,
        vaccumData,
        updateVaccumData
    }
}