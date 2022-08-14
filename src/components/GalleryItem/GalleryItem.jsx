import {useState} from 'react';
import './GalleryItem.css'

function GalleryItem({image, likeButton}) {

    const [descriptionStatus, setDescriptionStatus] = useState(false);

    return (
        <>
        <div className="imageDisplay" onClick={() => setDescriptionStatus(!descriptionStatus)}>
            {descriptionStatus === true ? <p>{image.description}</p>:<img src={image.path} />}
            <br />
            <button onClick={() => likeButton(event, image)}>Like!</button>
            <p>Likes:{image.likes}</p>
        </div>
        
        </>
    );
}

export default GalleryItem