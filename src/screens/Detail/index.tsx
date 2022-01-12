import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import { useCustomTheme } from '../../contexts/theme';
import { StorageSchemaType } from '../../utils/storage';
import { styles } from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { maskDate, maskPass, maskTime } from '../../utils/masks';
import { RoundButton } from '../../components/design/RoundButton';
import { AppRoutesListParams } from '../../routes/app.route';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const Detail: React.FC = () => {
  const route = useRoute();
  const { colors, schemeColor } = useCustomTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<AppRoutesListParams>>();

  const {
    _id,
    name,
    description,
    date,
    color,
    time,
    login,
    password,
    categorie,
    force,
  } = route.params as StorageSchemaType;
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
      ]}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={schemeColor === 'light' ? 'dark-content' : 'light-content'}
      />
      <ScrollView>
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.onSurface }]}>
            {name || 'Title'}
          </Text>
        </View>
        <View style={styles.content}>
          <View
            style={[
              styles.contentItem,
              { borderBottomColor: colors.secondaryContainer },
            ]}>
            <View style={styles.contentTop}>
              <MaterialIcons
                name="description"
                color={colors.outline}
                // style={styles.icon}
                size={16}
              />
              <Text style={[styles.itemTitle, { color: colors.outline }]}>
                Descrição
              </Text>
            </View>
            <View style={styles.contentBottom}>
              <Text style={[styles.itemText, { color: colors.onSurface }]}>
                {description || 'Nenhum descrição foi informada'}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.contentMiddle,
              { borderBottomColor: colors.secondaryContainer },
            ]}>
            <View style={styles.contentTop}>
              <MaterialIcons
                name="date-range"
                color={colors.outline}
                // style={styles.icon}
                size={16}
              />
              <Text style={[styles.itemTitle, { color: colors.outline }]}>
                Data de criação
              </Text>
            </View>
            <View
              style={[
                styles.itemRight,
                {
                  backgroundColor:
                    color === 1
                      ? colors.color1
                      : color === 2
                      ? colors.color2
                      : color === 3
                      ? colors.color3
                      : color === 4
                      ? colors.color4
                      : colors.color5,
                },
              ]}>
              <Text
                style={[styles.itemText, { color: colors.onPrimaryContainer }]}>
                {maskDate(date) || 'Not found'}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.contentMiddle,
              { borderBottomColor: colors.secondaryContainer },
            ]}>
            <View style={styles.contentTop}>
              <MaterialIcons
                name="access-time"
                color={colors.outline}
                // style={styles.icon}
                size={16}
              />
              <Text style={[styles.itemTitle, { color: colors.outline }]}>
                Hora de criação
              </Text>
            </View>
            <View
              style={[
                styles.itemRight,
                {
                  backgroundColor:
                    color === 1
                      ? colors.color1
                      : color === 2
                      ? colors.color2
                      : color === 3
                      ? colors.color3
                      : color === 4
                      ? colors.color4
                      : colors.color5,
                },
              ]}>
              <Text
                style={[styles.itemText, { color: colors.onPrimaryContainer }]}>
                {maskTime(time) || 'Nenhum descrição foi informada'}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.contentItem,
              { borderBottomColor: colors.secondaryContainer },
            ]}>
            <View style={styles.contentTop}>
              <MaterialIcons
                name="assignment-ind"
                color={colors.outline}
                // style={styles.icon}
                size={16}
              />
              <Text style={[styles.itemTitle, { color: colors.outline }]}>
                Login
              </Text>
            </View>
            <View style={styles.contentBottom}>
              <Text style={[styles.itemText, { color: colors.onSurface }]}>
                {login || 'Nenhum login foi encontrado'}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.contentItem,
              { borderBottomColor: colors.secondaryContainer },
            ]}>
            <View style={styles.contentTop}>
              <MaterialIcons
                name="lock"
                color={colors.outline}
                // style={styles.icon}
                size={16}
              />
              <Text style={[styles.itemTitle, { color: colors.outline }]}>
                Senha
              </Text>
            </View>
            <View style={styles.contentBottom}>
              <Text style={[styles.itemText, { color: colors.onSurface }]}>
                {maskPass(password) || 'Nenhum login foi encontrado'}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <RoundButton color={color} icon="delete" />
        <RoundButton
          color={color}
          icon="mode-edit"
          onPress={() =>
            navigation.navigate('Edit', {
              _id,
              name,
              description,
              date,
              color,
              categorie,
              force,
              time,
              login,
              password,
            })
          }
        />
      </View>
    </View>
  );
};

export default Detail;
