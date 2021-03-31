/*
 * Copyright © 2020 EIS Group and/or one of its affiliates. All rights reserved. Unpublished work under U.S.
 * copyright laws.
 * CONFIDENTIAL AND TRADE SECRET INFORMATION. No portion of this work may be copied, distributed, modified, or
 * incorporated into any other media without EIS Group prior written consent.
 */
import * as React from 'react'


export const LoginCard = ({
    children,
    cardTitle = 'Sign In',
    cardLogo = <a />
}) => (
    <div className='login-card'>
        {cardLogo && (
            <header className='login-card__logo-wrapper' data-testid='loginCardHeader'>
                {cardLogo}
            </header>
        )}
        <section className='login-card__content'>
            <h2 className='login-card__title'>{cardTitle}</h2>
            {children}
        </section>
    </div>
)
