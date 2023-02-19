// temporarily: no tokens support at the turboswaps-alpha
// see https://github.com/uniingo/MultiCurrencyWallet/issues/3875

const supportedAssets = ['btc', 'eth', /*'next', 'ghost'*/]

const isAssetSupported = (asset: string) => supportedAssets.includes(asset.toLowerCase())

export default {
  isAssetSupported
}