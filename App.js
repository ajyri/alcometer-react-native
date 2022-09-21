import { ScrollView, Text, TextInput, View, } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { RadioButton, Button, Switch } from 'react-native-paper';
import light from './Light.js'
import dark from './Dark.js'
import { useState } from 'react';
export default function App() {
  const [value, setValue] = useState('')
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [hours, setHours] = useState(0)
  const [error, setError] = useState('')
  const [checked, setChecked] = useState('male')
  const genders = [{ label: "Male", value: 'male' }, { label: "Female", value: 'female' }];
  const [darkMode, setDarkMode] = useState(false);

  function calculate() {
    if (weight == 0 || weight === '') {
      setError('Please input your weight before calculating')
    } else {
      setError('')
      console.log(weight)
      let result
      let litres = bottles * 0.33
      let grams = litres * 8 * 4.5
      let burning = weight / 10
      let gramsLeft = grams - burning * hours

      if (checked === 'male') {
        result = gramsLeft / (weight * 0.7)
      } else {
        result = gramsLeft / (weight * 0.6)
      }
      setValue(Math.max(result.toFixed(2), 0))
    }
  }

  return (

    <PaperProvider>
      <ScrollView style={darkMode === false ? light.background : dark.background}>
        <View style={darkMode === false ? light.container : dark.container}>
          <Switch style={darkMode === false ? light.switch : dark.switch} value={darkMode} onValueChange={() => setDarkMode(!darkMode)}></Switch>
          <Text style={darkMode === false ? light.switchText : dark.switchText}>Switch theme</Text>
          
          <Text style={darkMode === false ? light.header : dark.header}>Alcometer</Text>
          <Text style={light.error}>{error}</Text>

          <Text style={darkMode === false ? light.label : dark.label}>Weight</Text>
          <TextInput style={darkMode === false ? light.input : dark.input} textAlign="center" keyboardType="numeric" onChangeText={w => setWeight(w)}></TextInput>
          
          <Text style={darkMode === false ? light.label : dark.label} >Bottles</Text>
          <TextInput style={darkMode === false ? light.input : dark.input} textAlign="center" keyboardType="numeric" onChangeText={b => setBottles(b)}></TextInput>
          
          <Text style={darkMode === false ? light.label : dark.label}>Hours</Text>
          <TextInput style={darkMode === false ? light.input : dark.input} textAlign="center" keyboardType="numeric" onChangeText={h => setHours(h)}></TextInput>

          <View style={darkMode === false ? light.radioContainer : dark.radioContainer}>
            <View style={darkMode === false ? light.radioChild : dark.radioChild}>
              <RadioButton color={!darkMode ? '#FFABE1' : '#7858A6'} uncheckedColor={!darkMode ? '#FFABE1' : '#371B58'} value="male" status={checked === 'male' ? 'checked' : 'unchecked'} onPress={() => setChecked('male')} style={darkMode === false ? light.radio : dark.radio}></RadioButton>
              <Text style={darkMode === false ? light.radioLabel : dark.radioLabel}>Male</Text>
            </View>

            <View style={darkMode === false ? light.radioChild : dark.radioChild}>
              <RadioButton color={!darkMode ? '#FFABE1' : '#7858A6'} uncheckedColor={!darkMode ? '#FFABE1' : '#371B58'} value="female" status={checked === 'female' ? 'checked' : 'unchecked'} onPress={() => setChecked('female')} style={darkMode === false ? light.radio : dark.radio}></RadioButton>
              <Text style={darkMode === false ? light.radioLabel : dark.radioLabel}>Female</Text>
            </View>
          </View>
          
          <Text style={[{ 'color': value < 0.4 ? '#50C878' : value > 0.5 && value < 1 ? '#f7dc6f' : '#00000' }, light.result]}>{value}</Text>
          <Button mode="contained" style={darkMode === false ? light.btn : dark.btn} onPress={calculate}><Text style={darkMode === false ? light.label : dark.label}>Calculate</Text></Button>

        </View>
      </ScrollView>
    </PaperProvider>



  );
}


