require('dotenv').config()

export default {
    ENV: process.env.ENV,
    network: parseInt(process.env.network), // 0 local, 1 testnet, 2 mainnet
    net: parseInt(process.env.net), //TODO: change name
    localUrl: process.env.LOCAL_0_URL,
    testnetUrl: process.env.TESTNET_0_URL,
    mainnetUrl: process.env.MAINNET_0_URL,
    filterMyAddress: true,
    //use these if not deploying contract or targeting a different deployment on (same or ) different network
    HRC20Crowdsale: '0x503328321E10272584856e2f6c06b955ca9A89a3',
    HarmonyMintable: '0x54e305F0b9DD58D0E6Bc10CC822Dfc69ceB8078E',
    Migrations: '0xe3C1862812024Abe5e41866D726c9BbB6984507E',
}