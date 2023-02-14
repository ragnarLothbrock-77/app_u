import { useEffect, useState } from 'react';

export const BugButton = () => {
  const [error, setError] = useState(false);

  const handleBugError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <button onClick={handleBugError} type="button">
      Throw Error
    </button>
  );
};
