import { BiAddToQueue, BsSearch, FaUserFriends} from "react-icons/all";


const Sifunksionon = () => {


   const siFunksiononItems = [
       {id: 0, icon: <BiAddToQueue className={'sifunksionon-icon'} />, title: 'JEP PUNE', text: 'Posto punë, pa pagesë. ' +
               'Ju automatikisht do të ekspozoheni në kategorinë e duhur,' +
               ' ku kandidatët që kanë interesim do të kenë mundësinë të aplikojn.!' },
       {id: 1, icon:<BsSearch className={'sifunksionon-icon'}/> , title: 'ZGJEDH KANDIDATIN', text: 'Shfletoni gjitha aplikimet,' +
               ' Bisedoni në kohë-reale me kandidatët,' +
               ' Krahasoni kandidatët dhe Zgjedhni më të mirin' },
       {id: 2, icon:<FaUserFriends className={'sifunksionon-icon'}/>, title: 'PAGUAJ SHËRBIMIN', text: 'Sapo të finalizohet projekti ' +
               'sigurohu që të përmbushësh' +
               ' obligimin financiar sipas marrëveshjes me kandidatin.' +
               ' Paguaj me Transfer bankar apo Kesh. ' }
   ]


    const populloSF = (item) => {
        return(
            <div  key={item.id} className={'sifunksionon-body-card'}>
                <a href={'/#'} >{item.icon} </a>
                <p className={'sifunksionon-body-card-title'}> {item.title}</p>
                <p>{item.text}</p>
            </div>
        )
    }



    return(
        <div className={'sifunksionon-container '}>

            <div className={'sifunksionon-wraper '}>
                <p className={'sifunksionon-title category-title'}>Si Funksionon</p>

                <div className={'sifunksionon-body'} >
                    {siFunksiononItems.map((item) => populloSF(item))}
                </div>

            </div>


        </div>
    )

}


export default Sifunksionon;