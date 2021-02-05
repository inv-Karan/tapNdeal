import React from 'react'
// import dataLoader from '../utility/dataLoader'
// import productLoader from '../utility/productLoader'
import data from '../component/data'

export default function homePage() {

    return (
        <div className="main-container">
            {data.map((user) => (
                <div className="gallery-container">
                    <img key={user.id} src={user.image} width="300" height="300" ></img>
                    <br />
                    <label>
                        <p align="center">
                            Name: <span>{user.name}</span>
                            <br />
                            Price: <span>{user.price}</span>
                        </p>
                    </label>
                    <button type="submit" >Buy_In_Stock: </button>
                    {user.product.map((sub) =>
                        <div>
                            <br />
                            <table
                                width="100px" align="center">
                                <tr>
                                    <th>Color:</th>
                                    <td>{sub.colors}</td>
                                </tr>
                                <tr>
                                    <th>Quantity:</th>
                                    <td>{sub.qty}</td>
                                </tr>
                            </table>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};