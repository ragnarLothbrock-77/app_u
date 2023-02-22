import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
  loginByUsername,
} from '../../model/services/loginByUsername/loginByUsername';
import {
  getLoginState,
} from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    password,
    username,
    isLoading,
    error,
  } = useSelector(getLoginState);

  const changeUsernameHandler = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const changePasswordHandler = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const loginClickHandler = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text title={t('Authorization Form')} />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        autoFocus
        placeholder={t('Type username')}
        type="text"
        className={cls.input}
        onChange={changeUsernameHandler}
        value={username}
      />
      <Input
        placeholder={t('Type password')}
        type="text"
        className={cls.input}
        onChange={changePasswordHandler}
        value={password}
      />
      <Button
        disabled={isLoading}
        theme={ButtonTheme.OUTLINE}
        className={cls.loginButton}
        onClick={loginClickHandler}
      >
        {t('Sign In')}
      </Button>
    </div>
  );
};
