import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(){
    super()

    this.state = {
      search_terms: "",
      positive_attitude: false,
      negative_attitude: false
    }
  }

  onChange = (ev) => {
    this.setState({
      search_terms: ev.target.value
    })
  }

  attitudeAdjustment = (ev) => {
    // debugger;
    if(ev.target.value==="positive_attitude"){
      console.log("positive")
    this.setState({postive_attitude: true, negative_attitude: false})}
    else if (ev.target.value==="negative_attitude"){
      console.log("inside the netgatdskjfhgksjd")
      this.setState({negative_attitude: true, positive_attitude: false})}
    // console.log("how often is this firing")
    }

  render() {
    return (
      <div>
        <form onSubmit={(ev) => this.props.searchSubmit(ev, this.state)}>
          <input type="text" placeholder="search terms" name="search_terms" onChange={(ev) => this.onChange(ev)} value={this.state.search_terms}/>
            <div className="radio">
              Search Options:
             <label>
               <input type="radio" name="attitude" value="none" defaultChecked={true} />
               None
             </label>
            </div>
            <div className="radio">
             <label>
               <input type="radio" name="attitude" value="positive_attitude" onChange={(ev)=>this.attitudeAdjustment(ev)}/>
               Tweets with a positive attitude
             </label>
            </div>
            <div className="radio">
             <label>
               <input type="radio" name="attitude" value="negative_attitude" onChange={(ev)=>this.attitudeAdjustment(ev)}/>
               Tweets with a negative attitude
             </label>
           </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SearchForm;
