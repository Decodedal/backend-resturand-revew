const React = require('react');
const Def = require('../default');

function new_form(){
    return(
        <Def>
            {/* <head>
            <link rel='stylesheet' href='style.css'></link>
            </head> */}
          <main>
            <h1>Add a new Place</h1>
            <form method='POST' action='/places'>
                <div className='form-group'>
                    <label htmlFor='name'>Place Name</label>
                    <input className="form-control" id="name" name='name' required/>
                </div>
                <div className='form-group'>
                    <label htmlFor='pic'>Place Picture</label>
                    <input className="form-control" type='url' id="pic" name = 'pic'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='city'>City Name</label>
                    <input className="form-control" id='city' name='city'></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='state'>State Name</label>
                    <input className="form-control" id='state' name ='state'></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='cuisines'>Cuisine Type</label>
                    <input className="form-control" id='cuisines' name='cuisines' required></input>
                </div>
                   <input className='btn btn-primary' type="submit" value="Add Place"/>
            </form>
          </main>
        </Def>
    )
}

module.exports = new_form