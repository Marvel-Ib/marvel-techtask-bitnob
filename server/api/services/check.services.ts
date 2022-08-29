import L from '../../common/logger';

let id = 0;
interface check {
  id: number;
  name: string;
}

const mycheck: check[] = [
  { id: id++, name: 'sample 0' },
  { id: id++, name: 'sample 1' },
];

export class MyService {
  all(): Promise<check[]> {
    L.info(mycheck, 'fetch all examples');
    return Promise.reject({ ee: 'too bahd' });

    return Promise.resolve(mycheck);
  }
}

export default new MyService();
