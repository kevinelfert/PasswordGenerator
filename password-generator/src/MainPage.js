import { useState } from 'react'
import { customAlphabet } from 'nanoid'
import ToggleButton from 'react-toggle-button'
import Select from 'react-select'

const MainPage = () => {

    const [password, setPassword] = useState('')
    const [length, setLength] = useState(0)
    const [toggle, setToggle] = useState(false)
    const [copy, setCopy] = useState('')

    const nanoid_nonSpecial = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
    const nanoid_special = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+={}[]<>?')

    const generatePassword = (e) => {
        e.preventDefault()
        setCopy('')
        console.log({length: length, toggle: toggle})
        if(length > 5){
            if(toggle === true){
                setPassword(nanoid_special(length))
            }
            else{
                setPassword(nanoid_nonSpecial(length))  
            }  
        }
    }

    const options = []

    for (let index = 8; index <= 25 ; index++) {
        options.push({value: index, label: index + ' characters'})
        
    }

    return ( 
        <div className="content">
            <form className="form">
                <h6>Password Length</h6>
                <Select 
                    maxMenuHeight={110}
                    className='select'
                    size="3"
                    onChange={(e) => {
                        if(e!==null){
                            setLength(e.value)
                        }
                    }}
                    options={options}
                />
                <h6>Special Characters</h6>
                <ToggleButton
                    value={toggle}
                    onToggle={(value) => {
                        setToggle(!value)
                    }}
                />
            </form>
            <div className="password">
                <h6>Password</h6>
                <input
                    type="text"
                    value={password}
                    
                ></input>

                <button class="waves-effect waves-light btn-small" onClick={generatePassword}>Generate Password</button>
                <button class="waves-effect waves-light btn-small" onClick={() => {
                    navigator.clipboard.writeText(password)
                    setCopy('Copied To Clipboard')
                }}>Copy to Clipboard</button>
                <p>{copy}</p>
            </div>
        </div>
     );
}
 
export default MainPage;