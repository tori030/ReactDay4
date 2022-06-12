import React,{useState} from 'react';
const Test1 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // event, evt , e
  const changeInput1 = (e) => {
    setUsername(e.target.value);
  };
  const changeInput2 = (e) => {
    const { value } = e.target;
    setPassword(value);
  };
  return (
    <div>
      <input type='test' value={username} onChange={changeInput1} />
      <input type='password' value={password} onChange={changeInput2} />
      <hr />
      <button disabled={password.length < 7}>로그인</button>
      <hr />
      {password.length > 6 ? (
        <button> 로그인</button>
      ) : (
        <button disabled> 로그인</button>
      )}
      <button>로그인</button>
    </div>
  );
};

export default Test1;
