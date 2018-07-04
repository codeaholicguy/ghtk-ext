import ghtkService from './ghtk'

describe('ghtkService', () => {
  test('getShipmentFee should return', async () => {
    const shipmentFee = await ghtkService.getShipmentFee({
      pickProvince: 'Ho Chi Minh',
      pickDistrict: 'Binh Thanh',
      province: 'Ho Chi Minh',
      district: 'Quan 11'
    })

    expect(shipmentFee).toBeDefined()
  })
})
