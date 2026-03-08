import { StyleSheet, Text, View } from 'react-native';
import Alumnos from './Alumnos';

export default function App() {
  return (
    <View style={styles.container}>
      <Alumnos />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#165775',
  },
});
