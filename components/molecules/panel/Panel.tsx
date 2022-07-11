import React, { FC } from 'react';

import styles from './Panel.module.scss';

export interface IPanel {
  children: React.ReactNode;
}

const Panel: FC<IPanel> = ({ children }: IPanel) => (
  <div data-testid="panel" className={styles.panel}>
    {children}
  </div>
);

export { Panel };
