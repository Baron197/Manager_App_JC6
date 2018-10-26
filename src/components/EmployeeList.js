import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getEmployeeList } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
    static navigationOptions = {
        drawerLabel: 'Employee List',
    };

    componentWillMount() {
        this.props.getEmployeeList();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        //nextProps are the next set of props that this component
        //will be rendered with
        //this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow = (employee) => {
        return <EmployeeListItem employee={employee} navigation={this.props.navigation} />;
    }
    
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
                        centerComponent={{ text: 'List Employee', style: { color: '#fff' } }}
                />
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    return { employees };
};

export default connect(mapStateToProps, { getEmployeeList })(EmployeeList);
