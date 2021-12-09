const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: 1638921878389,
      transactions: [],
      nonce: 100,
      hash: '0',
      previousBlockHash: '0',
    },
    {
      index: 2,
      timestamp: 1638921922346,
      transactions: [],
      nonce: 18140,
      hash: '0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100',
      previousBlockHash: '0',
    },
    {
      index: 3,
      timestamp: 1638921994507,
      transactions: [
        {
          amount: 12.5,
          sender: '00',
          recipient: '6f43a34057ba11eca4089b9ea4c3a5bf',
          transactionId: '8979fed057ba11eca4089b9ea4c3a5bf',
        },
        {
          amount: 1030,
          sender: 'FNDFKE3FER3NR43J',
          recipient: 'BCHFBER345RH45BJR34J',
          transactionId: 'a4e04ee057ba11eca4089b9ea4c3a5bf',
        },
        {
          amount: 25,
          sender: 'FNDFKE3FER3NR43J',
          recipient: 'BCHFBER345RH45BJR34J',
          transactionId: 'ac73da5057ba11eca4089b9ea4c3a5bf',
        },
        {
          amount: 325,
          sender: 'FNDFKE3FER3NR43J',
          recipient: 'BCHFBER345RH45BJR34J',
          transactionId: 'b002313057ba11eca4089b9ea4c3a5bf',
        },
      ],
      nonce: 5154,
      hash: '0000c80703747c5a085a58ab3a3da2e841c59069f713c9375f09eee9682ac426',
      previousBlockHash:
        '0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100',
    },
    {
      index: 4,
      timestamp: 1638922040367,
      transactions: [
        {
          amount: 12.5,
          sender: '00',
          recipient: '6f43a34057ba11eca4089b9ea4c3a5bf',
          transactionId: 'b47ac10057ba11eca4089b9ea4c3a5bf',
        },
        {
          amount: 34,
          sender: 'FNDFKE3FER3NR43J',
          recipient: 'BCHFBER345RH45BJR34J',
          transactionId: 'c468d16057ba11eca4089b9ea4c3a5bf',
        },
        {
          amount: 54,
          sender: 'FNDFKE3FER3NR43J',
          recipient: 'BCHFBER345RH45BJR34J',
          transactionId: 'c72c372057ba11eca4089b9ea4c3a5bf',
        },
        {
          amount: 67,
          sender: 'FNDFKE3FER3NR43J',
          recipient: 'BCHFBER345RH45BJR34J',
          transactionId: 'ca51930057ba11eca4089b9ea4c3a5bf',
        },
        {
          amount: 87,
          sender: 'FNDFKE3FER3NR43J',
          recipient: 'BCHFBER345RH45BJR34J',
          transactionId: 'cd795fe057ba11eca4089b9ea4c3a5bf',
        },
      ],
      nonce: 34192,
      hash: '0000f8af364f03af5df7abcea7b49000952285b309e10d419a12cb3a6ca08d2e',
      previousBlockHash:
        '0000c80703747c5a085a58ab3a3da2e841c59069f713c9375f09eee9682ac426',
    },
    {
      index: 5,
      timestamp: 1638922053589,
      transactions: [
        {
          amount: 12.5,
          sender: '00',
          recipient: '6f43a34057ba11eca4089b9ea4c3a5bf',
          transactionId: 'cfd0483057ba11eca4089b9ea4c3a5bf',
        },
      ],
      nonce: 41324,
      hash: '00000f2d27cfbf2333ee3766d44e94492f474b2958f999770af7e546744d41b2',
      previousBlockHash:
        '0000f8af364f03af5df7abcea7b49000952285b309e10d419a12cb3a6ca08d2e',
    },
    {
      index: 6,
      timestamp: 1638922055392,
      transactions: [
        {
          amount: 12.5,
          sender: '00',
          recipient: '6f43a34057ba11eca4089b9ea4c3a5bf',
          transactionId: 'd7b1cc9057ba11eca4089b9ea4c3a5bf',
        },
      ],
      nonce: 51078,
      hash: '0000f9dbb3d2b37ee70c27e9373d7cdaf9bf80146a171c5a26ba68e58395bf57',
      previousBlockHash:
        '00000f2d27cfbf2333ee3766d44e94492f474b2958f999770af7e546744d41b2',
    },
  ],
  pendingTransactions: [
    {
      amount: 12.5,
      sender: '00',
      recipient: '6f43a34057ba11eca4089b9ea4c3a5bf',
      transactionId: 'd8c49c2057ba11eca4089b9ea4c3a5bf',
    },
  ],
  currentNodeUrl: 'http://localhost:3001',
  networkNodes: [],
};

console.log('VALID: ', bitcoin.chainIsValid(bc1.chain));
