import React from 'react';
//styles

type Props = {
  text: string,
  color: string,
  textColor: string,
}

const Curtain: React.FC<Props> = ({text, color, textColor}) => {



  return (
    <div className={'curtain'} style={{backgroundColor: color, color: textColor}}>
    <h2>
      {text}
    </h2>
  </div>
);
}

export default Curtain;