import React, { useRef, useState } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import '../game.scss';

type BoxPropsType = {
    position: [x: number, y: number, z: number];
    turningSpeed: number;
};

// eslint-disable-next-line import/prefer-default-export
export function Box(props: BoxPropsType) {
    const mesh = useRef<Mesh>();
    const [hovered, setHover] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(false);
    useFrame(() => {
        if (mesh.current) {
            // eslint-disable-next-line react/destructuring-assignment
            mesh.current.rotation.x += props.turningSpeed;
        }
    });
    return (
        <mesh
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    );
}
