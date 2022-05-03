import './App.css';
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";

import Menu from './components/Menu';

function App() {
  const { status, connect, disconnect, availableConnectTypes } = useWallet();

  console.log("Wallet status is ", status);
  console.log("Available connection types:", availableConnectTypes);

  const renderConnectButton = () => {
    if (status === WalletStatus.WALLET_NOT_CONNECTED) {
      return (
        <div className="connect-wallet-div">
          <button
            type="button"
            key={`connect-EXTENSION`}
            onClick={() => connect("EXTENSION")}
            className="cta-button connect-wallet-button"
          >
            Connect wallet
          </button>
        </div>
      );
    } else if (status === WalletStatus.WALLET_CONNECTED) {
      return (
        <button
          type="button"
          onClick={() => disconnect()}
          className="cta-button connect-wallet-button"
        >
          Disconnect
        </button>
      );
    }
  };

  return (
    <main className="App">
      <header>
        <div className="header-titles">
          <h1>⚔ Slicing Demon heads ⚔</h1>
          <p>Only you can save us from demons!</p>
        </div>

      </header>

      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <div>
        <img
          src="https://media4.giphy.com/media/721us8U63qA4VgOJ1r/giphy.gif?cid=ecf05e47lsx6se5lelutwf30gfa5tvo8ihk090lz8swlwb3r&rid=giphy.gif&ct=g"
          alt="Demon Slayer gif"
        />
        </div>
      )}

      {status === WalletStatus.WALLET_CONNECTED && (
          <div className="game-menu-container">
            <Menu />
          </div>
        )}

      {renderConnectButton()}
    </main>
  );
}

export default App;
