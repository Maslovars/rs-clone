import React, { useRef } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import '../game.scss';

// eslint-disable-next-line import/prefer-default-export
export function Line() {
    const mesh = useRef<Mesh>();
    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.y += 0.8;
            mesh.current.rotation.x += 0.8;

            if (mesh.current.position.x < 10) {
                mesh.current.position.x += 0.1;
            } else {
                mesh.current.position.x = -10;
            }
        }
    });

    return (
        <mesh ref={mesh}>
            <boxGeometry args={[1, 0.1, 1]} />
            <meshStandardMaterial color="#dd7777" />
        </mesh>
    );
}
