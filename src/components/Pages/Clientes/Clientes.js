import React, {lazy, Suspense} from 'react';
import client1 from '../../../assets/images/clients/client1.png';
import client2 from '../../../assets/images/clients/client2.png';
import client3 from '../../../assets/images/clients/client3.png';
import client4 from '../../../assets/images/clients/client4.png';
import client5 from '../../../assets/images/clients/client5.png';
import client6 from '../../../assets/images/clients/client6.png';
import client7 from '../../../assets/images/clients/client7.png';
import client8 from '../../../assets/images/clients/client8.png';
import client9 from '../../../assets/images/clients/client9.png';
import client10 from '../../../assets/images/clients/client10.png';
import client11 from '../../../assets/images/clients/client11.png';
import client12 from '../../../assets/images/clients/client12.png';
import client13 from '../../../assets/images/clients/client13.png';
import client14 from '../../../assets/images/clients/client14.png';
import client15 from '../../../assets/images/clients/client15.png';
import client16 from '../../../assets/images/clients/client16.png';
import client17 from '../../../assets/images/clients/client17.png';
import client18 from '../../../assets/images/clients/client18.png';
import client19 from '../../../assets/images/clients/client19.png';
import PhoneCarouselArray from '../../CarouselContainer/PhoneCarousel/PhoneCarouselArray';
import BrandCarouselArray from '../../CarouselContainer/BrandCarousel/BrandCarouselArray';
import CommentsCarouselArray from '../../CarouselContainer/CommentsCarousel/CommentsCarouselArray';
import './Clientes.css';
const Carousel = lazy(() => import('../../CarouselContainer/Carousel/Carousel'));

const Clientes = () => {
    return (
        <div className='clientes container'>
            <div className='icons' data-aos="fade-up">
                <img src={client1} alt='cliente' width='158' height='158'></img>
                <img src={client2} alt='cliente' width='158' height='158'></img>
                <img src={client3} alt='cliente' width='158' height='158'></img>
                <img src={client4} alt='cliente' width='158' height='158'></img>
                <img src={client5} alt='cliente' width='158' height='158'></img>
                <img src={client6} alt='cliente' width='158' height='158'></img>
                <img src={client7} alt='cliente' width='158' height='158'></img>
                <img src={client8} alt='cliente' width='158' height='158'></img>
                <img src={client9} alt='cliente' width='158' height='158'></img>
                <img src={client10} alt='cliente' width='158' height='158'></img>
                <img src={client11} alt='cliente' width='158' height='158'></img>
                <img src={client12} alt='cliente' width='158' height='158'></img>
                <img src={client13} alt='cliente' width='158' height='158'></img>
                <img src={client14} alt='cliente' width='158' height='158'></img>
                <img src={client15} alt='cliente' width='158' height='158'></img>
                <img src={client16} alt='cliente' width='158' height='158'></img>
                <img src={client17} alt='cliente' width='158' height='158'></img>
                <img src={client18} alt='cliente' width='158' height='158'></img>
                <img src={client19} alt='cliente' width='158' height='158'></img>
            </div>
            <div className='my-156'>
                <Suspense fallback={null}>
                    <Carousel slides={BrandCarouselArray()} perPage={1} perPageBreakPoint={1} />
                </Suspense>
            </div>
            <div className='my-156'>
                <Suspense fallback={null}>
                    <Carousel slides={PhoneCarouselArray()} perPage={3} perPageBreakPoint={1} />
                </Suspense>
            </div>
            <div className='my-156'>
                <h2 className='title-72'>Comentarios</h2>
                <Suspense fallback={null}>
                    <Carousel slides={CommentsCarouselArray()} perPage={1} perPageBreakPoint={1} />
                </Suspense>
            </div>
        </div>
    )
}

export default Clientes;
