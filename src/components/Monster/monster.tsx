import React from 'react';

type MonsterPropsType = {
    name: string;
    top?: number;
    right?: number;
    health?: number;
    currentHealth?: number;
    receivedDamage?: number | undefined;
    isCriticalHit?: boolean;
};

function Monster(props: MonsterPropsType) {
    const {
        name,
        top,
        right,
        health,
        currentHealth,
        receivedDamage,
        isCriticalHit,
    } = props;

    return (
        <div className={`com-Monster ${name}`} style={{ top, right }}>
            <div className="healthbar">
                {receivedDamage !== undefined && receivedDamage > 0 && (
                    <div className={`damage-received ${isCriticalHit || ''}`}>
                        {receivedDamage}
                    </div>
                )}
                <div
                    className="healthbar-inner"
                    style={{ width: `${
                            (currentHealth !== undefined && health !== undefined) && (currentHealth * 100) / health
                        }                        
                    }%` }}
                />
            </div>
        </div>
    );
}

export default Monster;
