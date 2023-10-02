import * as React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface Inputs {
    OG: number
    FG: number
}

export default function Calculator() {
    const { register, handleSubmit } = useForm<Inputs>();
    const [sum, setSum] = React.useState<any>()
    const onSubmit: SubmitHandler<Inputs> = data => {
        const result = (data.OG - data.FG) / 7.5 + 0.5
        console.log(result.toFixed(1))
        setSum(result.toFixed(1))
    }

    return (
        <div className='calculator'>
            <form onSubmit={handleSubmit(onSubmit)} className='calculator-form'>
                <label>OG</label>
                <input type='text' {...register('OG')} />

                <label>FG</label>
                <input type='text' {...register('FG')} />
                {sum}
                <button className='btn-calculator' type='submit'>Send</button>
            </form>
        </div>
    )
}
