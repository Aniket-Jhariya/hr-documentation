import React from 'react';
import PrivateRoute from "@site/src/components/PrivateRoute";

export default function Root({children}){
    return <PrivateRoute>{children}</PrivateRoute>;
}