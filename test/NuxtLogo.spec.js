import { mount } from '@vue/test-utils'
import NuxtLogo from '@/components/NuxtLogo.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NuxtLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
package main

import (
  "context"
  "fmt"
  "log"

  "github.com/ethereum/go-ethereum/common"
  "github.com/ethereum/go-ethereum/ethclient"
)

func main() {
    client, err := ethclient.Dial("https://eth-mainnet.g.alchemy.com/v2/K65KESvPum3ui73Jk6wOxxREAh8a2buu")
    if err != nil {
        log.Fatal(err)
    }

    // Get the latest known block
    block, err := client.BlockByNumber(context.Background(), nil)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println("Latest block:", block.Number().Uint64())
}
