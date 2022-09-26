import { OrderListPipe } from './order-list.pipe';
import * as mockRaw from '../../data/tracks.json'
import { TrackModel } from '../../core/models/tracks.model';
import { ActivatedRouteSnapshot } from '@angular/router';

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('Probando entrada y salida de valores', () => {
    //Arrange
    const pipe = new OrderListPipe();
    const {data}: any = (mockRaw as any).default

    //Act
    const result:TrackModel[] = pipe.transform(data)

    //Asset
    expect(result).toEqual(data) 
    
  })

  it('Probar si se ordena de manera "ASC"', () => {
    //Arrange
    const pipe = new OrderListPipe();
    const {data}: any = (mockRaw as any).default
    const firsValue = data.find((i: any) => i._id === 7)
    const lastValue = data.find((i: any) => i._id === 6)

    //Act
    const result: TrackModel[] = pipe.transform(data, 'name', 'asc')
    const firstResult = result[0]
    const lastResult = result[result.length - 1]

    //Assert
    expect(firstResult).toEqual(firsValue)
    expect(lastResult).toEqual(lastValue)
  })

  it('Probar si se ordena de manera "DESC"', () => {
    //Arrange
    const pipe = new OrderListPipe();
    const {data}: any = (mockRaw as any).default
    const firsValue = data.find((i: any) => i._id === 7)
    const lastValue = data.find((i: any) => i._id === 6)

    //Act
    const result: TrackModel[] = pipe.transform(data, 'name', 'desc')
    const firstResult = result[0]
    const lastResult = result[result.length - 1]

    //Assert
    expect(firstResult).toEqual(lastValue)
    expect(lastResult).toEqual(firsValue)
  })
});
