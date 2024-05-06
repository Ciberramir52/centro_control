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
                            <tr key={ data.id }>
                                <td>{ data.product_code }</td>
                                <td>{ data.test_time } s</td>
                                <td>{ data.test_status }</td>
                                <td>{ data.max_pressure } kPa</td>
                                <td>{ data.date_time }</td>
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