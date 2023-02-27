import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const { t } = useTranslation();

    const [email, setEmail] = useState(''); 
    const [pass, setPass] = useState(''); 

    const [emailState, setEmailState] = useState(false);
    const [passState, setPassState] = useState(false);

    function isEmpty(str) {
        if(str.length === 0) {
            return true;
        }
        return false;
    }

    const handleSubmit = (e) => {
        e.preventDefault(email);
        console.log()
        setEmailState(isEmpty(email));
        setPassState(isEmpty(pass));
    }

  return (
    <div className='loginContainer'>
        <form className='login' onSubmit={handleSubmit}>
            <div className="topLogin">
                <div className="input">
                    <input type="text"
                    name="username"
                    placeholder='Email or Username' 
                    onChange={(e) => setEmail(e.target.value)} 
                    />
                    <div>
                        {emailState && <div 
                        className='warning'
                        >{t('incorrect_email')}
                        </div>}
                    </div>
                    
                    <input type="password" 
                    name="password"
                    placeholder='Password'
                    onChange={(e) => setPass(e.target.value)}
                    />
                    <div>
                        {passState && <div 
                        className='warning'
                        >{t('incorrect_pass')}
                        </div>}
                    </div>
                    
                </div>
 
                <Link to="/">{t('forgot_pass')}</Link>
            </div>

            <div className="bottomLogin">
                <div className="check">
                    <input type="checkbox" />
                    <label>{t('remember')}</label>
                </div>
                <Link to="home">{t('back')}</Link>
                <button to="home">{t('signin')}</button>
            </div>

        </form>
    </div>
  )
}

export default LogIn