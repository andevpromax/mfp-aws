import React from 'react';
import MarketingApp from './components/MarketingApp';

export default () => {
    return (
        <div>
            <div
                style={{
                    backgroundColor: 'cornsilk',
                    height: '80px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h1 style={{ margin: 0 }}>PET SHELTER</h1>
            </div>

            <hr />
            <MarketingApp />
        </div>
    );
};
