import React, { useState } from 'react';
// import '../assests/css/reset.css';
import './style.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const Main = () => {
  const [form, setForm] = useState({
    username: '',
    age: '',
    addr: '',
    tel: '',
    job: '',
    email: '',
    sex: '',
    inter: '',
  });
  const [step, setStep] = useState(1);

  //form.username 구조
  const { username, age, addr, tel, job, email, sex, inter } = form;
  const changeInput = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onStep = (num) => {
    setStep(num);
  };

  const onNext = () => {
    setStep(step + 1);
  };
  const onPrev = () => {
    setStep(step - 1);
  };

  return (
    <div className='wrap'>
      {step === 1 && (
        <Step1
          form={form}
          onStep={onStep}
          onNext={onNext}
          changeInput={changeInput}
        />
      )}

      {step === 2 && (
        <Step2
          form={form}
          changeInput={changeInput}
          onPrev={onPrev}
          onNext={onNext}
          onStep={onStep}
        />
      )}

      {step === 3 && (
        <Step3
          {...form}
          changeInput={changeInput}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
      {step === 4 && <Step4 username={username} />}
    </div>
  );
};

export default Main;
