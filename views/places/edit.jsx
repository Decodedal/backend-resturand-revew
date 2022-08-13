const React = require('react');
const Default = require('../default');

function edit_form({place, index}){
    console.log(index)
    return(
        <Default>
            <main>
                <h1>Edit Place</h1>
                <h2>look at this {index}</h2>
                <form method='POST' action={`/places/${index}?_method=PUT`}>
                <div className='row'>
                <div className='form-group col-sm-6'>
            <label htmlFor='name'>Place Name</label>
            <input className='form-control' id='name' name='name'value={place.name} required/>
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor='pic'>Place Picture</label>
                    <input className='form-control' id='pic' name='pic' value={place.pic}/>
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor='city'>City</label>
                    <input className='form-control' id='city' name='city'value={place.city}/>
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor='state'>State</label>
                    <input className='form-control' id='state' name='state'value={place.state}/>
                </div>
                </div>
                <div className='form-group'>
                  <label htmlFor='cuisines'>Cuisines</label>
                  <input className='form-control' id='cuisines' name="cuisines"value={place.cuisines}/>
                </div>
                <input  className='btn btn-primary' type="submit" value="Update info"/>
            </form>
            </main>
        </Default>
    )
}

module.exports =edit_form;