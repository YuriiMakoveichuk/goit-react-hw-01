const TransactionHistory = ({items}) => {
    return (
        <table  className="table">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

       <tbody>
           {items.map((item) => {
               return <tr key={item.id} className="item-row">
                   <td>{item.type}</td>
                   <td>{item.amount}</td>
                   <td>{item.currency}</td>
               </tr>
           })}
        </tbody>
        </table>
    );

};

export default TransactionHistory;
