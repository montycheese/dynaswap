import {FC, useEffect, useState} from "react";
import {DynamicWidget, useDynamicContext} from "@dynamic-labs/sdk-react-core";
import { Widget } from "@kyberswap/widgets";

const theme = {
    primary: '#1C1C1C',
    secondary: '#0F0F0F',
    dialog: '#313131',
    borderRadius: '20px',
    buttonRadius: '24px',
    stroke: '#505050',
    interactive: '#292929',
    accent: '##28E0B9',
    success: '189470',
    warning: 'FF9901',
    error: 'FF537B',
    text: '#FFFFFF',
    subtext: 'A9A9A9',
    fontFamily: 'Work Sans',
}
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
                theme={theme}
            />
        </div>
    );
};