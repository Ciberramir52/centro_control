import { onUpdateVaccumCollectedData } from "../store";
import { useAppDispatch, useAppSelector } from "./hooks";

export const useCollectedDataStore = () => {
    const dispatch = useAppDispatch();

    const { vaccumCollectedData } = useAppSelector( ( state ) => state.collectedData );

    const updateVaccumCollectedData = () => () => dispatch( onUpdateVaccumCollectedData() );

    return {
        vaccumCollectedData,
        updateVaccumCollectedData,
    }
}