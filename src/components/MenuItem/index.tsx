import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useCustomTheme } from '../../contexts/theme';
import { RectButton } from 'react-native-gesture-handler';

type Props = {
  title: string;
  iconName: string;
  disabled?: boolean;
  onPress: () => void;
};

export const MenuItem: React.FC<Props> = ({
  title,
  iconName,
  disabled = false,
  onPress,
}) => {
  const { colors } = useCustomTheme();
  return (
    <RectButton
      style={[
        styles.container,
        { backgroundColor: colors.background, opacity: disabled ? 0.3 : 1 },
      ]}
      onPress={onPress}
      enabled={!disabled}
      rippleColor={colors.secondaryContainer}
      activeOpacity={0.8}>
      {iconName === 'user' ||
      iconName === 'file-text' ||
      iconName === 'shield' ? (
        <Feather name={iconName} size={28} color={colors.onSurface} />
      ) : (
        <Ionicons
          name={iconName || 'menu'}
          size={28}
          color={colors.onSurface}
        />
      )}
      <Text style={[styles.title, { color: colors.onSurface }]}>
        {title || 'Título do menu'}
      </Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 30,
    elevation: 0.1,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 30,
  },
});
