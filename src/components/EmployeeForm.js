import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input 
                        label="Name" 
                        placeholder="Jane" 
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Phone" 
                        placeholder="081287247009" 
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerLabelStyle}>Shift</Text>
                    <Picker
                        style={{ width: '100%' }}
                    >
                        <Picker.Item label="Sunday" value="Sunday" />
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

export default EmployeeForm;
