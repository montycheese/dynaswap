import { FC } from 'react';

import { useDynamicContext, useFunding } from '@dynamic-labs/sdk-react-core';

import './FundWalletPage.css';

const shortenAddress = (address?: string) => address ? address.substring(0, 5) + "..." + address.substring(address.length - 5) : undefined;

export const FundWalletPage: FC = () => {
    const { user, primaryWallet } = useDynamicContext();
    const { enabled, openFunding } = useFunding();

    if (!user || !primaryWallet) return;

    const { address } = primaryWallet

    return (
        <div className="FundWalletPage">
            <div className="container">
                <h2>Deposit ETH on Base</h2>
                {enabled && address && (<div className='funding-section'>
                    <h4>OR</h4>
                    <button className='button' onClick={() => openFunding({ address, token: 'MATIC' })}>Purchase with Credit card (banxa)</button>
                </div>)}
                <div className="address-checkbox">
                    <span>{shortenAddress(address)}</span>
                    <div onClick={() => navigator.clipboard.writeText(address)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm2 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h10v14z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <button className="next-button" onClick={() => {
                    window.location.hash = '#swap';
                }}>Next</button>
            </div>
        </div>
    )
}