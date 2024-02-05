import React from 'react'
import Slider from "react-slick";


export default function SliderSection() {
    var settings = {
        fade: true,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Slider {...settings}
                className='slick-active-main'
            >
                <div>
                    <div className='slider-image-box' style={{
                        background: 'url("https://s3.ap-south-1.amazonaws.com/skill-india-dev/to_set/bannerimages/jpeg/23/0ffee606-2758-4514-bff1-81d9fd20fce5.jpg?response-content-disposition=inline&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240201T071459Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA3OJCFBJTPLAN4OGU%2F20240201%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=7257e8198250f82417966ff5af8526232bbed5e2436ea327769c9dd62dbd1309")',

                    }}>
                    </div>
                </div>
                <div>
                    <div className='slider-image-box' style={{
                        background: 'url("https://s3.ap-south-1.amazonaws.com/skill-india-dev/to_set/bannerimages/jpeg/24/9a79a3d5-bde3-4645-8ae4-eea8b85d0878.jpg?response-content-disposition=inline&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240202T170101Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA3OJCFBJTPLAN4OGU%2F20240202%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=9a67099f57ce1c699b3535cbd297ef6c38edf53d000cd63889b0c14372c05102")',

                    }}>
                    </div>
                </div>
                <div>
                    <div className='slider-image-box' style={{
                        background: 'url("https://s3.ap-south-1.amazonaws.com/skill-india-dev/to_set/bannerimages/jpeg/22/447fd69d-541e-46a0-8900-954f55575afe.jpg?response-content-disposition=inline&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240201T071352Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA3OJCFBJTPLAN4OGU%2F20240201%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=42807218d3c5ee9e97553fec9d9eb892b594366bb54bb6a119c55f8c04661b97")',

                    }}>
                    </div>
                </div>
                <div>
                    <div className='slider-image-box' style={{
                        background: 'url("https://s3.ap-south-1.amazonaws.com/skill-india-dev/to_set/bannerimages/jpeg/24/9a79a3d5-bde3-4645-8ae4-eea8b85d0878.jpg?response-content-disposition=inline&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240202T170101Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA3OJCFBJTPLAN4OGU%2F20240202%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=9a67099f57ce1c699b3535cbd297ef6c38edf53d000cd63889b0c14372c05102")',

                    }}>
                    </div>
                </div>


            </Slider>

        </div>
    )
}
