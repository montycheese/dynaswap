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
    const { primaryWallet, network, sdkHasLoaded, setShowDynamicUserProfile } = useDynamicContext();
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
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{
                width: '180px',
                marginBottom: '12px',
            }}>
                <DynamicWidget/>
            </div>
            <div style={{
                background: 'white',
                padding: '0.25rem',
                color: 'black',
                borderRadius: '5px',
                width: '100px',
                marginTop: '12px',
                marginBottom: '12px'
            }}
                 onClick={() => setShowDynamicUserProfile(true)}>View balances</div>
            <Widget
                client="dynaswap"
                enableRoute={true}
                enableDexes="kyberswap-elastic,uniswapv3,uniswap"
                defaultTokenOut="0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"
                provider={provider}
                title={<div>Dynaswap</div>}
                theme={theme}
                width={350}
            />
        </div>
    );
};