import "./Main.css";
import { Card } from "./Card";

export function Dashboard() {
    return ( 
        <main id="dashboard-container">
            <div id="cards-container">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <button type="button">Iniciar Proceso</button>
        </main>
     );
}