import { createMuiTheme } from '@material-ui/core'

export const useTheme = darkState => {
    const palletType = darkState ? "dark" : "light"
    const mainPrimaryColor = darkState ? '#6200EE' : '#6200EE'
    const mainSecondaryColor = darkState ? '#9f66b7' : '#BB86FC'
    const texPrimary =  darkState ? '#9f66b7' : '#607d8b'
    const textSecondary =  darkState ? '#9f66b7' : '#8133f1'

    return createMuiTheme({
        palette: {
            type: palletType,
            primary: {
                main: mainPrimaryColor
            },
            secondary: {
                main: mainSecondaryColor
            },
            text: {
                primary: texPrimary,
                secondary: textSecondary
            }
        },
        overrides: {
            MuiButton: {
                text: {
                    background: mainPrimaryColor
                }
            },
            MuiCssBaseline: {
                '@global': {
                    body: {
                        backgroundColor: mainPrimaryColor
                    }
                }
            }
        }
    })
}