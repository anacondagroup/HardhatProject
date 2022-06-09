require("@nomiclabs/hardhat-waffle");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const INFURA_API_KEY = "fe093e4b38d04aa4a4e2af96a481e464";
const PRIVATE_KEY = "77c08531a01af090b37275a1ba3ca717240294ba6f3583280a14f32601749901";

module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY]
    }
  }
};
