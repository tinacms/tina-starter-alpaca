import Link from "next/link"
import { connectAutoComplete, Highlight, connectStateResults } from "react-instantsearch-dom"
import styled from "styled-components"

const Autocomplete = ({ hits, currentRefinement, refine, query }) => (
  <SearchWrapper>
    <SearchIcon width="20" height="20" src="/search.svg" title="search" />
    <Search
      placeholder="Type to search into docs"
      type="search"
      value={currentRefinement}
      onChange={(event) => refine(event.currentTarget.value)}
    />
    <HitsWrapper show={query.length > 0}>
      <Results>
        {hits.map((hit) => (
          <Hit hit={hit} />
        ))}
      </Results>
    </HitsWrapper>
  </SearchWrapper>
)

const Hit = ({ hit }) => {
  return (
    <HitItem>
      <HighlightTitle hit={hit} attribute="title" />
      <div>
        <Highlight hit={hit} attribute="description" />
      </div>
    </HitItem>
  )
}

const Results = connectStateResults(({ searchState, searchResults, children }) =>
  searchResults && searchResults.nbHits !== 0 ? (
    children
  ) : (
    <EmptyResult>No results have been found for {searchState.query}.</EmptyResult>
  )
)

const CustomAutocomplete = connectAutoComplete(Autocomplete)
export default CustomAutocomplete

const SearchWrapper = styled.div`
  position: relative;
`
const SearchIcon = styled.img`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 13px;
  transform: translateY(-50%);
`
const HighlightTitle = styled(Highlight)`
  font-size: 18px;
`
const Search = styled.input`
  position: relative;
  min-width: 400px;
  font-size: 1rem;
  padding: 10px 15px;
  padding-left: 40px;
  font-family: Roboto;
  background-color: #eaeaea;
  display: flex;
  align-items: center;
  border: none;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`
const HitsWrapper = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  background: #fff;
  box-shadow: 2px 4px 8px 0px rgba(60, 60, 60, 0.2);
  display: ${({ show }) => (show ? `block` : `none`)};
`
const HitItem = styled.div`
  display: block;
  padding: 15px;
  box-shadow: 0px 1px 0 0px #dedede;

  & .ais-Highlight-highlighted {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    font-style: normal;
  }
`
const EmptyResult = styled.div`
  padding: 20px 15px;
`
