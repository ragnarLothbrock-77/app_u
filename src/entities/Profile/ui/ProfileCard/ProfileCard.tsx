import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import {
  getProfileData
} from 'entities/Profile/model/selectors/getProfileData/getProfileData';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({className}: ProfileCardProps) => {
  const { t } = useTranslation('profile')
  const data = useSelector(getProfileData);

  return (
    <div className={classNames(cls.profilePage, {}, [className])}>
      <div className={cls.title}>
        <Text title={t('User profile')} />
        <Button
          className={cls.refactorBtn}
          theme={ButtonTheme.OUTLINE}
        >
          {t('Change data')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          className={cls.input}
          value={data?.username}
          placeholder={t('Your firstname')}
        />
        <Input
          className={cls.input}
          value={data?.lastname}
          placeholder={t('Your lastname')}
        />
      </div>
    </div>
  );
};
