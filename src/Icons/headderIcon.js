import React from 'react';

import { Gear } from '@rsuite/icons';

import "rsuite/dist/rsuite.min.css";

const headderIcon = () => {
    return (
        <div style={{ padding: 10 }}>
            <h2>GeeksforGeeks</h2>
            <h3 style={{ color: "green" }}>
                React Suite Icons Colors</h3>
            <div>
                <Gear spin style={{ fontSize: '3rem', }} 
                    color="red" />
            </div>
        </div>
    );
};

export default headderIcon;