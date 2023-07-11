<template>
  <div class="walletModalBox-wrapper">
    <div class="walletModalBox-header">
      <div class="walletModalBox-title">{{ $t("components.initWalletModal.title") }}</div>
      <Close class="walletModalBox-close" @click="closeDialog" />
    </div>
    <div class="walletModalBox-panel">
      <div class="walletModalBox-list" @click="connectWallet('bitkeep')">
        <div class="walletModalBox-list__label">BitKeep</div>
        <div class="walletModalBox-list__img">
          <img src="@/assets/images/components/InitWalletModal/bitkeep.svg" alt="" />
        </div>
      </div>
      <div class="walletModalBox-list" @click="connectWallet('metamask')">
        <div class="walletModalBox-list__label">MetaMask</div>
        <div class="walletModalBox-list__img">
          <img src="@/assets/images/components/InitWalletModal/metamask.svg" alt="" />
        </div>
      </div>
      <div class="walletModalBox-list" @click="connectWallet('okx')">
        <div class="walletModalBox-list__label">OKX</div>
        <div class="walletModalBox-list__img">
          <img src="@/assets/images/components/InitWalletModal/okx.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import $bitkeep from "@/utils/web3/bitkeep";
import $metamask from "@/utils/web3/metamask";
import $okx from "@/utils/web3/okx";

import { computed } from "vue";
import { useStore } from "vuex";
import { event } from "vue-gtag";
const $store = useStore();

const connectWallet = async (e) => {
  switch (e) {
    case "bitkeep":
      $bitkeep.initialize();
      event("success_connect", { method: "bitkeep" });
      break;

    case "okx":
      $okx.initialize();
      event("success_connect", { method: "okx" });
      break;

    case "metamask":
      $metamask.initialize();
      event("success_connect", { method: "metamask" });
      break;
  }

  closeDialog(false);
};

const closeDialog = (e) => {
  $store.commit("changeWalletModalVisible", false);
};

const visible = computed(() => {
  return $store.state.walletModalVisible;
});
</script>

<style lang="scss" scoped>
@import "./scss/index";
</style>

<style lang="scss">
.walletModalBox {
  max-width: 500px;
  width: 90% !important;

  .el-dialog__header {
    display: none;
  }

  .el-dialog__body {
    padding: 0;
  }
}
</style>
