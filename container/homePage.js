import React from 'react'
// import dataLoader from '../utility/dataLoader'
// import productLoader from '../utility/productLoader'
import data from '../component/data'

// export default function homePage() {
//     return (
//         <div className="main-container">
//             {data.map((a) => 
//             <div className="gallary-container">
//                 <img key={a.id} src={a.image} 
//                 width= "300px" height= "300px" align= "center"
//                 />
//                 <br />
//                 <label>
//                     <p align="center">
//                         <span name={a.name}>Name</span>
//                         <br></br>
//                         <span price={a.price}>Price</span>
//                     </p>
//                 </label>
//                 <table 
//                 width= "100px" align= "center"
//                 >
//                     <tr>
//                         <th>Colors</th>
//                         <th>Quantity</th>
//                     </tr>
//                         {
//                             a.product.map((a) =>
//                                 <tr>
//                                     <td colors={a.colors} />
//                                     <td qty={a.qty} />
//                                 </tr>
//                             )
//                         }
//                 </table>
//             </div>
//             )}
//         </div>
//     )
// }

export default function homePage() {
  
    return (
      <div className="main-container">
        {data.map((user) => (
          <div className="gallery-container">
         <img key={user.id} src={user.image} width="300" height="300"></img>
         <br />
         Name: 
          {user.name}
          <br />
          Price: 
          {user.price}
          {user.product.map((sub) =>
            <div>
            <br />
            Color: 
            {sub.colors}
            <br />
            Qunatity: 
            {sub.qty}
            </div>
            )}
          </div>
        ))}
      </div>
    );
  };