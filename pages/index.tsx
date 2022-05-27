import React from 'react';
import { useTranslation } from 'react-i18next';

import { Typography } from '@/components/atoms/typography';
import { Panel } from '@/components/molecules/panel';
import { FontSize, FontWeight } from '@/constants';

import styles from '@/sass/pages/home.module.scss';

/**
 * This is the index page
 * @returns This is the initial page
 */

export default function index() {
  const { t } = useTranslation('home', { useSuspense: false });
  return (
    <main className={styles.home}>
      <Typography
        text={t('text')}
        fontSize={FontSize.Medium}
        fontWeight={FontWeight.SemiBold}
      />
      <br />
      <Panel>
        <Typography
          text="Learn CI/CD"
          fontSize={FontSize.XMedium}
          fontWeight={FontWeight.Light}
        />
      </Panel>
      <Panel>
        <Typography
          text="Deploy app to Github"
          fontSize={FontSize.XMedium}
          fontWeight={FontWeight.Light}
        />
      </Panel>
    </main>
  );
}
