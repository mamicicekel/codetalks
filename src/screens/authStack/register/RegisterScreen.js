import React, { useState } from 'react';
import { SafeAreaView, Text, } from 'react-native';
import styles from './RegisterScreen.styles';
import { useSelector } from 'react-redux';
import auth from "@react-native-firebase/auth";
import { Formik } from 'formik';
import { showMessage } from "react-native-flash-message";
import Loading from '../../../components/generalComponents/Loading/Loading';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import Input from '../../../components/inputs/authInput/Input';
import Button from '../../../components/buttons/button/Button';

export default function RegisterScreen() {
    const [loading, setLoading] = useState(false)
    const darkMode = useSelector((state) => state.theme.darkMode)

    if (loading) return <Loading />

    const initialFormValues = {
        email: '',
        password: '',
        repassword: '',
    }

    async function handleFormSubmit(formValues) {
        if (formValues.password !== formValues.repassword) {
            showMessage ({
                message: "Şifreler uyuşmuyor",
                type: "info",
            })
            return
        }
        try {
            setLoading(true)
            await auth().createUserWithEmailAndPassword(
                formValues.email,
                formValues.password,
            )
            showMessage ({
                message: "Kullanıcı oluşturuldu",
                type: "success",
            })

            setLoading(false)
        } catch (error) {
            showMessage ({
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
                        <Input
                            label="Re-enter Password"
                            onChangeText={handleChange('repassword')}
                            iconName='lock-outline'
                            value={values.repassword}
                            isSecure />
                        <Button
                            theme="tertiary"
                            title="Sign Up"
                            onPress={handleSubmit} />
                    </>
                )}
            </Formik>
        </SafeAreaView>
    )
}