import KerkesatCard from "./mini-components/kerkesat-card";



const Kerkesat  = () => {

   const kerkesat = [
       {
           id: 0,
           title: 'WordPress Developer',
           logo: 'programmer',
           company: 'United Pixels',
           location: 'Kudo',
           salary: '500.00',
           rating: '0',
           nrRating: '0',
           link: '/posts?id=0',
       },
       {
           id: 1,
           title: 'Programues PHP/LARAVEL',
           logo: 'programmer',
           company: 'Alba-Media',
           location: 'Prishtine',
           rating: '0',
           nrRating: '0',
           link: '/posts?id=1',
       },
       {
           id: 2,
           title: 'Motion Designer',
           logo: 'designer',
           company: 'FlyPrishtina',
           location: 'Kudo',
           salary: '150.00',
           rating: '5',
           nrRating: '5',
           link: '/posts?id=2',
       },
       {
           id: 3,
           title: 'Partener ne kompanin Gjermane',
           company: 'LR HEALTH & BEAUTY SYSTEMS',
           location: 'Prishtine',
           rating: '0',
           nrRating: '0',
           link: '/posts?id=3',
       },
   ]





   return(

           <div className={'kerkesat'}>
               <div className={'kerkesat-wrapper'}>
                   <div className={'kerkesat-title'}>
                       <h2>Kerkesat e Fundit</h2>
                   </div>
                   <div className={'kerkesat-body'}>
                       <div className={'kerkesat-body-wall'}>
                           { kerkesat.map((post) => {
                               return (
                                   <KerkesatCard key={post.id}
                                                 title={post.title}
                                                 logo={post.logo}
                                                 company={post.company}
                                                 location={post.location}
                                                 salary={post.salary}
                                                 rating={post.rating}
                                                 nrrating={post.nrRating}
                                                 link={post.link}
                                   />
                               )
                           }) }
                       </div>
                       <div className={'kerkesat-body-ads'} style={{marginTop: '30px'}}>
                           <img alt={'something'} src={'http://krypune.com/wp-content/uploads/2020/11/ipad.png'} width={'400px'}/>
                       </div>
                   </div>
               </div>
           </div>
   )

}


export default Kerkesat;