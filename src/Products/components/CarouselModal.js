import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default ({ open, onClose, product }) => {

    if (open) {
        document.getElementsByTagName('body')[0].classList.add('modal-open');
    } else {
        document.getElementsByTagName('body')[0].classList.remove('modal-open');
    }

    return <>
        {
            open && <div className="modal-backdrop show" onClick={onClose} />
        }
        <div data-testid="modal" className={`modal fade ${open && 'show'}`} tabIndex="-1" role="dialog" style={{ display: open ? 'block' : 'none', pointerEvents: 'none'}}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{ position: 'absolute', top: 10, right: 10, zIndex: 100 }} onClick={onClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
                    {
                        open && product && <Carousel autoPlay infiniteLoop>
                            {
                                product.images.length > 0 ?
                                product.images.map(image => <div key={image.href}>
                                    <img alt="" src={image.href} />
                                </div>)
                                :
                                <div>
                                    <img alt="" src={product.hero.href} />
                                </div>
                            }
                        </Carousel>
                    }
                </div>
            </div>
        </div>
    </>
}