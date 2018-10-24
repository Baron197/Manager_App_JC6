import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    static navigationOptions = {
        drawerLabel: 'Add New Employee'
    };

    render() {
        return (
            <View>
                <Header
                    placement="left"
                    leftComponent={{ 
                        icon: 'menu', 
                        color: '#fff', 
                        onPress: () => this.props.navigation.toggleDrawer() 
                    }}
                    centerComponent={{ text: 'Add Employee', style: { color: '#fff' } }}
                    rightComponent={{ 
                        icon: 'home', 
                        color: '#fff', 
                        onPress: () => this.props.navigation.navigate('EmployeeList')
                    }}
                />
                <Card>
                    <EmployeeForm />
                    
                    <CardSection>
                        <Button>
                            Save
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

export default EmployeeCreate;
