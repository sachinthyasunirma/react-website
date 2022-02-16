import React from 'react'
import {Route, Routes} from "react-router-dom";

import HomepageLayout from '../layouts/Homepage.layout';

function HomeLayouthoc({component: Component,path, ...rest}) {
  return (
    <>
    <Routes>
        <Route
            {...rest}
            path={path} 
            element={
                <HomepageLayout>
                    <Component />
                </HomepageLayout>
            }
        />
    </Routes>
    
    </>
  )}

export default HomeLayouthoc