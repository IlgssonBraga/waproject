import { IPaginationParams, IPaginationResponse } from 'interfaces/pagination';
import { Observable } from 'rxjs';

import apiService, { ApiService } from './api';
import IOrder from 'interfaces/models/order';

export class UserService {
  constructor(private apiService: ApiService) {}

  public list(params: IPaginationParams): Observable<IPaginationResponse<IOrder>> {
    return this.apiService.get('/order', params);
  }

  public save(model: Partial<IOrder>): Observable<IOrder> {
    return this.apiService.post('/order', model);
  }
}

const orderService = new UserService(apiService);
export default orderService;
