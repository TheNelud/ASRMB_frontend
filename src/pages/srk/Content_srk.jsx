import React from 'react'
import TableMenu from "./components/table_menu/TableMenu";
import ContextMenu from "./components/table_menu/menu_component/component/menu_context/ContextMenu";
import CreatorTables from "./components/creator_table/CreatorTables";


const Content_srk = () => {

  return(
      <div>
        <TableMenu/>
        <CreatorTables/>

      </div>
  )
}

export default Content_srk