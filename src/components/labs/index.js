import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/TodoList";
// import TodoItem from "./todo/TodoItem";

const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <TodoList/>
            <ConditionalOutput/>

            <Styles/>
            <Classes/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/index">
                Tuiter
            </Link>
        </>

    )
};

export default Labs;
