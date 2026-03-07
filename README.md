# Flatlist, Estados Dinámicos y Listas
Uso de Flatlist y estados dinámicos 

1. Crear aplicación React
2. Crear un componente principal (no es necesario el uso de Tabs por ahora) llamado Alumnos
En Alumnos

```
useEffect(() => {
  console.log("Pantalla cargada");
}, []);
```

Utilizaremos una lista de alumnos (puedes reutilizar una lista anterior) para simular una API
```
useEffect(() => {
  setTimeout(() => {
    setAlumnos([
      { matricula: 1235, nombre: "Jose Perez" },
    
    ]);
  }, 1500);
}, []);
```


Renderiza en la vista con Flatlist

```
<FlatList
  data={alumnos}
  keyExtractor={(item) => item.matricula.toString()}
  renderItem={({ item }) => (
    <Text>{item.nombre}</Text>
  )}
/>
```

Agregar dentro de la lógica del componente, un condicional para manejar el estado de carga de la lista

```
if (!alumnos.length) {
  return <Text>Cargando lista...</Text>;
}
```



**Si la lista está vacía:
Si la lista está vacía, muestra un mensaje indicando que no hay información disponible.

Ejemplo:

```
if (alumnos.length === 0) {
  return <Text>No hay alumnos disponibles</Text>;
}
```

