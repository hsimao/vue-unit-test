import AppHeader from '@/components/AppHeader'
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {
  test('如果 logged 等於 false, 不顯示 logout button', () => {
    const wrapper = mount(AppHeader)

    // 判斷組件內的 button 是否顯示
    expect(wrapper.find('button').isVisible()).toBe(false)
  })

  test('如果 logged 等於 true, 需顯示 logout button', async () => {
    const wrapper = mount(AppHeader)

    // 改變組件 prop data
    wrapper.setData({ loggedIn: true })

    // 等待組件重新渲染完後才繼續執行, 避免以下判斷按鈕的邏輯執行時組件還沒重新渲染完成，導致不正確
    await wrapper.vm.$nextTick()

    // 判斷組件內的 button 是否顯示
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})
