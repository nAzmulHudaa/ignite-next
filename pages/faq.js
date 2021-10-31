import React from 'react';
import Head from 'next/head';
import IndexFAQ from '../src/views/FAQ/IndexFAQ';


const faq = () => {
    return (
        <div>
            <Head>
                <title>FAQ | IYF</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <IndexFAQ/>
        </div>
    );
};

export default faq;