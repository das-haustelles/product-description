import React from 'react';
import { Comment } from 'styled-icons/fa-regular';

const RatingSummary = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Score = styled.div`
  justify-content: center;
  background-color: #ff7547;
  color: #fff;
  padding: .5rem;
  font-size: 1.4rem;
  text-align: center;
  font-weight: 700;
  border-radius: .188rem;
  line-height: 1;
  min-width: 3.2rem;
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  margin-top: 25px;
`;

const WordReviewCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
`;

const TotalReviewsContainer = styled.div`
  display: flex;
`;

const SummaryWordParagraph = styled.text`
  color: #ff7547;
  font-size: 1rem;
  font-weight: 700;
  margin-top: auto;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 2em;
  grid-gap: .5em;
  padding-left: 0;
`;

const RatingBar = styled.li`
  flex: 50%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const RatingCategory = styled.p`
  font-size: .8rem;
  line-height: 1.2rem;
  width: 350px;
`;

const RatingNumber = styled.strong`
  font-weight: 700;
  font-size: .85rem;
  float: right;
`;

const ProgressBar = styled.div`
  position: relative;
  height: 0.375rem;
  width: 350px;
  border-radius: 50px;
  background: #eee;
  margin-top: auto;
`;

const Filler = styled.div`
  background: #ff7547;
  height: 100%;
  width: ${props => props.percentage || 0}%;
  border-radius: inherit;
  transition: width .2s ease-in;
`;

function RatingSummaryBreakdown() {
  return (
    <div className="row-container">
      <div className="small-12 columns">
        <div className="intro">
          <RatingSummary>
            <Score>8.7</Score>
            <WordReviewCountContainer>
              <SummaryWordParagraph id="summary-keyword">Fabulous</SummaryWordParagraph>
              <TotalReviewsContainer>
                <Comment size="10" />
                <ReviewLink>2870 Total Reviews</ReviewLink>
              </TotalReviewsContainer>
            </WordReviewCountContainer>
          </RatingSummary>

          <RatingBreakdown>
            <RatingBar>
              <RatingCategory>
                Value For Money
                <RatingNumber className="pull-right">8.4</RatingNumber>
              </RatingCategory>
              <ProgressBar>
                <Filler percentage={84} />
              </ProgressBar>
            </RatingBar>
            <RatingBar>
              <RatingCategory>
                Security
                <RatingNumber className="pull-right">9.1</RatingNumber>
              </RatingCategory>
              <ProgressBar>
                <Filler percentage={91} />
              </ProgressBar>
            </RatingBar>
            <RatingBar>
              <RatingCategory>
                Location
                <RatingNumber className="pull-right">9.8</RatingNumber>
              </RatingCategory>
              <ProgressBar>
                <Filler percentage={98} />
              </ProgressBar>
            </RatingBar>
            <RatingBar>
              <RatingCategory>
                Staff
                <RatingNumber className="pull-right">8.9</RatingNumber>
              </RatingCategory>
              <ProgressBar>
                <Filler percentage={89} />
              </ProgressBar>
            </RatingBar>
            <RatingBar>
              <RatingCategory>
                Atmosphere
                <RatingNumber className="pull-right">8.4</RatingNumber>
              </RatingCategory>
              <ProgressBar>
                <Filler percentage={84} />
              </ProgressBar>
            </RatingBar>
            <RatingBar>
              <RatingCategory>
                Cleanliness
                <RatingNumber className="pull-right">     8.3</RatingNumber>
              </RatingCategory>
              <ProgressBar>
                <Filler percentage={83} />
              </ProgressBar>
            </RatingBar>
            <RatingBar>
              <RatingCategory>
                Facilities
                <RatingNumber className="pull-right">     8.4</RatingNumber>
              </RatingCategory>
              <ProgressBar>
                <Filler percentage={84} />
              </ProgressBar>
            </RatingBar>
          </RatingBreakdown>
        </div>
      </div>
    </div>
  );
}

export default RatingSummaryBreakdown;
