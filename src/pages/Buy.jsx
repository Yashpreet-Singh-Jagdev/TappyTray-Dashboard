import { useState, useEffect } from 'react';

const Buy = () => {

const [minus, setMinus] = useState(0);  
const [data, setData] = useState(() => {
            const saved = localStorage.getItem("inventory");
            return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("inventory", JSON.stringify(data));
    }, [data]);

    const handleBuy = (item) => {
        console.log(item);
        item.quantity = item.quantity - minus;
        setData([...data.filter((data)=> data.name !== item.name), item]);
        setMinus(0);
    }

  return (
    <div>
          <h1 className="bg-slate-300 h-12 flex items-center justify-center text-lg font-semibold">Buying Section</h1>
            {data[0]
         &&
        <div>
        <table className="table-auto w-3/5 mx-auto my-4 border-2 border-gray-300 rounded-lg">
            <thead>
                <tr>
                    <th className="border-2 border-gray-300 p-2 bg-blue-200">ID</th>
                    <th className="border-2 border-gray-300 p-2 bg-blue-200">Name</th>
                    <th className="border-2 border-gray-300 p-2 bg-blue-200">Select Quantity</th>
                    <th className="border-2 border-gray-300 p-2 bg-blue-200">Unit</th>
                    <th className="border-2 border-gray-300 p-2 bg-blue-200">Operation</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    item.quantity > 0 &&
                    <tr key={index}>
                        <td className="border-2 border-gray-300 p-2 text-center">#{index+1}</td>
                        <td className="border-2 border-gray-300 p-2 text-center">{item.name}</td>
                        <td className="border-2 border-gray-300 p-2 text-center">
                            <input type="number" placeholder="0" min="0" max={item.quantity} onChange={(e)=>setMinus(e.target.value)}></input>
                        </td>
                        <td className="border-2 border-gray-300 p-2 text-center">{item.unit}</td>
                        <td className="border-2 border-gray-300 p-2 text-center">
                            <button className="bg-green-500 text-white rounded-md p-1 m-2 w-20" onClick={()=>handleBuy(item)}>Buy</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>}
    </div>
  )
}

export default Buy
