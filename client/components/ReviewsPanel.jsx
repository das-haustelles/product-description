import React from 'react';
import axios from 'axios';

import ReactPaginate from 'react-paginate';
import ReviewGuidelines from './ReviewGuidelines';
import RatingSummaryBreakdown from './RatingSummaryBreakdown';
import DropdownFilters from './DropdownFilters';
import UserReview from './UserReviews';
import PaginationComponent from './PaginationComponent';

const EntireSection = styled.section`
  width: 50%;
  background-color: #fff;
  font-family: "Noto",Helvetica,Arial,sans-serif;
`;

const XDiv = styled.div`
  font-family: Noto,Helvetica,Arial,sans-serif;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  color: #888;
`;

const Header2 = styled.h2`
  color: #444;
  margin-top: 0;
  font-weight: 300;
  font-family: "Noto"
  font-size: 1.5rem;
  line-height: 1.4;
  color: #444;
  margin-top: 0;
  margin-bottom: .5rem;
  font-weight: 300;
  font-style: normal;
`;

const SidePanelContentSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

class ReviewsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      users: [],
      reviews: [],
      pageCount: 0,
      offset: 0,
    };
    this.handleCurrentPageChange = this.handleCurrentPageChange.bind(this);
  }

  componentDidMount() {
    const hostelId = window.location.pathname.split('/')[1];
    axios.get(`/api/hostels/${hostelId}/reviews`)
      .then((response) => {
        const reviewsCount = (response.data.length / 10);
        const reviews = response.data.map(user => user.reviews[0]);
        const users = response.data;
        console.table('users', users);
        console.table('reviews', reviews);
        // console.table('first user\'s reviews', response.data[0].reviews);
        // const reviewsSortedByNewest = response.data.sort(this.sortByNewest);
        const reviewsSortedByNewest = reviews.sort(this.sortByNewest);
        const userReviewSortedByNewest = users.sort(this.userSortByNewest);
        this.setState({
          reviews: reviewsSortedByNewest,
          users: userReviewSortedByNewest,
          pageCount: reviewsCount,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleCurrentPageChange(e) {
    e.preventDefault();
    this.setState({
      currentPage: e.currentTarget.textContent,
    });
  }

  handlePageClick = (data) => {
    console.log('page clicked?', data.selected);
    this.setState({
      offset: data.selected * 10,
    });
  }

  sortByOldest = (a, b) => {
    if (a.reviewDate < b.reviewDate) {
      return -1;
    } if (a.reviewDate > b.reviewDate) {
      return 1;
    }
    return 0;
  }

  sortByNewest = (a, b) => {
    if (a.reviewDate < b.reviewDate) {
      return 1;
    } if (a.reviewDate > b.reviewDate) {
      return -1;
    }
    return 0;
  }

  userSortByOldest = (a, b) => {
    if (a.reviews[0].reviewDate < b.reviews[0].reviewDate) {
      return -1;
    } if (a.reviews[0].reviewDate > b.reviews[0].reviewDate) {
      return 1;
    }
    return 0;
  }

  userSortByNewest = (a, b) => {
    if (a.reviews[0].reviewDate < b.reviews[0].reviewDate) {
      return 1;
    } if (a.reviews[0].reviewDate > b.reviews[0].reviewDate) {
      return -1;
    }
    return 0;
  }

  filterReviews = (dropdownSelected) => {
    let sortedReviews;
    let userReviewSortedByNewest;
    const { reviews, users } = this.state;
    if (dropdownSelected === 'Oldest') {
      sortedReviews = reviews.sort(this.sortByOldest);
      userReviewSortedByNewest = users.sort(this.userSortByOldest);
    } else if (dropdownSelected === 'Newest') {
      sortedReviews = reviews.sort(this.sortByNewest);
      userReviewSortedByNewest = users.sort(this.userSortByNewest);
    }
    this.setState({
      reviews: sortedReviews,
      users: userReviewSortedByNewest,
    });
  }

  render() {
    const {
      currentPage, reviews, users, pageCount, offset,
    } = this.state;
    const rangeOfreviews = reviews.slice(offset, offset + 10);
    const rangeOfUsers = users.slice(offset, offset + 10);
    return (
      <EntireSection>
        <Header2>Reviews & Ratings</Header2>
        <div className="slide-panel-content">
          <div className="slide-panel-content-wrapper" />
          <SidePanelContentSection>
            <div className="reviews-overlay-content">
              <ReviewGuidelines />
              <RatingSummaryBreakdown />
              <DropdownFilters filterReviews={this.filterReviews} />
              {rangeOfreviews.map((review, idx) => (
                <UserReview key={idx} review={review} user={rangeOfUsers[idx]} />
              ))}
            </div>
          </SidePanelContentSection>
        </div>
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={pageCount}
          marginPagesDisplayed={0}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
        />
      </EntireSection>
    );
  }
}

export default ReviewsPanel;
