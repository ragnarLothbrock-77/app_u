import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState } from 'react';
import { t } from 'i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  const handleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={handleModal}
      >
        {t('Sign In')}
      </Button>
      <Modal
        /* eslint-disable-next-line react/no-children-prop */
        children="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Dolorem id ipsum, minima molestiae nesciunt quae quaerat quam sint suscipit!
         Aut deserunt distinctio eligendi error eveniet nihil soluta! Fugiat, illo, ut?"
        isOpened={isAuthModal}
        onClose={handleModal}
      />
      {/* eslint-disable-next-line react/button-has-type */}
    </div>
  );
};
