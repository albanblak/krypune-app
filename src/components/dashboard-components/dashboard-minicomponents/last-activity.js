



const LastActivity = () => {


   return(
       <div  style={{width: '100%', height: '140px', backgroundColor: 'white'}}>
                <div style={{height: '65px', borderBottom: '1px solid #eaeaea', marginTop: 'auto', textAlign: 'left', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                    <h3 style={{marginLeft: '30px'}}>Aktivitet e Fundit</h3>
                </div>

                <div style={{height: '75px', display: 'flex', justifyContent:'flex-start', alignItems: 'center', marginLeft: '30px'}}>
                    <p>You don't have any activities logged yet.</p>
                </div>
       </div>
   )

}
export default LastActivity