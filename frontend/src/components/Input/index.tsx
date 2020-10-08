import React, { ComponentType, InputHTMLAttributes, useCallback, useRef, useState } from 'react';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ComponentType<IconBaseProps>;
  isPassword?: boolean;
}

const Input: React.FC<IProps> = ({ icon: Icon, isPassword = false, ...rest }) => {

  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(Boolean(inputRef.current?.value))
  }, []);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={16} />}
      <input 
        {...rest} 
        ref={inputRef} 
        type={showPassword ? 'text' : rest.type} 
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}  
      />
      {
        isPassword && (
          showPassword ? (
            <FaEyeSlash 
              size={16} 
              color="var(--primary)" 
              onClick={() => setShowPassword(false)} 
              className="icon-click" 
            />
          ) : (
              <FaEye 
                size={16} 
                color="var(--primary)" 
                onClick={() => setShowPassword(true)} 
                className="icon-click" 
              />
            )
        )
      }
    </Container>
  );
};

export default Input;
