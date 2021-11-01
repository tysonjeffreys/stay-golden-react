import { Nav } from './Nav'
import { ImageList } from './ImageList'
import { useEffect, useState } from 'react';


export const Layout = () => {
    
    const [images, setImages] = useState([
        {title: 'Image Title', date: 'Image Date', image: 'Image', id: 1},
        {title: 'Image Title', date: 'Image Date', image: 'Image', id: 2},
        {title: 'Image Title', date: 'Image Date', image: 'Image', id: 3},
]);

    const handleDelete = (id) => {
        const newImages = images.filter(image => image.id !== id)
        setImages(newImages)
    }

    useEffect(() => {
        
    })

    return (
        <div className="container">
        <Nav />
        <ImageList images={images} subtitle="All Images" handleDelete={handleDelete} />
        </div>
    
    )
}