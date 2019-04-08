import React from 'react';
import styled from 'styled-components';
import { KeyboardArrowLeft, KeyboardArrowRight } from 'styled-icons/material';

const PaginationCenter = styled.div`
  justify-content: center;
  display: flex;
  font-size: 1rem;
  line-height: 1;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const PaginationFirst = styled.div`
  border-radius: .188rem;
  transition: all .2s ease-in-out;
  padding: 0 .25rem;
  height: 2.375rem;
  line-height: 2.375rem;
  cursor: pointer;
  box-sizing: border-box;
  min-width: 2.35rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #e6e6e6;
    color: #ff7547;
  }
`;

const PaginationLast = styled.div`
  border-radius: .188rem;
  transition: all .2s ease-in-out;
  padding: 0 .25rem;
  height: 2.375rem;
  line-height: 2.375rem;
  cursor: pointer;
  box-sizing: border-box;
  min-width: 2.35rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #e6e6e6;
    color: #ff7547;
  }
`;

const PaginationPrevious = styled.div`
  &:hover {
    background-color: #e6e6e6;
    color: #ff7547;
  }
`;

const PaginationNext = styled.div`
  &:hover {
    background-color: #e6e6e6;
    color: #ff7547;
  }
`;

const PreviousArrow = styled(KeyboardArrowLeft)`
  width: 30px;
  height: 30px;
  opacity: .6;
  &:hover {
    background-color: #e6e6e6;
    color: #ff7547;
  }
`;

const NextArrow = styled(KeyboardArrowRight)`
  width: 30px;
  height: 30px;
  opacity: .6;
  &:hover {
    background-color: #e6e6e6;
    color: #ff7547;
  }
`;

const PaginationItem = styled.div`
  margin-left: .25rem;
  border-radius: .188rem;
  transition: all .2s ease-in-out;
  padding: 0 .25rem;
  height: 2.375rem;
  line-height: 2.375rem;
  cursor: pointer;
  box-sizing: border-box;
  min-width: 2.35rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Noto",Helvetica,Arial,sans-serif;
  font-weight: 400;
  font-style: normal;
  &:hover {
    background-color: #e6e6e6;
    color: #ff7547;
  }
`;

const PaginationCurrent = styled.div`
  margin-left: .25rem;
  border-radius: .188rem;
  transition: all .2s ease-in-out;
  padding: 0 .25rem;
  height: 2.375rem;
  line-height: 2.375rem;
  cursor: pointer;
  box-sizing: border-box;
  min-width: 2.35rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Noto",Helvetica,Arial,sans-serif;
  font-weight: 600;
  font-style: normal;
  color: #ff7547;
  border: 1px solid #ff7547;

`;

function PaginationComponent(props) {
  const { currentPage } = props;
  let pagesArray;
  if (currentPage <= 3) {
    pagesArray = [1, 2, 3, 4, 5];
  } else {
    pagesArray = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
  }
  return (
    <div className="row-container">
      <div className="small-12 columns">
        <div className="intro">
          <p>
            current page is
            {currentPage}
            !!!
          </p>
          <PaginationCenter>
            <PaginationFirst>First</PaginationFirst>

            <PaginationPrevious>
              <PreviousArrow />
            </PaginationPrevious>
            {/* [1, 2, 3, 4, 5] */}
            {
              pagesArray.map((pageNumber, idx) => {
                if (currentPage === idx + 1) {
                  return (
                    <PaginationCurrent key={`page-num-${pageNumber}`} id={`page-num-${pageNumber}`}>
                      {pageNumber}
                    </PaginationCurrent>
                  );
                }
                return (
                  <PaginationItem key={`page-num-${pageNumber}`} id={`page-num-${pageNumber}`}>
                    {pageNumber}
                  </PaginationItem>
                );
              })
            }
            {/* <PaginationItem id="some-id">1</PaginationItem>
            <PaginationItem>2</PaginationItem>
            <PaginationItem>3</PaginationItem>
            <PaginationItem>4</PaginationItem>
            <PaginationItem>5</PaginationItem> */}

            <PaginationNext>
              <NextArrow />
            </PaginationNext>

            <PaginationLast>Last</PaginationLast>
          </PaginationCenter>
        </div>
      </div>
    </div>
  );
}

export default PaginationComponent;
