import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  isOpened: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpened, onClose }: LoginModalProps) => {
  return (
    <Modal
      lazy
      isOpened={isOpened}
      onClose={onClose}
    >
      <LoginForm />
    </Modal>
  );
};
