import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import CarItem from '../Home/car-item/CarItem'
import { CarService } from '../../../servises/car.service.js'
import { AuthContext } from "../../../providers/AuthProvier";
import { withAuth } from "../../../HOC/withAuth";

const CarDetail = () => {
    const {id} = useParams();
    const [car, setCar] = useState({});

    useEffect(() => {
        if(!id) return;

        const fetchData = async () => {
          const data = await CarService.getById(id);
          console.log(data);
          setCar(data);
        }
  
        fetchData();
      }, [id])

    if(!car?.name) return <p>Loading...</p>

    return (
        <div>
            <Link to='/'>Back</Link>
            <CarItem car={car} />
        </div>
    )
}

export default withAuth(CarDetail)