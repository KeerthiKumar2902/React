import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyinfo from './hooks/useCurrencyinfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedamount] = useState(0);

  const currencyinfo = useCurrencyinfo(from);
  const option = Object.keys(currencyinfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedamount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedamount(amount * currencyinfo[to]);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/26743048/pexels-photo-26743048.jpeg')`,
      }}
    >
      <div className="w-full max-w-lg mx-auto bg-white/30 backdrop-blur-md border border-white/40 rounded-xl shadow-2xl p-8 transition-all duration-300 ease-in-out">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-white drop-shadow mb-6">💱 Currency Converter</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-6"
        >
          {/* FROM Input */}
          <InputBox
            label="From"
            amount={amount}
            currencyOption={option}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            selectCurrency={from}
          />

          {/* SWAP Button */}
          <div className="relative w-full flex justify-center">
            <button
              type="button"
              onClick={swap}
              className="bg-indigo-600 text-white font-medium px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              🔁 Swap
            </button>
          </div>

          {/* TO Input */}
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOption={option}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
