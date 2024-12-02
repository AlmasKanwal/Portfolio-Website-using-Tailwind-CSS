import React from 'react';

const Button = ({ text, link, className }: { text: string, link: string, className: string }) => {
  return (
    <a href={link} className={className}>{text}</a>
  );
}

export default Button;
