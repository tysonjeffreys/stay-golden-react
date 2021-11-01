export const ImageList = ({images, subtitle, handleDelete}) => {

    return ( 
        <div>
            {images.map((image) => (
                <div key={image.id}>
                <div className="row-2">
                    <div className="left-column">
                        <div className="bicycle-map">
                            <img src="bicycle-pin-svgrepo-com.svg" />
                        </div>
                        <div className="title-column">
                            <p className="title">{image.title}</p>
                            <p className="date">{image.date}</p>
                        </div>
                    </div>
                    <div className="home-image">{image.image}</div>
                </div>
                <button onClick={() => handleDelete(image.id)}>delete image</button>
                </div>
            ))}     
        </div>
    );
}



//export default ImageList;