/* eslint-disable react/jsx-curly-newline */
import React, { memo, useEffect, useState } from 'react';

import initialLogo from '../../../assets/base.svg';
import initialInfo from '../../../fixture/card';
import Card from '../../molecules/Card';
import styles from './styles.module.css';
import { MAX_LOGO_WIDTH, MAX_LOGO_HEIGHT } from '../../../constants/size';

const HomePage: React.FC = () => {
  const [cardInfo, setCardInfo] = useState(initialInfo);

  useEffect(() => {
    const image = new Image();
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');

    image.src = initialLogo;
    image.onload = (): void => {
      c.width = image.naturalWidth;
      c.height = image.naturalHeight;
      if (ctx) {
        ctx.drawImage(image, 0, 0);
        c.toBlob(async (blob) => {
          const bmpObj = await window.createImageBitmap(
            blob as ImageBitmapSource
          );
          setCardInfo((prevInfo) => ({ ...prevInfo, logo: bmpObj }));
        });
      }
    };
  }, []);

  const onLogoFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    if (!e.currentTarget.value) {
      return;
    }
    if (!e.currentTarget.files || e.currentTarget.files.length > 1) {
      return;
    }

    const file = e.currentTarget.files[0];

    const bmpObj = await window.createImageBitmap(file);
    setCardInfo((prevInfo) => ({ ...prevInfo, logo: bmpObj }));
  };

  return (
    <main>
      <Card cardInfo={cardInfo} />

      <form id="form" className={styles.form}>
        <label htmlFor="form" className={styles.label}>
          ロゴ(幅
          {MAX_LOGO_WIDTH}
          px、高さ
          {MAX_LOGO_HEIGHT}
          px以上は切り取られます):
        </label>
        <input type="file" accept="image/*" onChange={onLogoFileChange} />
        <label htmlFor="role" className={styles.label}>
          肩書:
          <input
            id="role"
            placeholder={initialInfo.role}
            onChange={(e): void =>
              setCardInfo((prevInfo) => ({
                ...prevInfo,
                role: e.currentTarget.value,
              }))
            }
          />
        </label>
        <label htmlFor="name" className={styles.label}>
          名前:
          <input
            id="name"
            placeholder={initialInfo.name}
            onChange={(e): void =>
              setCardInfo((prevInfo) => ({
                ...prevInfo,
                name: e.currentTarget.value,
              }))
            }
          />
        </label>

        <label htmlFor="realName" className={styles.label}>
          本名:
          <input
            id="realName"
            placeholder={initialInfo.realName}
            onChange={(e): void =>
              setCardInfo((prevInfo) => ({
                ...prevInfo,
                realName: e.currentTarget.value,
              }))
            }
          />
        </label>
        <label htmlFor="email" className={styles.label}>
          メールアドレス:
          <input
            id="email"
            type="email"
            placeholder={initialInfo.email}
            onChange={(e): void =>
              setCardInfo((prevInfo) => ({
                ...prevInfo,
                email: e.currentTarget.value,
              }))
            }
          />
        </label>

        <label htmlFor="url" className={styles.label}>
          ウェブサイト:
          <input
            id="url"
            type="url"
            placeholder={initialInfo.website}
            onChange={(e): void =>
              setCardInfo((prevInfo) => ({
                ...prevInfo,
                website: e.currentTarget.value,
              }))
            }
          />
        </label>

        <label htmlFor="homeAddress" className={styles.label}>
          大体の居住地:
          <input
            id="homeAddress"
            placeholder={initialInfo.homeAddress}
            onChange={(e): void =>
              setCardInfo((prevInfo) => ({
                ...prevInfo,
                homeAddress: e.currentTarget.value,
              }))
            }
          />
        </label>

        <label htmlFor="color" className={styles.label}>
          背景色:
          <input
            id="color"
            placeholder={initialInfo.colorHEX}
            onChange={(e): void =>
              setCardInfo((prevInfo) => ({
                ...prevInfo,
                colorHEX: e.currentTarget.value,
              }))
            }
          />
        </label>
      </form>
    </main>
  );
};

export default memo(HomePage);
