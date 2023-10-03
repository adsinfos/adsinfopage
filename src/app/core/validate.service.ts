import { Injectable } from '@angular/core';
import * as rs from 'jsrsasign';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {
  llavepub: string;
  constructor() {
    this.llavepub = `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtHoXvkRoDH5VAVOChxBN
    3SKepzXzGV7w/IoEXW3bHu1YTp6ugK8shcCvHRvxMMElEzglohaEOFBPVe7a6UH1
    ISqBDSk93RMzDVcnZ4TC5fY24JlDBDU9/FLkWk5kTGzykZ+/N8qKrIS3qGXkKrav
    CHKIFIk6Tb6ua8EvdJb/34mR51dlRixqUMH9qAs6qSswE6FRLHRbYpvNRXoZFqjw
    oh0AYQeVMXXsKSblcxtPPwZ3r57j5Nzjh0rYgdp7AmwHygesQtUCBcn5RpkSMJBs
    yaeIRw4h0DZZdLDggFQlL4MZdEkAh9V1H4ymIPncYTUfIDKoAht2bBr4uRypfhin
    2wIDAQAB
    -----END PUBLIC KEY-----`;

  }
  public valid(jwt: string) {
    return this.validJwt(jwt, this.llavepub);
  }
  public validJwt(jwt: string, key: string) {
    var publicKey = key;
    var token = jwt;

    var isValid = rs.KJUR.jws.JWS.verify(token, publicKey, ['RS256']);
    if (isValid) {
      return true;
    } else {
      return false;
    }
  }
}
