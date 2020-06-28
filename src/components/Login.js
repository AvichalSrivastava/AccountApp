import React , {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import  Card from './common/Card';
import CardItem from './common/CardItem';
import Button from './common/Button';
import Input from './common/Input';
import ActivityIndicat from './common/ActivityIndicat';
import axios from 'axios';
import Main from './Main';
import {connect} from 'react-redux';
import emailChanged from '../actions';


class Login extends Component{
//  state ={email:"", password:"", data:{}};
  /*login()
  {
    const{email, password} = this.state;
    const send = {
      email: email,
      password: password
    };
    if(email!= null && password != null)
    {
      axios.post('  https://appmanagerimpro.herokuapp.com/api/login',
      send ).then(response =>
        {
          console.log(response.status);
          if(response.status==200)
          {
            this.setState({data:response.data.data});
            return <Main data={this.state.data.data} />;
          }
        }
      ).catch(error=>console.log(error));
    }

  }*/

 onEmailChange(text)
 {
  emailChanged(text);
 }


  render()
  {

    return(
      <Card>
        <CardItem>
         <Input
          txt="Email"
          onChangeText={this.onEmailChange.bind(this)}
          placeholder = "email@gmail.com"
           />
        </CardItem>

        <CardItem>
         <Input
          txt="Password"
          secureTextEntry={true}
          placeholder="password"/>
        </CardItem>

        <CardItem>
         <Button
          text="Login"
          />
        </CardItem>
        <CardItem>
        <TouchableOpacity style={styles.ButtonStyle}>
         <Text style={styles.buttonText}>Dont have a account? Sign up here.</Text>
         </TouchableOpacity>
         </CardItem>
      </Card>
    );
  }
}

const styles = {
  buttonText : {
    fontSize : 16,
    alignSelf:'center',
    color:'#007aff',
    fontWeight : '600',
    paddingTop:10,
    paddingBottom:10
  },
  ButtonStyle:{
    flex:1,
    alignSelf:'stretch',
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1,
    marginLeft : 5,
    marginRight:5
  }
}
export default connect(null,emailChanged) (Login);
