import React from 'react';

export const MyEditorContext = React.createContext();

export const MyEditorProvider = ({ canvasHeight = 0, canvasWidth = 0, children }) => {

    return (
        <MyEditorContext.Provider
            value={{
                canvasHeight,
                canvasWidth
            }}
        >
            {children}
        </MyEditorContext.Provider>
    );
};
