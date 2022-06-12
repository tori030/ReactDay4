import React,{useState} from 'react'
import Test4Ani from './Test4Ani';
import Test4Name from './Test4Name'
import Test4Dis from './Test4Dis'


const Test4 = () => {
    const [ ani, setAni ] = useState('강아지')
    const [ text, setText ] = useState('아무개')

    const onText = (e) => {
        const{value} = e.target
        setText(value)
    }

    const onAni = (e) => {
        const{value} = e.target
        setAni(value)
    }
  return (
    <div>
        <Test4Ani ani={ani} onText={onText}/>
        <hr/>
        <Test4Name text={text} onAni={onAni}/>
        <hr/>
        <Test4Dis text={text} ani={ani}/>
    </div>
  )
}

export default Test4