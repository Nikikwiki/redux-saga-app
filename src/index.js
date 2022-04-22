import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';
import LatestNews from './pages/latest-news/latest-news';
import PopularNews from './pages/popular-news/popular-news';
import store from './redux/store';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App>
                    <Routes>
                        <Route  path="/" element={<Home />} />
                        <Route path="latest-news" element={<LatestNews />}  />
                        <Route path="popular-news" element={<PopularNews />}  />
                    </Routes>
                </App>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

