import React from 'react'
import TableMenu from "./components/table_menu/TableMenu";
import CreatorTables from "./components/creator_table/CreatorTables";

const Content_srk = () => {

    let [count, setCount] = React.useState(0); // порядковый номер таблицы
    let [isTables, setTables] = React.useState([]);



    return(
        <div>
            <TableMenu
                count={count}
                setCount={setCount}
                setTables={setTables}

            />

            {isTables}

        </div>
    )
}

export default Content_srk