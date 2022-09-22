import React from "react";
import '../../scss/style.scss';
import '../ItemDetailContainer/ItemCount/ItemCount.scss';

function Button({classN, onClick, children}) {
    return (
        <button className={classN} onClick={onClick}>{children}</button>
    );
}

export default Button;