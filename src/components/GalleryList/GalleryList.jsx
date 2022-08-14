import axios from "axios"
import GalleryItem from "../GalleryItem/GalleryItem"


function GalleryList({ galleryList, getGallery }) {

    const likeButton = (event, image) => {
        event.stopImmediatePropagation();

        axios.put(`/gallery/like/${image.id}`)
            .then(response => {
                getGallery()
            }).catch(err => {
                console.log(err);
            })
    }
    return (
        <>
            {galleryList.map(image => (
                <GalleryItem
                    key={image.id}
                    image={image}
                    likeButton={likeButton}
                />)
            )}
        </>
    )
}

export default GalleryList