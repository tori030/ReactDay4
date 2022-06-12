import React, { useState } from 'react';
import Test7Sub from './Test7Sub';

const dataList = [
  { id: 1, name: '김진영' },
  { id: 2, name: '김유종' },
  { id: 3, name: '김수진' },
  { id: 4, name: '신종규' },
  { id: 5, name: '권가영' },
];

const Test7 = () => {
  const [data, setData] = useState(dataList);

  const onDel = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const onAdd1 = () => {
    setData([
      ...data,
      {
        id: 6,
        name: '진찌룽',
      },
    ]);
  };

  const onMod = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, name: '태리친구' } : item
      )
    );
  };

  const onAdd2 = (name) => {
    setData([
      ...data,
      {
        id: 7,
        name,
      },
    ]);
  };

  return (
    <div>
      <ul>
        {/* map */}
        {data.map((item) => (
          <li key={item.id}>
            {item.id} / {item.name}
          </li>
        ))}
      </ul>
      {'////////////////////////'}
      <Test7Sub onDel={onDel} onAdd1={onAdd1} onAdd2={onAdd2} onMod={onMod} />
    </div>
  );
};

export default Test7;
