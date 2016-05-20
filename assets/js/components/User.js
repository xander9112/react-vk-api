import React, {PropTypes, Component} from 'react'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

export default class User extends Component {
    render () {
        const { name, error } = this.props;
        let template;

        if (name) {
            template = `Привет, ${name}!`;
        } else {
            template = `Привет, Аноним!`
        }


        return (
            <AppBar
                title={template} showMenuIconButton={false}
                iconElementRight={name ? <FlatButton label="Выйти" onTouchTap={::this.props.handleLogout} /> : <FlatButton label="Войти" onTouchTap={::this.props.handleLogin} />}
            />
        );
    }
}

User.propTypes = {
    name:         PropTypes.string.isRequired,
    handleLogin:  PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired,
    error:        PropTypes.string.isRequired
};
