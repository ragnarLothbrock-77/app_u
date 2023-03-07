import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

interface SelectOption {
  value: string,
  content: string,
}

interface SelectProps {
  className?: string,
  label?: string,
  options?: SelectOption[],
  value?: string,
  onChange?: (value: string) => void;
  readonly?: boolean,
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    value,
    readonly,
    onChange,
  } = props;

  const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const optionsList = useMemo(() => {
    return options?.map((opt) => (
      <option
        className={cls.option}
        value={opt.value}
        key={opt.value}
      >
        {opt.content}
      </option>
    ));
  }, [options]);

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      {
        label && (
          <span className={cls.label}>{label}</span>
        )
      }
      <select
        disabled={readonly}
        className={cls.select}
        value={value}
        onChange={onChangeSelectHandler}
      >
        {optionsList}
      </select>
    </div>
  );
});
