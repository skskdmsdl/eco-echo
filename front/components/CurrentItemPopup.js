import React from 'react';
import styled from 'styled-components';

const CurrentItemPopup = () => {

    const PopupStyle = styled.div`
        top: 20rem;
        right: 2rem;
        width: 100px;
        height: 200px;
        border: 1px solid black;
        position: fixed;
        z-index: 1;
    `;
    
    return(
        <>
            <PopupStyle>
                얍얍
            </PopupStyle>        
        </>
    )

}

export default CurrentItemPopup;