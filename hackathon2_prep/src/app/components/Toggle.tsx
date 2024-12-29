"use client"
import { useState } from 'react';
import React from 'react'

const Toggle: React.FC = () => {
    const [isOn, setIsOn] = useState(false);
    return (
        <div
          className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
            isOn ? 'bg-blue-500' : ''
          }`}
          onClick={() => setIsOn(!isOn)}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
              isOn ? 'translate-x-6' : ''
            }`}
          ></div>
        </div>
      );
    };

export default Toggle
