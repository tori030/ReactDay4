import React from 'react';

const Step1 = ({ form, changeInput, onNext, onStep }) => {
  const { username, age, addr, tel } = form;
  return (
    <>
      <p>
        <label>이름</label>:
        <input
          type='text'
          value={username}
          name='username'
          onChange={changeInput}
        />
      </p>
      <p>
        <label>나이</label>:
        <input type='text' value={age} name='age' onChange={changeInput} />
      </p>
      <p>
        <label>주소</label>:
        <input type='text' value={addr} name='addr' onChange={changeInput} />
      </p>
      <p>
        <label>연락처</label>:
        <input type='text' value={tel} name='tel' onChange={changeInput} />
      </p>

      <p>
        <button
          //  onClick={onNext}
          onClick={() => onStep(2)}
        >
          다음
        </button>
      </p>
    </>
  );
};

export default Step1;
