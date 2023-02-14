import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageErrorBoundary.module.scss';

interface PageForErrorBoundaryProps {
  className?: string;
}

export const PageForErrorBoundary = ({ className }: PageForErrorBoundaryProps) => {
  const { t } = useTranslation();

  const handleReloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.pageErrorBoundary, {}, [className])}>
      <span>{t('Something went wrong')}</span>
      <button onClick={handleReloadPage} type="button">{t('Reload page')}</button>
    </div>
  );
};
