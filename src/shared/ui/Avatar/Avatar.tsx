import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string,
  src?: string,
  alt?: string,
  size?: number,
}

export const Avatar = ({
  className, src, alt, size,
}: AvatarProps) => {
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100,
    };
  }, [size]);

  return (
    <img
      style={styles}
      src={src}
      alt={alt}
      className={classNames(cls.avatar, {}, [className])}
    />
  );
};
