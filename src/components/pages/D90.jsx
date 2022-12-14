import Martyrs90 from '../martyrs/Martyrs90'
import martyrs90data from '../../../data/martyrs90.json'

const D90 = () => {
    return (
        <div className='soonTitle'>
            <Martyrs90 martyrs90prop={martyrs90data} />
        </div>
    )
}

export default D90