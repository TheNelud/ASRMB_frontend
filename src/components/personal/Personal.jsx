import React from "react";
import './style.css'

import {ReactComponent as IconUser} from "./assets/icon-user.svg";
import {ReactComponent as IconSetting} from "./assets/icon-setting.svg";
import {ReactComponent as IconLogOut} from "./assets/icon-logout.svg";

const Personal = () => {
  return(
      <div className='personal-dock'>

          <div className='personal-icon'>
              <IconUser/>
          </div>

          <div className='personal-text'>
              <p>Родованов Павел Витальевич</p>
              <p>Главный специалист</p>
              <p>riwok@bk.ru</p>
          </div>

          <a href="#" className='personal-link-setting'><IconSetting/><label>Настройки</label></a>
          <a href="#" className='personal-link-logout'><IconLogOut/><label>Выйти</label></a>

      </div>
  )
}

export default Personal