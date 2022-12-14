import CountUp from 'react-countup'
import '../../App.css'

const MartyrsCount = () => {
    return (
        <CountUp
            start={0}
            end={5400}
            duration={7}
        >
        {({ countUpRef, start }) => (
            <div className='cpa'>
                <div className='count'>
                    <b ref={countUpRef} />
                    <br/>
                    
                    <button onClick={start}>برای دیدن تعداد کشته شدگان, کلیک کنید</button>
                </div>
            </div>
        )}
        </CountUp>
    )
}

export default MartyrsCount