import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import GameComponent from '../GameComponent/GameComponent';
import Score from '../Score/Score';
import MainPage from './MainPage';

const useRoutes = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
        return (
            <Routes>
                {/* <Route path="/game" element={<GameComponent />} /> */}
                <Route path="/score" element={<Score />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="*" element={<Navigate to="/main" />} />
            </Routes>
        );
    }

    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default useRoutes;
