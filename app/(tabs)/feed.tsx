import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../../lib/modules/auth/AuthProvider';

export default function FeedScreen() {
  const { session, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.info}>Email: {session?.user.email}</Text>
      <Text style={styles.info}>User ID: {session?.user.id}</Text>
      
      <Button title="Cerrar Sesión" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
});