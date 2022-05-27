import React, { FC } from 'react';
import cx from 'classnames';

import { FontSize, FontWeight } from '@/constants';
import { IFontSize, IFontWeight } from '@/types';

import styles from './Typography.module.scss';

export interface ITypography {
  text: string;
  fontSize?: IFontSize;
  fontWeight?: IFontWeight;
  uppercase?: boolean;
  className?: string;
}

const Typography: FC<ITypography> = ({
  text,
  fontSize = FontSize.Medium,
  fontWeight = FontWeight.Regular,
  uppercase,
  className,
}: ITypography) => {
  const typographyProps = cx(
    styles.typography,
    {
      [styles[`typography--${fontSize}`]]: true,
      [styles[`typography--${fontWeight}`]]: true,
      [styles['typography--uppercase']]: uppercase,
    },
    className
  );
  return (
    <p data-testid="typography" className={typographyProps}>
      {text}
    </p>
  );
};

export { Typography };
