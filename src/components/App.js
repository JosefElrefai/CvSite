import React, { Fragment } from 'react';
import Header from './Header/Header';
import SectionA from './SectionA/SectionA';
import SectionB from './SectionB/SectionB';
import SectionC from './SectionC/SectionC';
import RoundProgressBar from './RoundProgressBar/RoundProgressBar';

const App = () => {
    return (
        <Fragment>
            <Header/>
            <SectionA/>
            <SectionB/>
            <SectionC/>
        </Fragment>
    );
};

export default App;