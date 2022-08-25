const React = require("react");
const { comment } = require("../../models");
const Def = require('../default');

function show(data){
    let comments = (
        <h3 className="inactive">
            No Comments yet!
        </h3>
    )    
    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )
    if(data.place.comments.length){
        let sumRatings = data.place.comments.reduce((num, comments)=>{
            return num + comments.stars
        },0)
        let averageRating = Math.round(sumRatings /data.place.comments.length)
        let stars = ''
        for(let i = 0; i<averageRating; i++){
            stars += '⭐'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
    }
    if (data.place.comments.length) {
          comments = data.place.comments.map(c => {
            return (
              <div className="border">
                <h2 className="rant">{c.rant ? 'Rant!😡' : 'Rave!😻'}</h2>
                <h4>{c.content}</h4>
                <h3>
                  <stong>- {c.author}</stong>
                </h3>
                <h4>Rating: {c.stars}</h4>
              </div>
            )
          })
        }

    return(
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                <img src={data.place.pic} alt = {data.place.name}/>
                <h3>Located in {data.place.city} {data.place.state}</h3>
                </div>
                <div className="col-sm-6">
                <div>
                <h1>{data.place.name}</h1>
                    <h2>Rating</h2>
                    <p>{rating}</p>
                </div>
                <div>
                    <h2>Description</h2>
                   <h3>{data.place.showEstablished()}</h3>
                   <h4>Serving {data.place.cuisines}</h4>
                </div>
                <a href={`/places/${data.place.id}/edit`} className="btn-btn-warning">Edit</a>
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                    <button type="sumbit" className="'btn btn-danger">
                        Delete
                    </button>
                </form>
                </div>
                <div>
                    <h2>Comments</h2>
                    {comments}
                </div>
                </div>
                <div>
                    <form method="POST" action={`/places/${data.place._id}/comment`}>
                        <div className="form-group">
                           <label htmlFor="author">Author</label>
                           <input className="form-control" name="author" id="author"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <input className="form-control" name="content" id="content"/>
                            </div>
                            <div className="form-group">
                                <br></br>
                            <label htmlFor="points">Stars</label>
                            <input className="form-control "type="number" id="stars" name="stars" step="0.5"/>
                            </div>
                            <div className="form-group">
                            <label htmlFor="rant">Rant</label>
                             <input type= 'checkbox' name="rant" id='rant'/>
                             </div>
                            <input className='btn btn-primary' type="submit" value="Add comment"/>
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = show