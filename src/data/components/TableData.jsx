import { useCollectedDataStore } from '../../hooks';
import './TableData.css';

export function TableData() {
    const { updateVaccumCollectedData, vaccumCollectedData } = useCollectedDataStore();

    console.log(vaccumCollectedData);
    return ( 
        <main id="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Code Product</th>
                        <th>Test Time</th>
                        <th>Test Status</th>
                        <th>Min. Pressure</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vaccumCollectedData.map( data => (
                            <tr key={ data.dateTime }>
                                <td>{ data.productCode }</td>
                                <td>{ data.testTime } s</td>
                                <td>{ data.status }</td>
                                <td>{ data.minPressure } kPa</td>
                                <td>{ data.dateTime }</td>
                            </tr>
                         ) )
                    }
                    {/* <tr>
                        <td>35</td>
                        <td>35</td>
                        <td>35</td>
                        <td>35</td>
                        <td>35</td>
                    </tr> */}
                </tbody>
            </table>
        </main>
     );
}