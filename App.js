import React, { useState } from 'react';
import { View, Text, TextInput, Switch, StyleSheet } from 'react-native';

export default function Index() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  
  const [results, setResults] = useState(null);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleCalculate = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (!isNaN(num1) && !isNaN(num2)) {
      setResults({
        sum: num1 + num2,
        sub: num1 - num2,
        mul: num1 * num2,
        div: num2 !== 0 ? (num1 / num2).toFixed(2) : 'Error (Div/0)' 
      });
    } else {
      alert('Please enter valid numbers');
      setIsSwitchOn(false); 
    }
  };

  const handleToggle = (value) => {
    setIsSwitchOn(value);
    if (value) {
      handleCalculate();
    } else {
      setResults(null); 
    }
  };

  const handleInputChange = (text, setNumber) => {
    setNumber(text);
    setIsSwitchOn(false);
    setResults(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter the first number:</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={number1}
        onChangeText={(text) => handleInputChange(text, setNumber1)}
      />

      <Text style={styles.label}>Enter the second number:</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={number2}
        onChangeText={(text) => handleInputChange(text, setNumber2)}
      />

      <Text style={styles.label}>Calculate Operations</Text>
      <Switch 
        value={isSwitchOn} 
        onValueChange={handleToggle} 
      />

      {results !== null && (
        <View style={styles.resultsContainer}>
          <Text style={styles.result}>Sum: {results.sum}</Text>
          <Text style={styles.result}>Subtraction: {results.sub}</Text>
          <Text style={styles.result}>Multiplication: {results.mul}</Text>
          <Text style={styles.result}>Division: {results.div}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  resultsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  result: {
    fontSize: 20, 
    marginVertical: 4,
    fontWeight: 'bold',
  },
});