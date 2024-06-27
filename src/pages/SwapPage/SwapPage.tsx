import {FC, useEffect, useState} from "react";
import {DynamicWidget, useDynamicContext} from "@dynamic-labs/sdk-react-core";
import { Widget } from "@kyberswap/widgets";

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
            <Widget
                client="dynaswap"
                enableRoute={true}
                enableDexes="kyberswap-elastic,uniswapv3,uniswap"
                provider={provider}
                title={<div>Dynaswap</div>}
            />
        </div>
    );
};