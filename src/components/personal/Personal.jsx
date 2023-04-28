import React from "react";
import './style.css'

import {ReactComponent as IconUser} from "./assets/icon-user.svg";
import {ReactComponent as IconSetting} from "./assets/icon-setting.svg";
import {ReactComponent as IconLogOut} from "./assets/icon-logout.svg";

const Personal = () => {
  return(
      <div className='personal-dock'>
          <div className='personal-block'>
              <div className='personal-icon'>
                  <IconUser/>
              </div>

              <div className='personal-text'>
                  <p>Родованов Павел Витальевич</p>
                  <p>Главный специалист</p>
                  <p>riwok@bk.ru</p>
              </div>
          </div>
          <div className='personal-link'>
              <a href="#"><IconLogOut/>Выйти</a>
              <a href="#"><IconSetting/>Настройки</a>
          </div>
      </div>
  )
}

export default Personal