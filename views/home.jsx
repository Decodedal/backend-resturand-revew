const React = require('react')
const Def = require('./default')

function home(){
return(
    <Def>
        <main>
            <h1>HOME</h1>
            <div>
                <img src="./images/pancakes.jpg" alt='pancakes'></img>
            </div>
            <div className = 'center-me'>
                Photo by <a href='https://unsplash.com/photos/eeqbbemH9-c?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'>Chad Montano</a> on <a href='https://unsplash.com/'>Unsplash</a>
            </div>
            <button className='btn-primary'>Places Page</button>
        </main>
    </Def>
)
}

module.exports = home