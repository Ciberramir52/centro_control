import { onStartVaccum, onStopVaccum, onSetActiveProcess, onDeleteProcess } from "../store";
import { useAppDispatch, useAppSelector } from "./hooks";

export const useProcessStore = () => {
    const dispatch = useAppDispatch();

    const { activeProcess, isVaccumRunning } = useAppSelector( ( state ) => state.processes );

    // console.log( isVaccumRunning );

    const setActiveProcess = () => () => dispatch( onSetActiveProcess() );
    const startVaccum = () => () => dispatch( onStartVaccum() );
    const stopVaccum = () => () => dispatch( onStopVaccum() );
    const deleteProcess = () => dispatch( onDeleteProcess() );

    return {
        activeProcess,
        isVaccumRunning,
        setActiveProcess,
        startVaccum,
        stopVaccum,
        deleteProcess,
    }
}