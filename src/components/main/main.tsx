import { Data } from '../types'
import { addCards } from './main.hooks'

export function MainDashboard(data: Data[]) {

    return (
        <>
            <header>
                <h1>Celestial Bodies</h1>
                <p>By DMI Students</p>
            </header>
            <section>
                <h2>Bodies</h2>
                <div>
                    <h3>Ordered By</h3>
                    <button>mass</button>
                </div>
                <div>
                    <h3>Filter By</h3>
                    <button>Moon</button>
                </div>
            </section>
            <section id='cards'>
                {addCards(data)}
            </section>
        </>
    )
}