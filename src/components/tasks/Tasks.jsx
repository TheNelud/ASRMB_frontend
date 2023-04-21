import React from "react";
import './style.css'
const Tasks = () => {
    return(
        <div className='tasks-content'>
            <ul className="tree">
                <li>
                    <details open>
                        <summary>Определение компонентного состава</summary>
                        <ul>
                            <li><a class="check_circle_oks">Приложение 1 </a></li>
                            <li><a className="check_circle_oks">Приложение 2 </a></li>
                            <li><a className="check_circle_oks">Приложение 3 </a></li>
                            <li><a className="check_circle_oks">Приложение 4 </a></li>
                            <li><a className="check_circle_oks">Приложение 5 </a></li>
                            <li><a className="check_circle_oks">Приложение 6 </a></li>
                            <li><a className="check_circle_oks">Приложение 7 </a></li>
                            <li><a className="check_circle_oks">Приложение 8 </a></li>
                            <li><a className="check_circle_oks">Приложение 9 </a></li>
                            <li><a className="check_circle_oks">Приложение 10 </a></li>

                        </ul>

                    </details>
                </li>
                <li>
                    <details open>
                        <summary>Определение компонентного состава</summary>
                        <ul>
                            <li><a className="check_circle_oks">Приложение 1 </a></li>
                            <li><a className="check_circle_oks">Приложение 2 </a></li>
                            <li><a className="check_circle_oks">Приложение 3 </a></li>
                            <li><a className="check_circle_oks">Приложение 4 </a></li>
                            <li><a className="check_circle_oks">Приложение 5 </a></li>
                            <li><a className="check_circle_oks">Приложение 6 </a></li>
                            <li><a className="check_circle_oks">Приложение 7 </a></li>
                            <li><a className="check_circle_oks">Приложение 8 </a></li>
                            <li><a className="check_circle_oks">Приложение 9 </a></li>
                            <li><a className="check_circle_oks">Приложение 10 </a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details >
                        <summary>Определение компонентного состава</summary>
                        <ul>
                            <li><a className="check_circle_oks">Приложение 1 </a></li>
                            <li><a className="check_circle_oks">Приложение 2 </a></li>
                            <li><a className="check_circle_oks">Приложение 3 </a></li>
                            <li><a className="check_circle_oks">Приложение 4 </a></li>
                            <li><a className="check_circle_oks">Приложение 5 </a></li>
                            <li><a className="check_circle_oks">Приложение 6 </a></li>
                            <li><a className="check_circle_oks">Приложение 7 </a></li>
                            <li><a className="check_circle_oks">Приложение 8 </a></li>
                            <li><a className="check_circle_oks">Приложение 9 </a></li>
                            <li><a className="check_circle_oks">Приложение 10 </a></li>
                        </ul>
                    </details>
                </li>

            </ul>
        </div>
    )
}

export default Tasks