import { I18nextProvider } from 'react-i18next';
import i18n from '@/services/i18n';

import '@/sass/styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default MyApp;
