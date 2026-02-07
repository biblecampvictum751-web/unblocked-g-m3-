
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-black tracking-tighter uppercase">
                Nova<span className="text-indigo-500">Arcade</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              NovaArcade is your ultimate destination for unblocked web games. We curate the best titles from across the web for a premium gaming experience.
            </p>
            <div className="flex gap-4">
               {['twitter', 'discord', 'github'].map(social => (
                <button key={social} className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current opacity-20 rounded-sm"></div>
                </button>
               ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Categories</h4>
            <ul className="space-y-4 text-slate-400">
              <li><button className="hover:text-indigo-400 transition-colors">Action Games</button></li>
              <li><button className="hover:text-indigo-400 transition-colors">Puzzle Games</button></li>
              <li><button className="hover:text-indigo-400 transition-colors">Retro Classics</button></li>
              <li><button className="hover:text-indigo-400 transition-colors">Racing Games</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Support</h4>
            <ul className="space-y-4 text-slate-400">
              <li><button className="hover:text-indigo-400 transition-colors">Request a Game</button></li>
              <li><button className="hover:text-indigo-400 transition-colors">Contact Support</button></li>
              <li><button className="hover:text-indigo-400 transition-colors">Privacy Policy</button></li>
              <li><button className="hover:text-indigo-400 transition-colors">Terms of Service</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 NovaArcade Entertainment. All rights reserved.</p>
          <div className="flex gap-6">
            <button className="hover:text-slate-300">English</button>
            <button className="hover:text-slate-300">Developers</button>
            <button className="hover:text-slate-300">Sitemap</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
