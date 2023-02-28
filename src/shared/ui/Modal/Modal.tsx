import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode,
  isOpened?: boolean,
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpened,
    lazy,
    onClose,
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    if (isOpened) {
      setIsMounted(true);
    }
  }, [isOpened]);

  const handleCloseModal = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const handleKeyCloseModal = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  }, [handleCloseModal]);

  const handleContentDisableClose = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpened) {
      window.addEventListener('keydown', handleKeyCloseModal);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', handleKeyCloseModal);
    };
  }, [isOpened, handleKeyCloseModal]);

  const mods: Mods = {
    [cls.opened]: isOpened,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])}>
        <div className={cls.overlay} onClick={handleCloseModal}>
          <div className={cls.content} onClick={handleContentDisableClose}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
