import React from 'react'
import Header from "../Components/Headers"
import "../pages/Ranking.css"
const Ranking = () => {
  return (
    <div>
      <Header/>

       <div className="Creator">
         <h3 className="topCrt"> top creator</h3>
         <p className="chekOut"> Check out top ranking NFT artists on the NFT Marketplace.</p>
       </div>
              <table className='table'>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </table>
    </div>
  )
}

export default Ranking