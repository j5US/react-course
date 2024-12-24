import { useSelector } from "react-redux";

function CarValue() {
    const { data, searchTerm } = useSelector((state) => state.cars);

    const totalCost = data.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).reduce((accum, car) => accum + car.cost, 0);


    return <div className="car-value">
        Total Cost: ${totalCost}
    </div>;
}

export default CarValue;