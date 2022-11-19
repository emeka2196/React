import './nav.sass'
import { GoChevronDown } from 'react-icons/go'
import { RiQuestionnaireFill, RiUser3Fill, RiHeartFill, RiShoppingCart2Fill } from 'react-icons/ri'
import { MdOutlineSearch } from 'react-icons/md'
import { useState } from 'react'
const Nav = () => {
    const [value, setValue] = useState('Search games, hardware, news, etc')
    const input = document.querySelector('input')
    const removeValue = () => setValue('')
    const addValue = () => setValue('Search games, hardware, news, etc')

























    return ( 
        <div className="nav">
            <div className="logo"></div>
            <div className="lr">
                <div className="left">
                    <div className="input">
                        <div className="input-block">
                            <div className="a">
                                <MdOutlineSearch />
                                <input type="text"
                                onBlur={addValue}
                                onFocus={removeValue}
                                 placeholder='Search games, hardware, news, etc' 
                                 onChange={(e) => setValue(e.target.value)} 
                                 value={value}
                                 />
                            </div>
                            <div className="b">
                                <span>All Categories</span>
                                <GoChevronDown />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <RiQuestionnaireFill />
                        <span>Support</span>
                    </div>
                    <div className="wrapper">
                        <RiHeartFill />
                        <span>Wish List</span>
                    </div>
                    <div className="wrapper">
                        <RiShoppingCart2Fill />
                        <span>Cart</span>
                    </div>
                    <div className="wrapper">
                        <RiUser3Fill />
                        <span>Login / Sign up</span>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 

export default Nav;