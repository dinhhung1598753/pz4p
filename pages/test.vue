<template>
  <v-container>
    <p>Địa chỉ ví: {{ walletAddress }}</p>
    <p>Số dư: {{ balance }}</p>
    <v-btn @click="connectWallet">Connect Wallet</v-btn>
    <input type="text" v-model="paymentAddress" />
    <v-btn @click="sendToken">Send</v-btn>
  </v-container>
</template>

<script>
import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'
export default {
  name: 'TestPage',
  data: () => ({
    web3Api: null,
    walletAddress: '',
    provider: null,
    balance: '',
    paymentAddress: '',
    networkId: null,
  }),

  methods: {
    async connectWallet() {
      this.provider = await detectEthereumProvider()
      if (this.provider) {
        this.provider.request({ method: 'eth_requestAccounts' })
        this.web3Api = new Web3(this.provider)
        const accounts = await this.web3Api.eth.getAccounts()
        this.walletAddress = accounts[0]
        this.balance = await this.getBalance()
        this.networkId = await this.web3Api.eth.net.getId()
      }
    },
    async getBalance() {
      const balance = await this.web3Api.eth.getBalance(this.walletAddress)
      return this.web3Api.utils.fromWei(balance)
    },
    sendToken() {
      this.web3Api.eth.sendTransaction({
        to: this.paymentAddress,
        from: this.walletAddress,
        value: this.web3Api.utils.toWei('0.1', 'ether'),
      })
    },
  },
}
</script>
