import React, { useState, useEffect } from 'react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import { updateOrder } from '../../Redux/Features/Admin/AdminSlice';

const OrderDataRow = ({ order }) => {
  const { id, Num, customer, orderData, status } = order;
  const dispatch = useDispatch();

  const stat = ['pending', 'canceld', 'fulfiled'];
  const [statNum, setStatNum] = useState(stat.indexOf(status));
  const [isEditing, setIsEditing] = useState(false);
  const handleOrderEdit = () => {
    setIsEditing(!isEditing);
  };
  const handleStatusChange = (num) => {
    let sum = statNum + num;
    if (sum > stat.length - 1) sum = 0;
    else if (sum < 0) sum = stat.length - 1;
    setStatNum(sum);
  };

  useEffect(() => {
    if (!isEditing) dispatch(updateOrder({ status: stat[statNum], id }));
  }, [isEditing]);

  return (
    <tr key={id}>
      <td style={{ minWidth: '7rem' }}>{id}</td>
      <td style={{ minWidth: '7rem' }}>{Num}</td>
      <td style={{ minWidth: '7rem' }}>{customer}</td>
      <td style={{ minWidth: '7rem' }}>{orderData}</td>
      {isEditing ? (
        <td style={{ minWidth: '7rem' }}>
          <button
            className='btn btn-outline-ligh'
            onClick={() => {
              handleStatusChange(-1);
            }}>
            <MdNavigateBefore />
          </button>
          {stat[statNum]}
          <button
            className='btn btn-outline-ligh'
            onClick={() => {
              handleStatusChange(1);
            }}>
            <MdNavigateNext />
          </button>
        </td>
      ) : (
        <td style={{ minWidth: '7rem' }}>{status}</td>
      )}
      <td style={{ minWidth: '7rem' }}>
        <button onClick={handleOrderEdit} className='btn btn-warning'>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </td>
    </tr>
  );
};

export default OrderDataRow;
