import styles from './CreateCarForm.module.css'
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CarService } from '../../../../servises/car.service';
import ErrorMesange from './ErrorMesange';
import { useCreateCar } from './useCreateCar';


function CreateCarForm() {
    const {register, reset, handleSubmit, formState:{errors},} = useForm({
        mode: 'onChange',
    })

    const {createCar} = useCreateCar(reset);
    
    return(
        <form className={styles.form} onSubmit={handleSubmit(createCar)}>
            <input {...register('name', {required: 'Name is required'})}
            placeholder="Name"  
            />
            <ErrorMesange error={errors?.name?.message} />
            <input 
            placeholder="Price" 
            {...register('price', {required: true})}
            />

            <input 
            placeholder="Image" 
            {...register('image', {required: true})}
            />

            <button className='btn'>Create</button>
        </form>
    )
}
export default CreateCarForm