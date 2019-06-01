import React from 'react';
import axios from 'axios';

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
      userReviews: [],
    };
    this.handleCurrentPageChange = this.handleCurrentPageChange.bind(this);
  }

  componentDidMount() {
    const hostelId = window.location.pathname.split('/')[1];
    axios.get(`/api/hostels/${hostelId}/reviews`)
      .then((response) => {
        this.setState({
          userReviews: response.data,
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

  render() {
    const { currentPage, userReviews } = this.state;
    let tenReviews = userReviews.slice(0, 10);
    return (
      <EntireSection>
        <Header2>Reviews & Ratings</Header2>
        <div className="slide-panel-content">
          <div className="slide-panel-content-wrapper" />
          <SidePanelContentSection>
            <div className="reviews-overlay-content">
              <ReviewGuidelines />
              <RatingSummaryBreakdown />
              <DropdownFilters />
              {tenReviews.map((review, idx) => <UserReview key={idx} review={review} />)}
              <PaginationComponent currentPage={currentPage} handleClickReviewsPanel={this.handleCurrentPageChange} />
            </div>
          </SidePanelContentSection>
        </div>
      </EntireSection>

    );
  }
}

export default ReviewsPanel;
