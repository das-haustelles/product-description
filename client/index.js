import React from 'react';
import ReactDOM from 'react-dom';
import MiniSummaryRating from './components/MiniSummaryRating';
import ReviewsPanel from './components/ReviewsPanel';

window.ReviewsPanel = ReviewsPanel;

ReactDOM.render(<ReviewsPanel />, document.getElementById('reviews'));
