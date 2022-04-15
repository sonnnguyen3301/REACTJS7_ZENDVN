// import React, { useState, useEffect, useMemo } from 'react';
// import ArticleItem from '../components/ArticleItem';
import Header from '../components/Header';
import ArticleLatest from '../components/ArticleLatest/ArticleLatest';
import ArticlePopular from '../components/ArticlePopular/ArticlePopular';
import ArticleList from '../components/ArticleList/ArticleList';

import Footer from '../components//Footer';

// import Button from '../components/shared/Button';
// import Input from '../components/shared/Input';
// import MainTitle from '../components/shared/MainTitle';

function HomePage() {
    return (
        <div>
            <Header />

            <ArticleLatest />
        
            <ArticlePopular />

            <ArticleList />

            <Footer />

        </div>
    );
}

export default HomePage;