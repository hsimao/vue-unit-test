import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

jest.mock('@/services/axios')

// 在每次執行 it 前先清空所有 mock, 避免判斷 mock api 次數時因為累加導致測試失敗
beforeEach(() => {
  jest.clearAllMocks()
})

describe('MessageDisplay', () => {
  it('Calls getMessage and displays message', async () => {
    // mock the API call
    const mockMessage = 'Hello from the db'
    getMessage.mockResolvedValueOnce(mockMessage)
    const wrapper = mount(MessageDisplay)

    // wait for promise to resolve
    await flushPromises()

    // check that call happened once
    expect(getMessage).toHaveBeenCalledTimes(1)

    // check that component displays message
    const message = wrapper.find('[data-test="message"]').element.textContent
    expect(message).toEqual(mockMessage)
  })

  it('Displays an error when getMessage call fails', async () => {
    // mock the failed API call
    const mockError = 'Oops! Something went wrong.'
    getMessage.mockRejectedValueOnce(mockError)
    const wrapper = mount(MessageDisplay)

    // wait for promise to resolve
    await flushPromises()

    // check that call happened once
    expect(getMessage).toHaveBeenCalledTimes(1)

    // check that component displays error
    const error = wrapper.find('[data-test="message-error"]').element
      .textContent
    expect(error).toEqual(mockError)
  })
})
