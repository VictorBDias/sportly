import { Icon, Typography, Avatar } from '@components/atoms';
import { colors } from '@design/colors';
import { spacings } from '@design/spacings';
import React from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

// import { Container } from './styles';

export interface ICourtCard {
  avatar?: string;
  title?: string;
  description?: string;
  rate?: number;
}

export const CourtCard = ({ avatar, title, description, rate }: ICourtCard) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Avatar src={avatar} size="big" />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="subTitle" fontWeight="600">
          {title}
        </Typography>

        <View style={styles.star}>
          <Icon name="star-full" color={colors.primary} size={14} />
          <Icon name="star-full" color={colors.primary} size={14} />
          <Icon name="star-full" color={colors.primary} size={14} />
          <Icon name="star-full" color={colors.primary} size={14} />
          <Icon name="star" color={colors.primary} size={14} />
          <Typography>{`(${rate})`}</Typography>
        </View>

        <View>
          <Typography numberOfLines={2}>{description}</Typography>
        </View>
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: spacings.regular,
    backgroundColor: theme.colors.background,
    marginBottom: spacings.big,
  },
  star: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
}));
