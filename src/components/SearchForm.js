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

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="search terms" name="search_terms" onChange={(ev) => this.onChange(ev)} value={this.state.search_terms}/>
            <div className="radio">
             <label>
               <input type="radio" name="attitude" value="none" defaultChecked={true} />
               None
             </label>
            </div>
            <div className="radio">
             <label>
               <input type="radio" name="attitude" value="positive_attitude" />
               Tweets with a positive attitude
             </label>
            </div>
            <div className="radio">
             <label>
               <input type="radio" name="attitude" value="negative_attitude" />
               Tweets with a negative_attitude
             </label>
           </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SearchForm;