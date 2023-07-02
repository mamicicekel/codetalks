import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './SignInScreen.styles';
import { useSelector } from 'react-redux';
import auth from "@react-native-firebase/auth";
import { Formik } from 'formik';
import { showMessage } from "react-native-flash-message";
import Loading from '../../../components/generalComponents/Loading/Loading';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import Input from '../../../components/inputs/authInput/Input';
import Button from '../../../components/buttons/button/Button';

export default function SignInScreen({ navigation }) {
    const darkMode = useSelector((state) => state.theme.darkMode)
    const [loading, setLoading] = useState(false)

    if (loading) return <Loading />

    const initialFormValues = {
        email: '',
        password: '',
    }

    async function handleFormSubmit(formValues) {
        try {
            setLoading(true)
            await auth().signInWithEmailAndPassword(
                formValues.email,
                formValues.password,
            )
            navigation.navigate('TabStack')
            setLoading(false)
        } catch (error) {
            showMessage({
                message: authErrorMessageParser(error.code),
                type: 'info',
            })
            setLoading(false)
        }
    }

    return (
        <SafeAreaView style={darkMode ? styles.light.container : styles.dark.container}>
            <Text style={darkMode ? styles.light.logoText : styles.dark.logoText}>{"</>"}</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                <>
                    <Input
                        label="Email"
                        type="emailAddress"
                        onChangeText={handleChange('email')}
                        value={values.email}
                        iconName='account-outline'
                        isSecure={false} />
                    <Input
                        label="Password"
                        onChangeText={handleChange('password')}
                        value={values.password}
                        iconName='lock-outline'
                        isSecure />
                    <Button
                        theme="tertiary"
                        title="Login"
                        onPress={handleSubmit} />
                </>
                )}
            </Formik>
        </SafeAreaView>
    )
}