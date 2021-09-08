import Ripples from "react-ripples";
import React, {useEffect} from "react";
import {init} from "ityped";


const Banner = () => {

    useEffect(() => {
        const myElement = document.querySelector("#banner-text-writing");
        init(myElement,
            {showCursor: false,
                strings: [' Punesoni eksperte ose punsohuni në copywriting|'
                    , ' Punesoni eksperte ose punsohuni në fotografi|'
                    ,'Punesoni eksperte ose punsohuni në dizajn grafik|']}
        )
    },[])

   return(
       <div className={'banner'} >
           <div className={'banner-upper'}  >
               <p className={'banner-upper-title'} >Kryj Punë ose Gjej Punë</p>
               <p  id={'banner-text-writing'} >Punetore </p>

               <div className={'banner-ripples-container'} >
                   <div className={'banner-ripples'} >
                       <Ripples>
                           <p> Cfare pune po kerkoni? </p>
                       </Ripples>
                   </div>

                   <div  className={'banner-ripples'} >
                       <Ripples>
                           <p> Ne cilin vend? </p>
                       </Ripples>
                   </div>
               </div>


               <div className={'search-container'} >
                   <input className={'search-input'}
                          type={'text'}
                          placeholder={'Cilen fushe, Aftesia'}/>
                   <input
                       className={'search-input'}
                       type={'text'}
                       placeholder={'Qyteti, Shteti ose Zip kodi'}/>
                   <a
                       className={'search-submit'}
                       href={'/#'} >Kerko
                   </a>
               </div>

               <p  className={'advanced-search-link'} >
                   Keni nevojë për më shumë opsione kërkimi?
                   <a href={'/#'} >Kerkim i avancuar</a>
               </p>

           </div>
       </div>
   )


}

export  default Banner;