import { Injectable } from '@angular/core';

@Injectable()
export class PaymentService {

  tr_groups = [
    ['103','Karta płatnicza','53','https://secure.tpay.com/_/groups/103.png?2','53'],
    ['113','Alior Bank SA','9,64,60,29','https://secure.tpay.com/_/groups/113.png?2','9'],
    ['102','Bank Pekao SA','4,47,55,60,29','https://secure.tpay.com/_/groups/102.png?2','4'],
    ['108','PKO Bank Polski','21,64,29','https://secure.tpay.com/_/groups/108.png?2','21'],
    ['110','Inteligo','14,64,29','https://secure.tpay.com/_/groups/110.png?2','14'],
    ['160','mBank','18,29','https://secure.tpay.com/_/groups/160.png?2','18'],
    ['111','ING Bank Śląski SA','13,64,29','https://secure.tpay.com/_/groups/111.png?2','13'],
    ['114','Bank Millennium SA','2,48,64,60,29','https://secure.tpay.com/_/groups/114.png?2','2'],
    ['115','Bank Zachodni WBK SA','6,64,60,29','https://secure.tpay.com/_/groups/115.png?2','6'],
    ['131','Eurobank','32,29','https://secure.tpay.com/_/groups/131.png?2','32'],
    ['132','Citibank Handlowy SA','7,29','https://secure.tpay.com/_/groups/132.png?2','7'],
    ['116','Credit Agricole Polska SA','17,29','https://secure.tpay.com/_/groups/116.png?2','17'],
    ['119','Getin Bank SA','12,60,29','https://secure.tpay.com/_/groups/119.png?2','12'],
    ['112','T-Mobile Usługi Bankowe','52,29','https://secure.tpay.com/_/groups/112.png?2','52'],
    ['124','Bank Pocztowy SA','5,29','https://secure.tpay.com/_/groups/124.png?2','5'],
    ['125','Bank Ochrony Środowiska SA','3,29','https://secure.tpay.com/_/groups/125.png?2','3'],
    ['128','Idea Bank','62,29','https://secure.tpay.com/_/groups/128.png?2','62'],
    ['135','Banki Spółdzielcze','28,42,56,63,29','https://secure.tpay.com/_/groups/135.png?2','63'],
    ['133','Bank Gospodarki Żywnościowej SA','1,29','https://secure.tpay.com/_/groups/133.png?2','1'],
    ['159','Neo Bank','24,29','https://secure.tpay.com/_/groups/159.png?2','24'],
    ['139','Raiffeisen Bank Polska SA','22,29','https://secure.tpay.com/_/groups/139.png?2','22'],
    ['134','Deutsche Bank PBC SA','8,29','https://secure.tpay.com/_/groups/134.png?2','8'],
    ['130','Smart Bank','26,29','https://secure.tpay.com/_/groups/130.png?2','26'],
    ['145','Plus Bank SA','15,60,29','https://secure.tpay.com/_/groups/145.png?2','15'],
    ['140','Toyota Bank','23,29','https://secure.tpay.com/_/groups/140.png?2','23'],
    ['137','Volkswagen Bank','27,29','https://secure.tpay.com/_/groups/137.png?2','27'],
    ['104','MasterPass','57','https://secure.tpay.com/_/groups/104.png?2','57'],
    ['106','PayPal','31','https://secure.tpay.com/_/groups/106.png?2','31'],
    ['107','eHat.me','58','https://secure.tpay.com/_/groups/107.png?2','58'],
    ['109','Alior Raty','49','https://secure.tpay.com/_/groups/109.png?2','49'],
    ['148','Euro Payment','50','https://secure.tpay.com/_/groups/148.png?2','50'],
    ['157','Druczek płatności / Przelew z innego banku','29','https://secure.tpay.com/_/groups/157.png?2','29']
  ]
  constructor() { }

  getTrGroups(){
    return this.tr_groups;
  }
}
