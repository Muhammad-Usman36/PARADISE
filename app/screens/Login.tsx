import React from "react"
import { Image,TouchableOpacity,ImageStyle, View, ViewStyle,Alert } from "react-native"
import { Text,Button,Icon,TextField,Screen} from "app/components"
import { colors, spacing } from "../theme"
import { Formik } from "formik";
import * as yup from "yup";
import { goBack } from "app/navigators";
import TB from "./TB";


const validationSchema = yup.object().shape({
  email: yup.string().min(6).email('Enter a valid email').required('Emil is reaquired'),
  pasward: yup.string().min(6).required('Pasward is reaquired'),
});


const welcomeLogo = require("../../assets/images/PA.png")


export const Login=(props:any)=> {


  const handleSubmit = (values) => {
    console.log(values);
  Alert.alert('Welcome Back');
  props.navigation.navigate("BT");

  };
  return (
    <Screen preset="scroll">
    <View style={$container}>
      <View style={$topContainer}>
        <Image style={$welcomeLogo} source={welcomeLogo} tintColor={colors.theam} resizeMode="contain" />

       
        
<Formik
        initialValues={{email: '',name: '',pasward: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={{marginTop: 20}}>

            <TextField
             onChangeText={handleChange('email')}
             onBlur={handleBlur('email')}
             value={values.email}
              label="Email  Address"
              LeftAccessory={(props) => <Icon icon="menu" containerStyle={props.style} size={21} />}
              placeholder="Email  Adress"
              placeholderTextColor={"black"}
            />
                  {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}

        
          

            <TextField
             onChangeText={handleChange('pasward')}
             onBlur={handleBlur('pasward')}
             value={values.pasward}
              label="Passward"
              secureTextEntry={true}
              RightAccessory={(props) => <Icon icon="hidden" containerStyle={props.style} size={21} />}
              LeftAccessory={(props) => <Icon icon="lock" containerStyle={props.style} size={21} />}
              placeholder="Passward"
              placeholderTextColor={"black"}
            />
            {errors.pasward && <Text style={{ color: 'red' }}>{errors.pasward}</Text>}
            

<Button
style={{marginTop: 20}}
text="Log in"
        onPress={handleSubmit}
      />
        </View>



        )}
      </Formik>





      <View style={{flexDirection: 'row',marginHorizontal: 10,marginTop: 20}}>
      <Text>Don't have an account?  </Text>
      <TouchableOpacity onPress={()=>props.navigation.navigate('CA')}>
      <Text style={{  fontWeight:'bold',color: colors.error}}>Sign up now</Text>
      </TouchableOpacity>
      </View>
              



      </View>
    </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  backgroundColor: colors.background,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $welcomeLogo: ImageStyle = {
    marginTop: spacing.xxxl,
  height: 180,
  width: "100%",
  marginBottom: spacing.lg,
}