import { useState } from 'react';
import './App.scss';
import {db} from './firebase';
import firebase from 'firebase';
import * as EmailValidator from 'email-validator';

function App() {
  const [inputValue, setInputValue ] = useState('')

  const handle_click=()=>{
    if(EmailValidator.validate(inputValue)){
      db.collection('emails').doc("email").update({
        emailList:firebase.firestore.FieldValue.arrayUnion(inputValue)
      });
      setInputValue('')
      console.log(inputValue)
    }else{
      return null;
    }
    
  }

  return (
    <div className="App">
      <div className='frame'>

        <input type="checkbox" id="cb" />
        
        <label for="cb" class="button" onClick={handle_click}>Send mail</label>
        <label for="cb" class="button reset">Reset</label>
        <div className='text'>
          <h3>Waiting List</h3>
          <p>Text Block</p>
          <input value={inputValue} onChange={e=>setInputValue(e.target.value)} type='email' placeholder='email' />
          
        </div>
        
        <div class="circle"></div>
        <div class="circle-outer"></div>
        <svg class="icon mail">
          <polyline points="119,1 119,69 1,69 1,1"></polyline>
          <polyline points="119,1 60,45 1,1 119,1"></polyline>
        </svg>
        <svg class="icon plane">
          <polyline points="119,1 1,59 106,80 119,1"></polyline>
          <polyline points="119,1 40,67 43,105 69,73"></polyline>
        </svg>
        </div>
    </div>
  );
}

export default App;
