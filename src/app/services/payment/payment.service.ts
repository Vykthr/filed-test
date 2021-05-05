import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }


  makePayment(payload): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const headers = {}
      await this.http.post('', payload, headers).toPromise()
      .then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
