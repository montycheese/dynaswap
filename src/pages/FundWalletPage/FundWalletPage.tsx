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
                <h2>Deposit MATIC</h2>
                {enabled && address && (<div className='funding-section'>
                    <h4>OR</h4>
                    <button className='button' onClick={() => openFunding({ address, token: 'MATIC' })}>Purchase with Credit card (banxa)</button>
                </div>)}
                <div className="address-checkbox">
                    <span>{shortenAddress(address)}</span>
                    <input type="checkbox" />
                </div>
                <button className="next-button">Next</button>
            </div>
        </div>
    )
}