import {FC, useEffect, useState} from "react";
import {DynamicWidget, useDynamicContext} from "@dynamic-labs/sdk-react-core";
import { SwapWidget } from '@uniswap/widgets';
//import '@uniswap/widgets/fonts.css'

import {base} from 'viem/chains';

const jsonRpcMap = {
        [base.id]: base.rpcUrls.default.http,
};

export const SwapPage: FC = () => {
    const { primaryWallet, network, sdkHasLoaded } = useDynamicContext();
    const [provider, setProvider] = useState(null);

    useEffect(() => {
        if (sdkHasLoaded && primaryWallet) {
            const fetchProvider = async () => {
                const signer = await primaryWallet.connector?.ethers?.getSigner();
                setProvider(signer.provider);
            }
            fetchProvider();
        }
    }, [sdkHasLoaded, primaryWallet]);

    if (!sdkHasLoaded || !provider) {
        return null;
    }

    return (
        <div>
            <DynamicWidget/>
            <div>View balance</div>
            <SwapWidget
                provider={provider}
                jsonRpcUrlMap={jsonRpcMap}
                tokenList={'https://ipfs.io/ipns/tokens.uniswap.org'}
            />
        </div>
    );
};