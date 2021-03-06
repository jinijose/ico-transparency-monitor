export default {
  crowdSaleTokenContract: '0xE7775A6e9Bcf904eb39DA2b68c5efb4F9360e08C',
  information: {
    name: 'TOKEN-AS-A-SERVICE',
    logo: 'https://www.taas.fund/favicon.ico',
    website: 'https://taas.fund/',
  },
  events: {
    Transfer: {
      args: {
        tokens: 'value',
        sender: 'to',
      },
      customArgs: {
        from: '0x94917caf0cb1131345911874a2ceaf6ae2e8ee0f',
      },
      firstTransactionBlockNumber: 3427798,
      lastTransactionBlockNumber: 3648684,
      countTransactions: true,
    },
  },
  icoParameters: {
    cap: async () => 'not provided',
    startDate: async () => 'not provided',
    endDate: async () => 'not provided',
    status: async () => 'not provided',
  },
  matrix: {
    q1: { answer: true },
    q2: {
      answer: false,
      comment: 'Source code provided is just this proxy over EToken2 contract with address 0x331d077518216c07c87f4f18ba64cd384c411f84, basically useless.',
    },
    q3: { answer: false },
    q4: { answer: null },
    q5: { answer: null },
    q6: { answer: false, comment: 'Ether is not sent to smart contract, probably handled on backend' },
    q7: { answer: null },
    q8: { answer: null },
    q9: { answer: null },
    q10: { answer: null },
    q11: { answer: false },
    q12: { answer: null },
    q13: { answer: null },
    q14: { answer: null },
  },
  addedBy: 'Mostafa Balata',
  dateAdded: '14-07-2017',
};
