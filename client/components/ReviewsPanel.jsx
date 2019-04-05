import React from 'react';
import styled from 'styled-components';
import { Comment } from 'styled-icons/fa-regular';


const EntireSection = styled.section`
  width: 50%;
  background-color: #fff;
`;

const SidePanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
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
  font-size: 1.5rem;
  line-height: 1.4;
  color: #444;
  margin-top: 0;
  margin-bottom: .5rem;
  -webkit-font-smoothing: antialiased;
  font-weight: 300;
  font-family: "Noto",Helvetica,Arial,sans-serif;
  font-style: normal;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const ReviewGuidelinesParagraph = styled.p`
  margin: 0 auto;
  font-size: .8rem;
  line-height: 1.2rem;
  font-family: inherit;
  font-weight: 400;
  padding: 0;
`;

const ReviewGuidelinesLink = styled.a`
  text-decoration: none;
  color: #ff6a3a;
  font-size: .8rem;
  font-family: "Noto",Helvetica,Arial,sans-serif;
  cursor: pointer;
`;

const SidePanelContentSection = styled.section`
  display: flex;
`;

const RatingSummary = styled.div`
`;

const Score = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ff7547;
  padding: .5rem;
  font-size: 1.4rem;
  text-align: center;
  font-weight: 700;
  border-radius: .188rem;
  color: #fff;
  float: left;
  line-height: 1;
  min-width: 3.4rem;
  display: flex;
  box-sizing: border-box;
  font-family: Helvetica,Arial,sans-serif;
  padding: .5rem;
  margin-top: 25px;
`;

const Paragraph = styled.p`
  color: #ff7547;
  font-size: 1rem;
  font-weight: 700;
`;

const ReviewLink = styled.span`
  margin-left: .2rem;
  flex-grow: 0;
  line-height: 1rem;
  font-size: .65rem;
  color: #000000;
  cursor: pointer;
  text-decoration: none;
`;

const RatingBreakdown = styled.ul`
  list-style-type: none;
`;

const RatingBar = styled.li`
`;

const ProgressBar = styled.div`
  position: relative;
  height: 0.375rem;
  width: 350px;
  border-radius: 50px;
  border: 1px solid #333;
  background: black;
`;

const Filler = styled.div`
  background: #ff7547;
  height: 100%;
  width: ${props => props.percentage || 0}%;
  border-radius: inherit;
  transition: width .2s ease-in;
`;

function ReviewsPanel() {
  return (
    <EntireSection>
      <SidePanelHeader>
        <Header2>Reviews & Ratings</Header2>
        <XDiv>x</XDiv>
      </SidePanelHeader>


      <div className="slide-panel-content">
        <div className="slide-panel-content-wrapper" />
        <SidePanelContentSection>
          <div className="reviews-overlay-content">
            <div className="row-container">
              <div className="small-12 columns">
                <div className="intro">
                  <ReviewGuidelinesParagraph>The rating percentage is calculated from customers who booked within the last 6 months. All ratings and reviews are based on the feedback and opinions of the customers who submitted them and do not express the opinions of Hostelworld.com. This way, you get an up-to-the-minute opinion of just how good a hostel really is. </ReviewGuidelinesParagraph>
                  <ReviewGuidelinesLink href="https://www.hostelworld.com/reviewguidelines" target="_blank" rel="noopener noreferrer"> Read our review guidelines</ReviewGuidelinesLink>
                </div>
              </div>
            </div>

            <div className="row-container">
              <div className="small-12 columns">
                <div className="intro">
                  <RatingSummary>
                    <Score> 8.8 </Score>
                    <div>
                      <Paragraph id="summary-keyword">Fabulous</Paragraph>
                      <div>
                        <Comment size="10" />
                        <ReviewLink>2870 Total Reviews</ReviewLink>
                      </div>
                    </div>
                  </RatingSummary>

                  <RatingBreakdown>
                    <RatingBar>
                      <p>
                        Value For Money
                        <strong className="pull-right">     8.4</strong>
                      </p>
                      <ProgressBar>
                        <Filler percentage={84} />
                      </ProgressBar>
                    </RatingBar>
                    <RatingBar>
                      <p>
                        Security
                        <strong className="pull-right">     9.1</strong>
                      </p>
                      <ProgressBar>
                        <Filler percentage={91} />
                      </ProgressBar>
                    </RatingBar>
                    <RatingBar>
                      <p>
                        Location
                        <strong className="pull-right">     9.8</strong>
                      </p>
                      <ProgressBar>
                        <Filler percentage={98} />
                      </ProgressBar>
                    </RatingBar>
                    <RatingBar>
                      <p>
                        Staff
                        <strong className="pull-right">     8.9</strong>
                      </p>
                      <ProgressBar>
                        <Filler percentage={89} />
                      </ProgressBar>
                    </RatingBar>
                    <RatingBar>
                      <p>
                        Atmosphere
                        <strong className="pull-right">     8.4</strong>
                      </p>
                      <ProgressBar>
                        <Filler percentage={84} />
                      </ProgressBar>
                    </RatingBar>
                    <RatingBar>
                      <p>
                        Cleanliness
                        <strong className="pull-right">     8.3</strong>
                      </p>
                      <ProgressBar>
                        <Filler percentage={83} />
                      </ProgressBar>
                    </RatingBar>
                    <RatingBar>
                      <p>
                        Facilities
                        <strong className="pull-right">     8.4</strong>
                      </p>
                      <ProgressBar>
                        <Filler percentage={84} />
                      </ProgressBar>
                    </RatingBar>
                  </RatingBreakdown>
                </div>
              </div>

            </div>

            <div className="row-container">
              <div className="small-12 columns">
                <div className="intro">
                  <p>reviews filter: show, sort_by</p>
                </div>
              </div>

            </div>

            <div className="row-container">
              <div className="small-12 columns">
                <div className="intro">
                  <p>individual reviews</p>
                </div>
              </div>

            </div>

            <div className="row-container">
              <div className="small-12 columns">
                <div className="intro">
                  <p>next page buttons</p>
                </div>
              </div>

            </div>
          </div>
        </SidePanelContentSection>

      </div>
    </EntireSection>

  );
}

export default ReviewsPanel;
