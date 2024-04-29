import { onUpdateVaccumData } from "../store";
import { useAppDispatch, useAppSelector } from "./hooks";

export const useDataStore = () => {
    const dispatch = useAppDispatch();

    const { vaccumData } = useAppSelector( ( state ) => state.data );

    const updateVaccumData = () => () => dispatch( onUpdateVaccumData() );

    return {
        vaccumData,
        updateVaccumData
    }
}