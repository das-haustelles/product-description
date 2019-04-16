import React from 'react';

const DropdownFilter = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  float: left;
  width: 50%;
  padding-left: .9375rem;
  padding-right: .9375rem;
  margin-top: auto;
`;

const ShowFilter = styled.div`
  display: flex;
  flex-direction: column;
`;

const SortByFilter = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  color: #666;
  margin-bottom: .5rem;
  display: block;
  text-transform: uppercase;
  font-size: .65rem;
  font-weight: 700;
`;

const DropdownSelect = styled.select`
  background-color: #fff;
  padding: .5rem;
  color: #666;
  font-size: .8rem;
  border-radius: 3px!important;
  width: 100%;
  margin: 0 0 1rem;
  border: 1px solid #ccc;
  background-position: 100%;
  background-repeat: no-repeat;
  font-family: Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  height: 2.3125rem;
  &:hover {
    border-color: #999;
  }
`;

function DropdownFilters() {
  return (
    <div className="row-container">
      <div className="small-12 columns">
        <div className="intro">
          <DropdownFilter>
            <ShowFilter>
              <FormLabel>SHOW:</FormLabel>
              <DropdownSelect>
                <option defaultValue="selected"> English Reviews</option>
                <option> All Reviews</option>
              </DropdownSelect>
            </ShowFilter>
            <SortByFilter>
              <FormLabel>SORT BY:</FormLabel>
              <DropdownSelect>
                <option> Top Rated</option>
                <option> Lowest Rated</option>
                <option defaultValue="selected"> Newest</option>
                <option> Oldest</option>
                <option> Age Group</option>
              </DropdownSelect>
            </SortByFilter>
          </DropdownFilter>
        </div>
      </div>
    </div>
  );
}

export default DropdownFilters;
