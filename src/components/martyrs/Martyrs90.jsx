import { useState } from 'react'

import '../../App.css'

const Martyrs90 = ({ martyrs90prop }) => {

    const [ martyrsData, setmartyrsData ] = useState(martyrs90prop)
    const [ query, setQuery ] = useState("")

    return (
        <div>
            <h1 className='title1401'>کشته شدگان دهه ۹۰</h1>

            <div className='parentInp'>
                <input type="text"
                    placeholder='نام کامل وارد کنید'
                    onChange={event => setQuery(event.target.value)}
                    className='serachInp'
                />
            </div>

            <div className='pp'>
                {
                    Object.values(martyrsData).filter((itemm, indexx) => {
                        if (query === "") {
                            return itemm
                        } else if (itemm.fullName.toLowerCase().includes(query.toLowerCase())) {
                            return itemm
                        }
                    }).map((item, index) => {
                        return (
                            <div className='card' key={index}>
                                <img src={item.source} />
                                <h2>نام: {item.fullName} </h2>
                                <span>محل شهادت: {item.city} </span>
                                <br/>
                                <span>تاریخ شهادت: {item.death} </span>
                                <br/>
                                <span>سن: {item.age} </span>
                                <br/>
                                <span>دلیل: {item.des} </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Martyrs90