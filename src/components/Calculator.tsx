import * as React from 'react'

export default function Calculator() {
    return (
        <div className='calculator'>
            <form className='calculator-form'>
                <label>OG</label>
                <input type='text' />

                <label>FG</label>
                <input type='text' />

                <button className='btn-calculator'>Send</button>
            </form>
        </div>
    )
}
