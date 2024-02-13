import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, ImageStyle,TouchableOpacity, View, ViewStyle,Alert } from "react-native"
import { Text,Button,Icon,TextField} from "app/components"
import { isRTL } from "../i18n"
import { AppStackScreenProps, goBack } from "../navigators"
import { colors, spacing } from "../theme"
import { Formik } from "formik";
import * as yup from "yup";
//<Image style={$welcomeFace} source={welcomeFace} resizeMode="contain" />


const validationSchema = yup.object().shape({
  name: yup.string().required('your name please'),
  email: yup.string().min(6).email('Enter a valid email').required('Emil is reaquired'),
  pasward: yup.string().min(6).required('Pasward is reaquired'),
});


const welcomeLogo = require("../../assets/images/Jlogo.png")


export const CA=()=> {
  

  const handleSubmit = (values) => {
    console.log(values);
  Alert.alert('data submit');
};
  return (
    <View style={$container}>
      <View style={$topContainer}>
      <TouchableOpacity onPress={()=>goBack('F')}>
      <Icon icon="caretLeft" size={30} />
      </TouchableOpacity>
        
      <Text style={{alignSelf: 'center', fontWeight:"bold",fontSize: 30,marginTop:20,margin:10,textAlign:'center',lineHeight:40}}>Create an account</Text>

<Text style={{alignItems: 'center',marginHorizontal: 10,textAlign:'center',fontSize:16,marginBottom:80}}>Invest and double your income now</Text>
 
       
        
<Formik
        initialValues={{email: '',name: '',pasward: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <TextField
             onChangeText={handleChange('name')}
             onBlur={handleBlur('name')}
             value={values.name}
              placeholder="Full name"
              placeholderTextColor={"black"}
            />
            {errors.name && <Text style={{ color: 'red' }}>{errors.name}</Text>}

            <TextField
             onChangeText={handleChange('email')}
             onBlur={handleBlur('email')}
             value={values.email}
              placeholder="Email Adress"
              placeholderTextColor={"black"}
            />
                  {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}

        
          

            <TextField
             onChangeText={handleChange('pasward')}
             onBlur={handleBlur('pasward')}
             value={values.pasward}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor={"black"}
            />
            {errors.pasward && <Text style={{ color: 'red' }}>{errors.pasward}</Text>}


<Button
style={$icon}
text="Create account"
        onPress={handleSubmit}
      />
        </View>
        )}
      </Formik>

      <View style={{marginTop: 20,alignSelf:'center',marginBottom:30}}>
      <Text style={{color:'#008000'}}>Already have an account?</Text>
      </View>
              
       
      </View>

     
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
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
  height: 160,
  width: "100%",
  marginBottom: spacing.lg,
}
const $icon: ViewStyle = {
    marginTop: 20,
    backgroundColor:'#008000',
   }