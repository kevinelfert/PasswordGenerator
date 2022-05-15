import { useState } from 'react'
import { customAlphabet } from 'nanoid'
import ToggleButton from 'react-toggle-button'
import Select from 'react-select'

const MainPage = () => {

    const [password, setPassword] = useState('')
    const [length, setLength] = useState('')
    const [toggle, setToggle] = useState(false)

    const nanoid_nonSpecial = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
    const nanoid_special = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+={}[]<>?')

    const generatePassword = () => {
        console.log({length: length, toggle: toggle})
        if(toggle === true){
            setPassword(nanoid_special(length))
        }
        else{
          setPassword(nanoid_nonSpecial(length))  
        }
        
    }

    const options = []

    for (let index = 5; index <= 25 ; index++) {
        options.push({value: index, label: index})
        
    }

    return ( 
        <div className="content">
            <form className="form">
                <Select 
                    onChange={(e) => {
                        if(e!==null){
                            setLength(e.value)
                        }
                    }}
                    options={options}
                />
                <ToggleButton
                    value={toggle}
                    onToggle={(value) => {
                        setToggle(!value)
                    }}
                />
            </form>

            <h1>{password}</h1>

            <button class="waves-effect waves-light btn-small" onClick={generatePassword}>Generate Password</button>


        </div>
     );
}
 
export default MainPage;