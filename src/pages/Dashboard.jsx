import { useState, useEffect } from 'react';
    

const Dashboard = () => {

    const [data, setData] = useState(() => {
            const saved = localStorage.getItem("inventory");
            return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("inventory", JSON.stringify(data));
    }, [data]);

    const [name, setName] = useState('');
    const [category, setCategory] = useState('Vegetable');
    const [quantity, setQuantity] = useState(0);
    const [unit, setUnit] = useState('Nos');    

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setData([...data, {name,category,quantity,unit}]);
        setName('');
        setCategory('Vegetable');
        setQuantity(0);
        setUnit('Nos');
    }

    const handleDelete = (index) => {
        setData(data.filter((_, i) => i !== index));
    }


  return (
    <>
    <h1 className="bg-slate-300 h-12 flex items-center justify-center text-lg font-semibold">Inventory Dashboard</h1>
    <div className="border-2 border-gray-300 rounded-md p-1 m-2 w-3/5 flex items-center justify-center mx-auto">
        <form  onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Name" className="border-2 border-gray-300 rounded-md p-1 m-2 w-50" value={name}
            onChange={(e) => setName(e.target.value)}/>
            {/* <label for="category">Category :</label> */}
                <select name="category" id="category" className="border-2 border-gray-300 rounded-md p-1 m-2" value={category}
            onChange={(e) => setCategory(e.target.value)}>
                <option value="Vegetable">Vegetable</option>
                <option value="Fruit">Fruit</option>
                <option value="Dairy">Dairy</option>
                </select>
            <input type="number" placeholder="Qty" min="0" className="border-2 border-gray-300 rounded-md p-1 m-2 w-20" value={quantity}
            onChange={(e) => setQuantity(e.target.value)}/>
            <select name="unit" id="unit" className="border-2 border-gray-300 rounded-md p-1 m-2 w-20" value={unit}
            onChange={(e) => setUnit(e.target.value)}>
                <option value="Nos">Nos</option>
                <option value="litre">litre</option>
                </select>
            <button type="submit" className="bg-green-500 text-white rounded-md p-1 m-2 w-20">Create</button>
        </form>
        
    </div>

        {data[0]
         &&
        <div>
        <table className="table-auto w-3/5 mx-auto border-2 border-gray-300 rounded-lg">
            <thead>
                <tr>
                    <th className="border-2 border-gray-300 p-2 bg-blue-200">ID</th>
                    <th className="border-2 border-gray-300 p-2 bg-blue-200">Name</th>
                    <th className="border-2 border-gray-300 p-2 bg-blue-200">Category</th>
                    <th className="border-2 border-gray-300 p-2 bg-blue-200">Quantity</th>
                    <th className="border-2 border-gray-300 p-2 bg-blue-200">Unit</th>
                    <th className="border-2 border-gray-300 p-2 bg-blue-200">Task</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td className="border-2 border-gray-300 p-2 text-center">#{index+1}</td>
                        <td className="border-2 border-gray-300 p-2 text-center">{item.name}</td>
                        <td className="border-2 border-gray-300 p-2 text-center">{item.category}</td>
                        <td className="border-2 border-gray-300 p-2 text-center">{item.quantity}</td>
                        <td className="border-2 border-gray-300 p-2 text-center">{item.unit}</td>
                        <td className="border-2 border-gray-300 p-2 text-center">
                            <button className='mx-2 rounded-md p-2 text-center bg-red-300' onClick={()=>handleDelete(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>}
           
    </>
  )
}

export default Dashboard
