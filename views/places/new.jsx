const React = require('react');
const Default = require("../default");

function new_form(){
   return(
   <Default>
        <main>
            <h1>Create a new place</h1>
            <form method='POST' action='/places'>
                <div className='form-group'>
            <label htmlFor='name'>Place Name</label>
            <input className='form-control' id='name' name='name' required/>
                </div>
                <div className='form-group'>
                    <label htmlFor='pic'>Place Picture</label>
                    <input className='form-control' id='pic' name='pic'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='city'>City</label>
                    <input className='form-control' id='city' name='city'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='state'>State</label>
                    <input className='form-control' id='state' name='state'/>
                </div>
                <div className='form-group'>
                  <label htmlFor='cuisines'>Cuisines</label>
                  <input className='form-control' id='cuisines' name="cuisines"/>
                </div>
                <input  className='btn btn-primary' type="submit" value="Add Place"/>
            </form>
        </main>
    </Default>
   )
}

module.exports = new_form;