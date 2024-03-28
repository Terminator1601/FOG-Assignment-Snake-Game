import React from 'react';
import "./instruction.css"

const instruction = () => {
  return (
    <div className='instruction'>
      <h3 className="text-red-50">Instructions</h3>
      <p>
        The Diamond with green background is the food of the snake, diamond with
        purple background is a food with a effect of reversing the direction.
      </p>
    </div>
  );
};

export default instruction;
