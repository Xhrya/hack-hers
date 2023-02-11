import { Link } from 'react-router-dom';

const OrderHistory = ({items, title, handleDelete}) =>
{
return(
    <div className="OrderHistory">
        {items.map(item => (
        <div className="item-preview" key={item.id} >
          <Link to={`/items/${item.id}`}>
            <h2>{ item.title }</h2>
            <p>Written by { item.author }</p>
            <button onClick={() => handleDelete(item.id)}>delete item</button>
          </Link>
         
        </div>
      ))}




    </div>
);


}
export default OrderHistory;





