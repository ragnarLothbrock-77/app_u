import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from '../Icon/Icon';
import cls from './Code.module.scss';
import CopyIcon from '../../assets/icons/lst.svg';

interface CodeProps {
  className?: string,
  text: string
}

export const Code = memo(({ className, text }: CodeProps) => {
  const onCopyHandler = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button onClick={onCopyHandler} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
