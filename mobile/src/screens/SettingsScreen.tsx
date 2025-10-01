import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useTranslation} from 'react-i18next';

const SettingsScreen: React.FC = () => {
  const {t, i18n} = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings.language')}</Text>
          <TouchableOpacity
            style={[
              styles.option,
              i18n.language === 'vi' && styles.optionActive,
            ]}
            onPress={() => changeLanguage('vi')}>
            <Text style={styles.optionText}>Tiếng Việt</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.option,
              i18n.language === 'en' && styles.optionActive,
            ]}
            onPress={() => changeLanguage('en')}>
            <Text style={styles.optionText}>English</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings.theme')}</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Light</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings.notifications')}</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Enabled</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings.about')}</Text>
          <View style={styles.info}>
            <Text style={styles.infoText}>Version: 0.1.0</Text>
            <Text style={styles.infoText}>Kendy MCP Assistant</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionActive: {
    backgroundColor: '#f0e6ff',
  },
  optionText: {
    fontSize: 16,
    color: '#666',
  },
  info: {
    paddingVertical: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#999',
    marginBottom: 5,
  },
});

export default SettingsScreen;
