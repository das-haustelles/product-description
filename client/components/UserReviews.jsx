import React from 'react';
import { User, Comments } from 'styled-icons/fa-solid';
import { Calendar } from 'styled-icons/boxicons-regular';

const UserReviewsContainer = styled.div`
  display: flex;
  float: left;
  justify-content: flex-start;
`;

const UserProfileSummary = styled.ul`
  display: flex;
  flex-direction: column;
`;

const BackgroundCircleUserLogo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: 2px solid #ccc;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const StyledUserLogo = styled(User)`
  width: 30px;
  height: 30px;
  display: flex;
  color: #888;
`;

const Username = styled.li`
list-style: none;
font-weight: 700;
max-width: 8.75rem;
  font-size: .7rem;
  color: #666;
`;

const UserDetails = styled.li`
  list-style: none;
  font-size: .7rem;
  color: #666;
`;

const UserRank = styled.li`
  list-style: none;
  font-size: .7rem;
  color: #666;
`;

const IndividualUserReviews = styled.li`
  list-style:none;
`;

const IndividualUserReviewsLink = styled.a`
  color: #ff6a3a;  
  text-decoration: none;
  transition: color .2s ease-in-out;
  display: inline-block;
  font-size: .7rem;
`;

const ReviewInfo = styled.div`
  margin-left: 40px;
`;

const UserReviewInfoHeader = styled.div`

`;

const UserReviewInfoHeaderRating = styled.div`

`;

const UserReviewInfoHeaderRatingScore = styled.div`
  padding: .25rem;
  min-width: 2.2rem;
  font-size: 1rem;
  background-color: #ff7547;
  text-align: center;
  font-weight: 700;
  border-radius: .188rem;
  color: #fff;
  float: left;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-family: "Noto",Helvetica,Arial,sans-serif;
`;

const UserReviewInfoHeaderRatingScoreInfo = styled.div`
`;

const UserReviewInfoHeaderRatingScoreInfoKeyword = styled.p`
  color: #ff7547;
  font-size: .8rem;
  line-height: .8rem;
  font-weight: 700;
  margin: 0;
  flex-grow: 0;
`;

const UserReviewInfoHeaderNotes = styled.div`
  padding-top: 1rem;
  margin: 0;
  padding: 0;
  font-size: 1.1rem;
  color: #333;
  font-family: "Noto",Helvetica,Arial,sans-serif;
`;

const CalendarIcon = styled(Calendar)`
  width: 14px;
  height: 14px;
`;

const UserReviewHeaderDate = styled.div`
  display: flex;
  justify-content: center;
  color: #888;
  text-align: right;
  font-size: .8rem;
`;

const UserReviewReply = styled.div`
  & {
    background-color: #f4f4f4;
  }
  &:before {
    border-color: rgba(67,245,32,0);
    border-bottom-color: #f4f4f4;
    border-width: 11px;
    margin-left: -11px;
    bottom: 100%;
    left: 10%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    z-index: 10;
  }
`;

const UserReviewReplyParagraph = styled.p`

`;

const UserReviewSignature = styled.div`
`;

const UserReviewReplySignatureCommentLogo = styled(Comments)`
  width: 14px;
  height: 14px;
  font-size: .7rem;
  color: #777;
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
`;

const UserReviewReplySignatureSpan = styled.span`
  font-size: .7rem;
  color: #777;
  margin-left: .25rem;
`;

class UserReviewsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hostelName: 'night owl',
    };
  }

  render() {
    const { review } = this.props;
    const {
      username, age, gender, country, travelExperience,
    } = review;
    const {
 avgRating, avgRatingWord, reviewDate, reviewText, propertyReply 
} = review.reviews[0];
    return (
      <div className="row-container">
        <div className="small-12 columns">
          <div className="intro">
            <UserReviewsContainer>
              <UserProfileSummary>
                <BackgroundCircleUserLogo>
                  <StyledUserLogo />
                </BackgroundCircleUserLogo>

                <Username>
                  {username}
                </Username>
                <UserDetails>
                  {country}
                  ,
                  {gender}
                  ,
                  {age}
                </UserDetails>
                <UserRank>
                  {travelExperience}
                </UserRank>
                <IndividualUserReviews>
                  <IndividualUserReviewsLink href="wwww.hostelworld.com" target="_blank">4 reviews</IndividualUserReviewsLink>
                </IndividualUserReviews>
              </UserProfileSummary>

              <ReviewInfo>
                <UserReviewInfoHeader>
                  <UserReviewInfoHeaderRating>
                    <UserReviewInfoHeaderRatingScore>
                      {avgRating}
                    </UserReviewInfoHeaderRatingScore>
                    <UserReviewInfoHeaderRatingScoreInfo>
                      <UserReviewInfoHeaderRatingScoreInfoKeyword>
                        {avgRatingWord}
                      </UserReviewInfoHeaderRatingScoreInfoKeyword>
                    </UserReviewInfoHeaderRatingScoreInfo>
                  </UserReviewInfoHeaderRating>

                  <UserReviewHeaderDate>
                    <CalendarIcon />
                    <span>
                      {reviewDate}
                    </span>
                  </UserReviewHeaderDate>
                </UserReviewInfoHeader>

                <UserReviewInfoHeaderNotes>
                  {reviewText}
                </UserReviewInfoHeaderNotes>
                <UserReviewReply>
                  <UserReviewReplyParagraph>
                    {propertyReply}
                  </UserReviewReplyParagraph>
                  <UserReviewSignature>
                    <UserReviewReplySignatureCommentLogo />
                    <UserReviewReplySignatureSpan>
                      Property Reply
                    </UserReviewReplySignatureSpan>
                  </UserReviewSignature>
                </UserReviewReply>
              </ReviewInfo>

            </UserReviewsContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default UserReviewsComponent;
