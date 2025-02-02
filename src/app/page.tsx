"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function Home() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const router:AppRouterInstance = useRouter();

    //Функция для авторизации
    const handleLogin = () => {
        const correctLogin:string = 'Admin';
        const correctPassword:string = 'pswrd';

        if (login === correctLogin && password === correctPassword) {
            // Переход на главную страницу при успешной авторизации
            router.push('/main');
        } else {
            alert('Неверный логин или пароль');
        }
    };

  return (
    <div>
        <div className="bg-GreyBG flex items-center justify-center min-h-screen">
            <div className="bg-BlueBG rounded-lg p-6 flex
            flex-col items-center shadow-lg">
                <input className="input"
                       placeholder="Логин"
                       type="text"
                       value={login}
                       onChange={(e) => setLogin(e.target.value)}></input>
                <input className="input"
                       placeholder="Пароль"
                       type="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}></input>
                <button className="button" onClick={handleLogin}>Войти</button>
            </div>
        </div>
    </div>
  );
}
