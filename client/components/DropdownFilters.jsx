import React from 'react';

const DropdownFilter = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
`;

const ShowFilter = styled.div`
  flex-direction: column;
  width: 300px;
`;

const SortByFilter = styled.div`
  flex-direction: column;
  width: 300px;
  margin-left: 53px;
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

class DropdownFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  changeSelectedDropdown = (e) => {
    const { filterReviews } = this.props;
    filterReviews(e.target.value);
  };

  render() {
    return (
      <div className="row-container">
        <DropdownFilter>
          <ShowFilter>
            <FormLabel>SHOW:</FormLabel>
            <DropdownSelect onChange={e => this.changeSelectedDropdown(e)}>
              <option defaultValue="selected"> English Reviews</option>
              <option> All Reviews</option>
            </DropdownSelect>
          </ShowFilter>
          <SortByFilter>
            <FormLabel>SORT BY:</FormLabel>
            <DropdownSelect onChange={this.changeSelectedDropdown}>
              {/* <option> Top Rated</option>
              <option> Lowest Rated</option> */}
              <option defaultValue="selected"> Newest</option>
              <option value="Oldest"> Oldest</option>
              {/* <option> Age Group</option> */}
            </DropdownSelect>
          </SortByFilter>
        </DropdownFilter>
      </div>
    );
  }
}

export default DropdownFilters;
