import Martyrs60 from '../martyrs/Martyrs60'
import martyrs60data from '../../../data/martyrs60.json'

const D60 = () => {
    return (
        <div className='soonTitle'>
            <Martyrs60 martyrs60prop={martyrs60data} />
        </div>
    )
}

export default D60