import LoginForm from '@/components/LoginForm'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  it('emits an event with a user data payload', () => {
    // 1.) find text input
    // 2.) set value to input
    // 3.) trigger submit event
    // 4.) assert event has been emitted
    // 5.) assert payload is correct

    const wrapper = mount(LoginForm)

    const input = wrapper.find('[data-test="input-name"]')
    input.setValue('Mars')
    wrapper.trigger('submit')

    // 取得 formSubmitted emit 事件
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    console.log(formSubmittedCalls) // => [ [ { name: 'Mars' } ] ]
    // 確認是否被觸發
    expect(formSubmittedCalls).toHaveLength(1)

    // 檢查 submit 送出 payload 是否符合預期格式
    const expectedPayload = { name: 'Mars' }
    expect(formSubmittedCalls[0][0]).toMatchObject(expectedPayload)
  })
})
