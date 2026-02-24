import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';
import Card from '../components/Card';
import { colors } from '../utils/colors';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.logo}>FerrTools</Text>
        <Ionicons name="person-circle-outline" size={40} color={colors.primary} />
      </View>

      {/* Cards de estatísticas */}
      <View style={styles.statsContainer}>
        <Card style={styles.statCard}>
          <Ionicons name="hammer-outline" size={32} color={colors.primary} />
          <Text style={styles.statNumber}>147</Text>
          <Text style={styles.statLabel}>Ferramentas</Text>
        </Card>
        <Card style={styles.statCard}>
          <Ionicons name="people-outline" size={32} color={colors.secondary} />
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Em uso</Text>
        </Card>
        <Card style={styles.statCard}>
          <Ionicons name="alert-circle-outline" size={32} color={colors.error} />
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Atrasadas</Text>
        </Card>
      </View>

      {/* Ações rápidas */}
      <View style={styles.actionsContainer}>
        <Text style={styles.sectionTitle}>Ações Rápidas</Text>
        
        <Button 
          title="Escanear Ferramenta" 
          onPress={() => navigation.navigate('Scan')}
          style={styles.actionButton}
        />
        
        <Button 
          title="Inventário Rápido" 
          type="secondary"
          onPress={() => navigation.navigate('Inventory')}
          style={styles.actionButton}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  statCard: {
    width: '30%',
    alignItems: 'center',
    padding: 15,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 5,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 2,
  },
  actionsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 15,
  },
  actionButton: {
    marginBottom: 10,
  },
});

export default HomeScreen;
