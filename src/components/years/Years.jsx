import { Link } from 'react-router-dom'
import '../../App.css'

const Years = () => {
    return (
        <div className='cont'>

            <Link to='57'>
                <a>
                    <div className='Year57' title='Martyrs of 57'>
                        <h4>کشته شدگان سال ۵۷</h4>
                    </div>
                </a>
            </Link>

            <Link to='60'>
                <a>
                    <div className='Year60' title='Martyrs of Decade(60)'>
                        <h4>کشته شدگان دهه ۶۰</h4>
                    </div>
                </a>
            </Link>

            <Link to='70'>
                <a>
                    <div className='Year70' title='Martyrs of Decade(70)'>
                        <h4>کشته شدگان دهه ۷۰</h4>
                    </div>
                </a>
            </Link>

            <Link to='80'>
                <a>
                    <div className='Year80' title='Martyrs of Decade(80)'>
                        <h4>کشته شدگان دهه ۸۰</h4>
                    </div>
                </a>
            </Link>

            <Link to='90'>
                <a>
                    <div className='Year90' title='Martyrs of Decade(90)'>
                        <h4>کشته شدگان دهه ۹۰</h4>
                    </div>
                </a>
            </Link>

            <Link to='1401'>
                <a>
                    <div className='Year1401' title='Iranian National Revolution 1401'>
                        <h4>کشته شدگان انقلاب ملی ۱۴۰۱</h4>
                    </div>
                </a>
            </Link>

        </div>
    )
}

export default Years