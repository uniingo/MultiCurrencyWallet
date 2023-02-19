const linksManager = {
  home: '/',
  hashHome: '#/',

  exchange: '/exchange',
  quickSwap: '/exchange/quick',

  // Market maker page - for run parallel swaps in background
  marketmaker: '/marketmaker',
  marketmaker_short: '/mm',

  history: '/history',
  createWallet: '/createWallet',
  restoreWallet: '/restoreWallet',
  restoreWalletMnemonic: '/restoreWalletMnemonic',
  restoreWalletShamirs: '/restoreWalletShamirs',
  connectWallet: '/connectWallet',
  invoices: '/invoices',
  invoice: '/invoice',
  farm: 'https://farm.wpmix.net/',
  localStorage: '/localStorage',

  wallets: '/wallets',
  send: '/withdraw',
  savePrivateSeed: '/savePrivateSeed',
  savePrivateKeys: '/savePrivateKeys',
  currencyWallet: '/wallet',
  atomicSwap: '/atomic-swaps',
  turboSwap: '/turbo-swaps',
  feed: '/feed',
  test: 'https://testnet.swaponline.io',
  main: 'https://swaponline.io/',
  wallet: '/wallet',
  notFound: '/NotFound',
  multisign: '/multisign',
  createInvoice: '/createinvoice',

  // social networks
  medium: '#',
  twitter: 'https://twitter.com/',


  // footer links
 
  licence: 'https://www.teatmik.ee/en/personlegal/14477421-Swap-Online-O%C3%9C',
  faq: [
    {
      question: 'What is the price of SWAP token?',
      link: 'https://wiki.swaponline.io/faq/#swap-faq-1',
    },

  ],
  // footer new links
  footer: {
    exchange: 'https://uniingo.xyz/exchange',
    wallet: 'https://uniingo.xyz',
    widget: 'https://widget.uniingo.xyz/',
    
    
  },

  getFaqLink(faqID) {
    for (let i = 0; i < this.faq.length; i++) {
      if (this.faq[i].id
        && (this.faq[i].id === faqID)
      ) {
        return this.faq[i].link
      }
    }
    return false
  },
}

export const getFullOrigin = () => `${location.origin}${location.pathname}#`


export default linksManager
