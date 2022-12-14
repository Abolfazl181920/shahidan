import Martyrs80 from '../martyrs/Martyrs80'
import martyrs80data from '../../../data/martyrs80.json'

const D80 = () => {
    return (
        <div className='soonTitle'>
            <Martyrs80 martyrs60prop={martyrs80data} />
        </div>
    )
}

export default D80