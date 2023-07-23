import React from 'react'
import CarItem from '../screens/Home/car-item/CarItem'

const Catalog = ({data}) => {
  return (
    <div> {data?.length ? 
        data?.map 
        (car => ( <CarItem key={car.id} 
        car={car}  />)
        ) : <p>There is no car</p> }
    </div>
  )
}

export default Catalog