import { useEffect, useState } from "react";
import { getGifts } from '../helpers/getGifs';


export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true    
    });

    // Los efectos no pueden ser async
    useEffect(()=>{
        getGifts(category)
            .then(imgs => {
                setstate({
                    data: imgs,
                    loading: false
                });
            });
    }, [category])


    return state; // {data:[], loading: true}
}