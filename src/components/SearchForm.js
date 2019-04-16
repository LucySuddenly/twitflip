import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(){
    super()

    this.state = {
      search_terms: "",
      positive_attitude: false,
      negative_attitude: false,
      tweet_results: 5
    }
  }

  onChange = (ev) => {
    this.setState({
      search_terms: ev.target.value
    })
  }

  attitudeAdjustment = (ev) => {
    if(ev.target.value==="positive_attitude"){
    this.setState({postive_attitude: true, negative_attitude: false})}
    else if (ev.target.value==="negative_attitude"){
      this.setState({negative_attitude: true, positive_attitude: false})}
    }

    onSelect = (ev) => {
      this.setState({tweet_results: ev.target.value})
    }

  render() {
    return (
      <>
        <form onSubmit={(ev) => this.props.searchSubmit(ev, this.state)} className='pad'>
          <input type="text" placeholder="search terms" name="search_terms" onChange={(ev) => this.onChange(ev)} value={this.state.search_terms}/>
            <div className="radio pad">
          <label>Number of Results</label>
          <select onChange={(ev) => this.onSelect(ev)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
            <div className="radio">
              Search Options:
             <label>
               <input type="radio" name="attitude" value="none" defaultChecked={true}/>
               None
             </label>
            </div>
            <div className="radio pad">
             <label>
               <input type="radio" name="attitude" value="positive_attitude" onChange={(ev)=>this.attitudeAdjustment(ev)}/>
               Tweets with a positive attitude
             </label>
            </div>
            <div className="radio pad">
             <label>
               <input type="radio" name="attitude" value="negative_attitude" onChange={(ev)=>this.attitudeAdjustment(ev)}/>
               Tweets with a negative attitude
             </label>
           </div>
           </div>
          <input type="submit" />
        </form>
      </>
    );
  }
}

export default SearchForm; 
