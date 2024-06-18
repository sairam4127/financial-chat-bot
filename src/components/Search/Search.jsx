import { Component } from "react";
import { IoMdSend } from "react-icons/io";

import styles from './Search.module.css'

class Search extends Component{
    state={inputValue:'',inputStatus:''}
    
    onEnteredInputValue=(event)=>{
        
        this.setState({inputValue:event.target.value})
    }

    onEnter=(event)=>{
        
        if(event.key==='Enter'){
            this.onClickedSend()
        }

    }

    onClickedSend=()=>{
        const {inputValue}=this.state;
        //console.log('rama')
        //console.log(inputValue.length)
        const {dataList,onQuery}=this.props;
        //console.log(dataList)
        const checkValue=dataList.filter(obj=>
            obj.q.toLowerCase()===inputValue.toLowerCase()
        )
        //sconsole.log(checkValue)
        if (inputValue.length===0){
            this.setState({inputValue:'',inputStatus:'empty'});
        }
        else if(checkValue.length===0){
            this.setState({inputValue:'',inputStatus:'unrecognized'});

        }
        else{
            this.setState({inputValue:'',inputStatus:''},onQuery(inputValue,checkValue));

        }
        

    }

    render(){
        const {inputValue,inputStatus}=this.state;

        return <div>
        
        <div className={styles.searchMainCont}>
        <input type="text" value={inputValue} onChange={this.onEnteredInputValue} onKeyDown={this.onEnter} className={styles.searchCont} placeholder="Enter Your Promt Here" id='promtId'/>
        <IoMdSend className={styles.sendIcon} onClick={this.onClickedSend}/>
        
    </div>
    {inputStatus==='empty' && <p className={styles.errorMsg}>Please Provide non-empty Input</p>}
    {inputStatus==='unrecognized' && <p className={styles.errorMsg}>Please Provide Valid Input</p>}
    </div>
}
}

export default Search