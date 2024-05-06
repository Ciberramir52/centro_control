import { collectedDataAPI } from "../api/collectedData/collectedDataAPI";
import { vaccumCollectedDataLoaded, startLoadingCollectedData } from "../store";
import { useAppSelector } from "./hooks";

export const useCollectedDataStore = () => {
    // const dispatch = useAppDispatch();

    const { vaccumCollectedData, isLoadingData } = useAppSelector( ( state ) => state.collectedData );

    const getCollectedData = () => {
        return async dispatch => {
          try {
            dispatch( startLoadingCollectedData() );
            const {data} = await collectedDataAPI;
            console.log(data);
            dispatch( vaccumCollectedDataLoaded( data ) );
          } catch(err) {
            console.error(err);
            console.error('No response available');
            dispatch( vaccumCollectedDataLoaded( [] ));
        };
      }
    }

    return {
        isLoadingData,
        vaccumCollectedData,
        getCollectedData
    }
}