import mockAxios from 'axios'
import { sendEmailAuth } from './request'

jest.mock('./request')
describe('auth service test group', () => {
  describe('test sendEmailAuth API', () => {
    test("non subscribe user should receive '인증메일을 보냈으니 확인해주세요 :)' message", async () => {
      const nonSubUserResponse = {
        message: '인증메일을 보냈으니 확인해주세요 :)',
        isSub: false,
        isCertify: false,
      }

      sendEmailAuth.mockImplementationOnce(() =>
        Promise.resolve({
          data: nonSubUserResponse,
        })
      )

      const response = await sendEmailAuth('jkljkl17@naver.com')
      expect(response.data).toEqual(nonSubUserResponse)
    })

    test("non certificated user should receive '인증되지 않은 구독자입니다. 인증메일을 보냈으니 확인해주세요 :)' message", async () => {
      const nonCertifyUserResponse = {
        message:
          '인증되지 않은 구독자입니다. 인증메일을 보냈으니 확인해주세요 :)',
        isSub: true,
        isCertify: false,
      }

      sendEmailAuth.mockImplementationOnce(() =>
        Promise.resolve({
          data: nonCertifyUserResponse,
        })
      )

      const response = await sendEmailAuth('jkljkl17@naver.com')
      expect(response.data).toEqual(nonCertifyUserResponse)
    })

    test("certificated user should receive '이미 구독자입니다 :D' message", async () => {
      const certificatedUserResponse = {
        message: '이미 구독자입니다 :D',
        isSub: true,
        isCertify: true,
      }

      sendEmailAuth.mockImplementationOnce(() =>
        Promise.resolve({
          data: certificatedUserResponse,
        })
      )

      const response = await sendEmailAuth('jkljkl17@naver.com')
      expect(response.data).toEqual(certificatedUserResponse)
    })
  })
})
