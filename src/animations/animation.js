
import {  Power0 } from 'gsap';



const show = (params) => {
    return params.tl
    .to(params.elem, 0.2, {
        autoAlpha: 0,
        ease: Power0.easeInOut
    })
    .to(params.elem,0.2,{
        display:'none'
    })
    .to(params.elem2,0.2,{
        backgroundColor:'#ff0045',
        borderRadius:'2px'
    })
    .to(params.elem2,0.1,{
        width:'500px'
    })
    .to(params.elem3,0.2,{
        autoAlpha:1,
        visibility:'visible',
        display:'flex'
    })
}


export const animation = {
    show:show
}