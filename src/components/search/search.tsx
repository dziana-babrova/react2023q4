import React, { Component, FormEvent, PropsWithRef, ReactNode } from 'react';
import { SEARCH_TERM } from 'consts/consts';
import './search.scss';

export class SearchBar extends Component {
  private myRef = React.createRef<HTMLInputElement>();
  constructor(props: PropsWithRef<HTMLInputElement>) {
    super(props);
  }

  componentDidMount(): void {
    if (this.myRef.current) {
      this.myRef.current.value = window.localStorage.getItem(SEARCH_TERM) || '';
    }
  }

  handleSearchOnClick(e: FormEvent) {
    e.preventDefault();
    window.localStorage.setItem(SEARCH_TERM, this.myRef.current?.value || '');
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
          ref={this.myRef}
          placeholder="SEARCH"
        />
        <span
          className="search-submit"
          onClick={this.handleSearchOnClick.bind(this)}
        />
      </form>
    );
  }
}
