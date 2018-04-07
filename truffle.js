module.exports = {
     // See <http://truffleframework.com/docs/advanced/configuration>
     // to customize your Truffle configuration!
     networks: {
          ganache: {
               host: "localhost",
               port: 7545,
               network_id: "*" // Match any network id
          },
          chainskills: {
              host: "localhost",
              port: 8545,
              network_id: "4224",
              gas: 4700000
          },
          rinkeby: {
            host: "localhost",
            port: 8545,
            network_id: 4, //rinkeby testnet
            gas: 4700000,
            from: "0x7d7026fEA6dE281E13E7B5FF32874169DdE5Fa5A"
          }
     }
};
