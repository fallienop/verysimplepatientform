import React from 'react'
import style from './Form.module.css'
const Form = () => {
  return (
   
    <form>
    <div className="formcontainer">
  
      
      <label>
           Xəstənin tam adı:
      </label>
      <input name="SAA" type="text" id="saa" required/>
  
       <label>
           Vəsiqə seriyası və nömrəsi:
      </label>
      <input name="passport" type="text" id="passport" required/>
  
       <label>
           Vəsiqə seriyası və nömrəsi:
      </label>
      <select name="gender">
          <option value="man">
              Kişi
          </option>
           <option value="woman">
              Qadın
          </option>
           <option value="lgbt">
              LGBTQ+
          </option>
      </select>
  
      <label> Yaş
      </label>
    <input name="age" id="age" type="text" min={0} />
  
    <label>Email ünvanı</label>
    <input name="email" type="email"/>
     
      <label>Simptomların təsviri
      </label>
     <textarea name="symptons" rows="6" cols="30"></textarea>
       <div class="check">
     <label >  <input type="checkbox" />Təkrar qəbul</label>
       </div>
  
  <button type="submit"> Submit </button>
    </div>   
    </form>
   
  )
}

export default Form