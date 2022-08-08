const React = require('react')
const Def = require('./default')

function error404(){
    return(
        <Def>
            <main>
                <h1>Error 404: PAGE NOT FOUND</h1>
                <img src='./images/cat.jpg' alt='kitty'></img>
                <div className = 'center-me'>
                Photo by <a href='https://unsplash.com/photos/75715CVEJhI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'>Chad Montano</a> on <a href='https://unsplash.com/'>Unsplash</a>
            </div>
                <p className='center-me'><b>Oops, sorry, we can't find this page!</b></p>
            </main>
        </Def>
    )
}

module.exports = error404