import "./Main.css";

export function Card({ title, data, unit }) {
    return ( 
        <div className="card-container">
            <h3>{ title }</h3>
            <h2>{ data }  { unit }</h2>
        </div>
     );
}