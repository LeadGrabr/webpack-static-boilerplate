import './style.scss'
import { Component, PropTypes } from 'react'
// import Color from 'color'

const baseColors = {
    black: '#333',
    white: '#fff',
    gray: '#ddd',
    midgray: '#888',
    blue: '#cfdbed',
    red: '#f52',
    orange: '#f70',
    green: '#1c7',
    pink: '#e5b9b3'
}

const colors = {
    ...baseColors,
    primary: baseColors.pink,
    secondary: baseColors.white,
    default: baseColors.black,
    info: baseColors.blue,
    success: baseColors.green,
    warning: baseColors.orange,
    error: baseColors.pink
}

const scale = [0, 10, 25, 48, 64]
const fontSizes = [64, 37, 27, 19, 18, 14, 12]

export default class Theme extends Component {

    static propTypes = {
        children: PropTypes.node
    };

    static childContextTypes = {
        rebass: PropTypes.object,
        reflexbox: PropTypes.object
    };

    getChildContext() {
        return {
            rebass: {
                colors,
                fontSizes,
                scale,
                Badge: {
                    fontWeight: 'lighter'
                },
                Button: {
                    color: colors.black
                },
                Drawer: {
                    overflow: 'auto'
                },
                Input: {
                    fontSize: fontSizes[5]
                },
                Label: {
                    display: 'block',
                    marginBottom: 10
                },
                Menu: {
                    borderColor: 'transparent'
                },
                NavItem: {
                    fontWeight: 200
                },
                Text: {
                    fontSize: fontSizes[5],
                    marginBottom: scale[2],
                    marginTop: scale[2]
                },
                Textarea: {
                    fontSize: fontSizes[5]
                },
                Toolbar: {
                    backgroundColor: colors.white,
                    color: colors.black
                }
            },
            reflexbox: {
                scale
            }
        }
    }

    render() {
        return this.props.children
    }
}
