import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChangeInputHandler = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      {t('Главная страница')}
      <Input
        placeholder="Tap the text"
        value={value}
        onChange={onChangeInputHandler}
      />
    </div>
  );
};

export default MainPage;
