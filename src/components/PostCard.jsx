import image from "../assets/images.jpg";


function PostCard() {
    return (

        <div className="card">
            <img src={image} alt="" />

            <div>
                <h3>titolo del post</h3>
            </div>
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde velit quaerat illum alias commodi mollitia doloremque et pariatur minus excepturi!</p>
            </div>
            <div><button>leggi di piu</button></div>
        </div>
    )

}

export default PostCard