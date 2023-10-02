import * as React from 'react'

export default function List() {
    const [list, setList] = React.useState<String>()

    const myBrewList = {
        nameOfBeer: 'Lager',
        OG: 1040,
        FG: 1006,
        alcohol: '5.4'
    }

    return (
        <div className='list'>
            <p>Brewing name : {myBrewList.nameOfBeer}</p>
            <p>OG : {myBrewList.OG}</p>
            <p>FG : {myBrewList.FG}</p>
            <p>Alcohol : {myBrewList.alcohol}</p>
        </div>
    )
}
