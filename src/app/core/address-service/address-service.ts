import { Address } from './../Address';
import { Injectable } from '@angular/core';

@Injectable()
export class AddressService {
  private addresses: Address[] = [];

  constructor() {
    this.addresses.push(new Address(1, 'Home', '315 Muchado Hill Rd', '', 'Alton', 'NH', '03809', 'home', '', '43.3778073', '-71.1905709'));
    this.addresses.push(new Address(2, 'Hannaford', '80 Wolfeboro Hwy', '', 'Alton', 'NH', '03809', 'cafe', '', '43.4538906', '-71.21104919999999'));
    this.addresses.push(new Address(3, 'McDonald\'s', '4 Homestead Pl', '', 'Alton', 'NH', '03809', 'restaurant', '', '43.4518239', '-71.2103229'));
    this.addresses.push(new Address(4, 'Dunkin Donuts', '50 S. Main St', '', 'Alton', 'NH', '03809', 'restaurant', '', '43.4524544', '-71.2197322'));
    this.addresses.push(new Address(5, 'Rusty Moose', '15 Homestead Pl', '', 'Alton', 'NH', '03809', 'restaurant', '', '43.4518133', '-71.2106836'));
    this.addresses.push(new Address(6, 'Alton Village Pizza', '132 Main St', '', 'Alton', 'NH', '03809', 'restaurant', '', '43.4587097', '-71.2284322'));
    this.addresses.push(new Address(7, 'Gilman Library', '100 Main St', '', 'Alton', 'NH', '03809', 'book', '', '43.4509086', '-71.226265'));
    this.addresses.push(new Address(8, 'Alton Central School', '41 School St', '', 'Alton', 'NH', '03809', 'school', '', '43.4509086', '-71.22626'));
    this.addresses.push(new Address(9, 'Prospect Mountain High School', '242 Suncook Valley Rd', '', 'Alton', 'NH', '03809', 'school', '', '43.4338355', '-71.2174558'));
    this.addresses.push(new Address(10, 'The Riverview Hotel', '9 Suncook Valley Rd', '', 'Alton', 'NH', '03809', 'briefcase', '', '43.4494051', '-71.2125467'));
    this.addresses.push(new Address(11, 'River Run Deli', 'Suncook Valley Rd', '', 'Alton', 'NH', '03809', 'restaurant', '', '43.4486308', '-71.213016'));
    this.addresses.push(new Address(12, 'Dockside Restaurant', '6 East Dr', '', 'Alton Bay', 'NH', '03810', 'restaurant', '', '43.4726387', '-71.2426947'));
    this.addresses.push(new Address(13, 'Sandy Point Restaurant', '186 Mt Major Hwy', '', 'Alton Bay', 'NH', '03810', 'restaurant', '', '43.4841212', '-71.2496742'));
    this.addresses.push(new Address(14, 'Bay Side Inn', '86 NH-11D', '', 'Alton Bay', 'NH', '03810', 'briefcase', '', '43.5066617', '-71.2616502'));
    this.addresses.push(new Address(15, 'King Birch Motor Lodge', '122 NH-11D,', '', 'Alton Bay', 'NH', '03810', 'briefcase', '', '43.5066617', '-71.2616502'));
  }

  fetchAll() : Promise<Address[]>{
    var p = Promise.resolve<Address[]>(this.addresses);
    return p;
  }

}
