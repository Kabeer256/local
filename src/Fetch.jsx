import { useState, useEffect } from "react";
function Fetch(){
    const [data1, setData1] = useState([]);
    const [name, setName] = useState(""); 
    const [category, setCategory] = useState("");

    function onChangeName  (e){ 
        setName(e.target.value)
    };
    function onChangeCategory  (e){
        setCategory(e.target.value)
    };

    const filteredData = data1.filter((item) =>{
        return(
        item.title.toLowerCase().includes(name.toLowerCase()) || 
        (item.category === category) || (category === ""))}
    );

    const newTable = filteredData.map((item) =>(
        <tr>
            <td>{item.title}</td>
            <td>${item.price}</td>
            <td>{item.category}</td>
        </tr>
    ))


    useEffect(() => {
        fetch("https://fakestoreapi.com/products/").
        then((res)=> res.json()).
        then((data) => setData1(data)).
        catch((err) => console.error(err));
    },[])

    return(
        <div>
            <input type="text" placeholder="Enter Name" onChange={onChangeName}/>
            <select value={category} onChange={onChangeCategory}>
                <option value="">Select Category</option>
                <option value="electronics">Electronics</option>
                <option value="men's clothing">Clothes</option>
                <option value="jewelery">Jewelery</option>
            </select>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {newTable.length > 0 ? newTable : <tr><td colSpan="3">No Products Found</td></tr>}
                </tbody>
            </table>

        </div>
    )

}
// create a funtion that concate two strings



export default Fetch;