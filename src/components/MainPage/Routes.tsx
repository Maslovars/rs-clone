import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ConnectionForm from '../ConnectionForm/ConnectionForm';
import GameComponent from '../GameComponent/GameComponent';
import Score from '../Score/Score';

const useRoutes = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/game" element={<GameComponent />} />
                <Route path="/score" element={<Score />} />
                <Route path="/" element={<div />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        );
    }

    return (
        <Routes>
            <Route path="/" element={<ConnectionForm />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default useRoutes;
