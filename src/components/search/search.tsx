import React, { Component, FormEvent, ReactNode } from 'react';
import { SEARCH_TERM } from 'consts/consts';
import './search.scss';

type SearchBarProps = {
  searchValue: string;
};

export class SearchBar extends Component<SearchBarProps> {
  private searchRef = React.createRef<HTMLInputElement>();
  constructor(props: SearchBarProps) {
    super(props);
  }

  handleSearchOnClick(e: FormEvent) {
    e.preventDefault();
    window.localStorage.setItem(
      SEARCH_TERM,
      this.searchRef.current?.value || ''
    );
  }

  render(): ReactNode {
    return (
      <form
        className="search-form"
        onSubmit={this.handleSearchOnClick.bind(this)}
        action=""
      >
        <input
          className="search-field"
          type="search"
          ref={this.searchRef}
          placeholder="SEARCH"
          defaultValue={this.props.searchValue}
        />
        <span
          className="search-submit"
          onClick={this.handleSearchOnClick.bind(this)}
        />
      </form>
    );
  }
}
