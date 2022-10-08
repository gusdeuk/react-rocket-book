import './styles/global-styles.scss';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './App.module.scss';
import { MyCustomTheme } from './styles/theme/muiThemeConfig';

export default function App() {
    // ***********************************************
    // states, inits
    // ***********************************************
    const isLogged = useSelector((state) => state.appGlobalData.isLogged)

    // ***********************************************
    // MUI Theming / makeStyles access to theme
    // ***********************************************
    // const useStyles = makeStyles((theme) => {
    //     {
    //         // some CSS that accesses the theme
    //     }
    // })

    // If you have this, consider moving it
    // inside of a component wrapped with <ThemeProvider />
    // const classes = useStyles()

    /// ***********************************************
    // functions and logic
    // ***********************************************


    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {}, [])

    // ***********************************************
    // render main component
    // ***********************************************
    return (
        <div className={styles['app-wrapper']}>
            {/*// theme provider for material UI base stuff*/}

            <ThemeProvider theme={MyCustomTheme}>
                {/* CssBaseline for material UI base stuff*/}
                <CssBaseline />
                Storybook Test
            </ThemeProvider>
        </div>
    )
}
