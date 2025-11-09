import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
            Welcome to Tauri + React
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Build beautiful, fast, and secure desktop applications
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://vite.dev"
            target="_blank"
            className="group transform transition-all duration-300 hover:scale-110 hover:-translate-y-2"
          >
            <img
              src="/vite.svg"
              className="h-20 md:h-24 filter drop-shadow-lg group-hover:drop-shadow-[0_0_2em_#747bff] transition-all duration-500"
              alt="Vite logo"
            />
          </a>
          <a
            href="https://tauri.app"
            target="_blank"
            className="group transform transition-all duration-300 hover:scale-110 hover:-translate-y-2"
          >
            <img
              src="/tauri.svg"
              className="h-20 md:h-24 filter drop-shadow-lg group-hover:drop-shadow-[0_0_2em_#24c8db] transition-all duration-500"
              alt="Tauri logo"
            />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="group transform transition-all duration-300 hover:scale-110 hover:-translate-y-2"
          >
            <img
              src={reactLogo}
              className="h-20 md:h-24 filter drop-shadow-lg group-hover:drop-shadow-[0_0_2em_#61dafb] transition-all duration-500"
              alt="React logo"
            />
          </a>
        </div>

        <p className="text-center text-slate-600 dark:text-slate-300 mb-8">
          Click on the Tauri, Vite, and React logos to learn more.
        </p>

        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20 dark:border-slate-700/50">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              greet();
            }}
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="greet-input"
                onChange={(e) => setName(e.currentTarget.value)}
                placeholder="Enter a name..."
                className="flex-1 rounded-xl border-2 border-slate-200 dark:border-slate-600 px-6 py-3 text-base font-medium bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
              >
                Greet
              </button>
            </div>
            {greetMsg && (
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                <p className="text-green-800 dark:text-green-200 text-lg font-medium text-center">
                  {greetMsg}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

export default App;
