
import React, { useState, useEffect, useRef } from 'react';
import './Gallery.css'
import { Galleria } from 'primereact/galleria';
import image1 from "../../assets/img/gallery/gallery-1.jpg";
import image2 from "../../assets/img/gallery/gallery-2.jpg"
import image3 from "../../assets/img/gallery/gallery-3.jpg"
import image4 from "../../assets/img/gallery/gallery-4.jpg"
import image5 from "../../assets/img/gallery/gallery-5.jpg"
import image6 from "../../assets/img/gallery/gallery-6.jpg"
import image7 from "../../assets/img/gallery/gallery-7.jpg"
import image8 from "../../assets/img/gallery/gallery-8.jpg"

export default function Gallery() {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);    
    const galleria = useRef(null);

    useEffect(() => {
        const imageData = [
            {
                itemImageSrc: image1,
                thumbnailImageSrc: image1,
                alt: 'Image 1',
            },
            {
                itemImageSrc: image2,
                thumbnailImageSrc: image2,
                alt: 'Image 2',
            },
            {
                itemImageSrc: image3,
                thumbnailImageSrc: image3,
                alt: 'Image 3',
            },
            {
                itemImageSrc: image4,
                thumbnailImageSrc: image4,
                alt: 'Image 4',
            },
            {
                itemImageSrc: image5,
                thumbnailImageSrc: image5,
                alt: 'Image 5',
            },
            {
                itemImageSrc: image6,
                thumbnailImageSrc: image6,
                alt: 'Image 6',
            },
            {
                itemImageSrc: image7,
                thumbnailImageSrc: image7,
                alt: 'Image 7',
            },
            {
                itemImageSrc: image8,
                thumbnailImageSrc: image8,
                alt: 'Image8',
            }
        ];
        setImages(imageData);
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }
    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }
    

    return (<>

        <div className="card flex justify-content-center  ">
         
         <Galleria ref={galleria} value={images} numVisible={8} style={{ maxWidth: '850px' }}
            activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
            circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate}
            
           />

         
            <div className="container">
                <div className="row">

                {
    images && images.map((image, index) => {
        return (
            <div className="col-md-3 p-3" key={index}>
             <div className='m-2'>
             <img className='w-100  ذ ' 
                    src={image.thumbnailImageSrc} 
                    alt={image.alt} 
                    style={{ cursor: 'pointer' }} 
                    onClick={() => {
                        setActiveIndex(index);
                        galleria.current.show();
                    }} 
                />
             </div>
            </div>
        );
    })
}
                </div>
            </div>
        </div>
        </>
    )
}
        