import { createMuiTheme } from '@material-ui/core'

export const useTheme = darkState => {
    const palletType = darkState ? "dark" : "light"
    const mainPrimaryColor = darkState ? '#3DA485' : '#1D4E89'
    const mainSecondaryColor = darkState ? '#00A2B8' : '#00A2B8'
    const texPrimary =  darkState ? '#d0d3d4' : '#1D4E89'
    const textSecondary =  darkState ? '#d0d3d4' : '#626567'

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