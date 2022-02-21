import { useSelector } from 'react-redux';
import { AppStateType } from '../app/redux-store';

interface CoinSelector {
    coins: number;
}

const CoinsSelector = (state: AppStateType) => {
    return {
        coins: state.coin.coins
    };
};

const useCoinsSelectors = (): CoinSelector => {
    return useSelector<AppStateType, CoinSelector>(CoinsSelector);
};

export default useCoinsSelectors;
