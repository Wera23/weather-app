import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import classesLogin from './Login.css'

const login = (props) =>  (
    <div className={classesLogin.loginOverlay} >
        <Card className={classesLogin.card}>
<CardHeader className={classesLogin.header}> { props.option } </CardHeader>

            <div className={classesLogin.input}>
            <TextField hintText="Nazwa użytkownika" />
            <TextField hintText="Podaj hasło"
            floatingLabelText="Password"
            type="password"
            />
            </div>
        </Card>
    </div>
)


export default login;
