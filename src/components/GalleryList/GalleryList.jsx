import GalleryItem from "../GalleryItem/GalleryItem"


function GalleryList({ galleryList }) {

    return (

        galleryList.map(image => {
            return (
                <GalleryItem
                    key={image.id}
                    image={image.path}
                    description={image.description}
                    likes={image.likes} />
            )
        })
    )
}

export default GalleryList