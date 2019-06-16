import React from 'react';
import { User, Comments } from 'styled-icons/fa-solid';
import { Calendar } from 'styled-icons/boxicons-regular';

const UserReviewsContainer = styled.div`
  display: flex;
  font-family: "Noto",Helvetica,Arial,sans-serif;
  border-bottom: 1px solid rgb(221, 221, 221);
`;

const UserProfileSummary = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 25px;
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
  margin-bottom: 6px;
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
  width: 135px;
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
  padding-bottom: 35px;
  padding-top: 25px;
  margin-left: 65px;
  margin-right: 50px;
`;

const UserReviewInfoHeader = styled.div`
  display: flex;
  align-items: center;
`;

const UserReviewRating = styled.div`
  align-items: center;
`;

const UserReviewScore = styled.div`
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

const UserReviewKeyword = styled.p`
  color: #ff7547;
  font-size: .8rem;
  font-weight: 700;
  margin-left: 8px;
`;

const UserReviewText = styled.div`
  padding-top: 1rem;
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #333;
  font-family: "Noto",Helvetica,Arial,sans-serif;
`;

const CalendarIcon = styled(Calendar)`
  width: 14px;
  height: 14px;
`;

const UserReviewDate = styled.div`
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
  font-size: 14px;
  margin-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
`;

const UserReviewSignature = styled.div`
  margin-left: 360px;
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
    const { review, user } = this.props;
    const {
      username, age, gender, country, travelExperience,
    } = user;
    const {
      avgRating, avgRatingWord, reviewDate, reviewText, propertyReply,
    } = review;
    const reviewDateFormatted = reviewDate.split('T')[0];
    return (
      <div className="row-container">
        <UserReviewsContainer>
          <UserProfileSummary>
            <BackgroundCircleUserLogo>
              <StyledUserLogo />
            </BackgroundCircleUserLogo>
            <Username>
              {username}
            </Username>
            <UserDetails>
              <span>
                {country}
                ,
                {' '}
                {gender}
                ,
                {' '}
                {age}
              </span>
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
              <UserReviewRating>
                <UserReviewScore>
                  {avgRating}
                </UserReviewScore>
              </UserReviewRating>
              <div style={{
                display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center',
              }}
              >
                <UserReviewKeyword>
                  {avgRatingWord}
                </UserReviewKeyword>
                <UserReviewDate>
                  <CalendarIcon />
                  <span>
                    {reviewDateFormatted}
                  </span>
                </UserReviewDate>
              </div>
            </UserReviewInfoHeader>

            <UserReviewText>
              {reviewText}
            </UserReviewText>
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
    );
  }
}

export default UserReviewsComponent;
