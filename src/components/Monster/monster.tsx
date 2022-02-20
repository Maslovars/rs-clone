import React from 'react';
import './monster.scss';

type MonsterPropsType = {
    name: string;
    top?: number;
    right?: number;
    health?: number;
    currentHealth?: number;
    receivedDamage?: number;
    isCriticalHit?: boolean;
};

const defaultProps = {
    top: 0,
    right: 0,
    health: 100,
    currentHealth: 100,
    receivedDamage: 0,
    isCriticalHit: false,
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

    // eslint-disable-next-line consistent-return
    function styles() {
        if (currentHealth && health) {
            return (currentHealth * 100) / health;
        }
    }
    return (
        <div
            className={`com-Monster ${name}`}
            style={{
                top,
                right,
            }}
        >
            <div className="healthbar">
                {receivedDamage !== undefined && receivedDamage > 0 && (
                    <div
                        className={`damage-received ${
                            isCriticalHit ? 'isCriticalHit' : ''
                        }`}
                    >
                        {receivedDamage}
                    </div>
                )}
                <div
                    className="healthbar-inner"
                    style={{ width: `${styles()}}%` }}
                />
            </div>
        </div>
    );
}

Monster.defaultProps = defaultProps;

export default Monster;
