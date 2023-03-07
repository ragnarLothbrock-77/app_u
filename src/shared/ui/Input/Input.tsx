import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
  InputHTMLAttributes,
  memo,
  SyntheticEvent, useEffect, useRef,
  useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps{
  className?: string,
  value?: string | number,
  onChange?: (value: string) => void,
  autoFocus?: boolean,
  readonly?: boolean,
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    autoFocus,
    type = 'text',
    readonly,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const ref = useRef<HTMLInputElement>(null);

  const isCaretVissible = isFocused && !readonly;

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  const onBlurHandler = () => {
    setIsFocused(false);
  };

  const selectInputHandler = (e: SyntheticEvent<HTMLInputElement, Event>) => {
    setCaretPosition(e?.currentTarget?.selectionStart || 0);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={classNames(cls.inputWrapper, mods, [className])}>
      {
        placeholder && (
          <div className={cls.placeholder}>
            {`${placeholder}>`}
          </div>
        )
      }
      <div className={cls.inputWithCaretWrapper}>
        <input
          ref={ref}
          autoFocus={autoFocus}
          type={type}
          className={classNames(cls.input, {}, [className])}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onSelect={selectInputHandler}
          readOnly={readonly}
          {...otherProps}
        />
        {
          isCaretVissible && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 10}px` }}
          />
          )
        }
      </div>
    </div>
  );
});
