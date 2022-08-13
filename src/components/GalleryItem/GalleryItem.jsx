import {useState} from 'react';
import './GalleryItem.css'

function GalleryItem({image, likeButton}) {

    const [descriptionStatus, setDescriptionStatus] = useState(false);

    return (
        <>
        <div onClick={() => setDescriptionStatus(!descriptionStatus)}>
            {descriptionStatus === true ? <p>{image.description}</p>:<img src={image.path} />}
            
                       
        </div>
        <button onClick={() => likeButton(image)}>Like!</button>
        <p>Likes:{image.likes}</p> 
        </>
    );
}

export default GalleryItem