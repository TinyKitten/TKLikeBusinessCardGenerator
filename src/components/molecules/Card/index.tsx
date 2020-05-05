import React, { memo, useEffect, useState } from 'react';
import Konva from 'konva';
import { Image, Layer, Rect, Stage, Text, Group } from 'react-konva';
import { CardInfo } from '../../../models/card';
import {
  STAGE_WIDTH,
  STAGE_HEIGHT,
  MAX_LOGO_HEIGHT,
  MAX_LOGO_WIDTH,
} from '../../../constants/size';

type Props = {
  cardInfo: CardInfo;
};

const Card: React.FC<Props> = ({ cardInfo }: Props) => {
  const [imageNode, setImageNode] = useState<Konva.Image | null>(null);

  useEffect(() => {
    if (imageNode) {
      imageNode.cache({});
    }
  }, [imageNode, cardInfo.logo]);

  return (
    <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT}>
      <Layer>
        <Rect
          x={0}
          y={0}
          width={STAGE_WIDTH}
          height={STAGE_HEIGHT}
          fill={cardInfo.colorHEX}
        />
        <Group x={60} y={STAGE_HEIGHT / 2.25}>
          <Text
            width={STAGE_WIDTH}
            x={0}
            y={0}
            fontSize={16}
            text={cardInfo.role}
            fill="#fff"
          />
          <Text
            width={STAGE_WIDTH}
            x={0}
            y={16 + 4}
            fontSize={32}
            fontStyle="bold"
            text={cardInfo.name}
            fill="#fff"
          />
        </Group>
        <Group x={60} y={STAGE_HEIGHT / 1.5}>
          <Text
            width={STAGE_WIDTH}
            x={0}
            y={0}
            fontSize={18}
            text={cardInfo.realName}
            fill="#fff"
          />
          <Text
            width={STAGE_WIDTH}
            x={0}
            y={18 + 4}
            fontSize={18}
            fontStyle="bold"
            text={cardInfo.email}
            fill="#fff"
          />
          <Text
            width={STAGE_WIDTH}
            x={0}
            y={18 * 2 + 4 * 2}
            fontSize={18}
            text={cardInfo.website}
            fill="#fff"
          />
          <Text
            width={STAGE_WIDTH}
            x={0}
            y={18 * 3 + 4 * 3}
            fontSize={18}
            text={cardInfo.homeAddress}
            fill="#fff"
          />
        </Group>
        {cardInfo.logo && (
          <Image
            x={STAGE_WIDTH - cardInfo.logo.width}
            y={STAGE_HEIGHT - cardInfo.logo.height}
            crop={{
              height: MAX_LOGO_HEIGHT,
              width: MAX_LOGO_WIDTH,
              x: -32,
              y: -32,
            }}
            width={cardInfo.logo.width}
            height={cardInfo.logo.height}
            image={cardInfo.logo}
            filters={[Konva.Filters.Grayscale]}
            ref={(node): void => {
              setImageNode(node);
            }}
          />
        )}
      </Layer>
    </Stage>
  );
};

export default memo(Card);
