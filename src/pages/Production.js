import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { defaultContent } from '../data/defaultContent.js';

function Production() {

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Production;