import React from 'react';
import Block from '../layout/block';
import NumberBlock from './numberBlock';

const Overview: React.FC = () => {
  return (
    <Block>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">نمای کلی</h2>
        <div className="grid grid-cols-4 gap-4">
          <NumberBlock number={5} title="مجموع" color="blue" />
          <NumberBlock number={10} title="درانتظار" color="yellow" />
          <NumberBlock number={15} title="درحال انجام" color="green" />
          <NumberBlock number={15} title="تکمیل شده" color="red" />
        </div>
      </div>
    </Block>
  );
};

export default React.memo(Overview);