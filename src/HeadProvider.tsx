import React, { FC } from 'react';
import { HeadType, HeadProviderType } from './types';

const initialValue: HeadType = {
    titleDivider: '|',
    themeColor: '#000000',
};

export const HelmetContext = React.createContext(initialValue);

const HeadProvider: FC<HeadProviderType> = (props) => {
    const { children, ...defaultValues } = props;

    return (
        <HelmetContext.Provider value={defaultValues}>
            {children}
        </HelmetContext.Provider>
    );
};

export default HeadProvider;
