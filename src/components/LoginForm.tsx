import { LoginFormProps } from '../utils/Types'
import styles from './css/LoginForm.module.css'

const LoginForm: React.FC<LoginFormProps> = ({ sumbitted, changed }) => {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.loginContainer}>
                <form onSubmit={sumbitted}>
                    <h1>Login</h1>
                    <input type="text" name="username" placeholder="username" onChange={changed} />
                    <input type="text" name="password" placeholder="password" onChange={changed} />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm