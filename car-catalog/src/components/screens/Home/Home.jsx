import { CarService } from '../../../servises/car.service'
//import {cars as carsData} from './cars.data.js'
import CreateCarForm from './create-car-form/CreateCarForm'
import { useQuery } from '@tanstack/react-query'
import Header from '../../ui/Header'
import Catalog from '../../ui/Catalog'


function Home() {
    const {data, isLoading} = useQuery
    (['cars'], () => CarService.getAll());

    return (
      <div>
        <h1>Cars Catalog</h1>

        <Header />

        <CreateCarForm />

        <Catalog data={data} />
      </div>
    )
  }
  
  export default Home