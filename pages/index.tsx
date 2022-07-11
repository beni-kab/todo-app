import React from 'react';

import { Panel } from '@/components/molecules/panel';
import styles from '@/sass/pages/home.module.scss';

/**
 * This is the index page
 * @returns This is the initial page
 */

export default function index() {
  return (
    <main className={styles.home} data-testid="index">
      <Panel>
        <h3>This is a super cool project</h3>
      </Panel>
    </main>
  );
}
