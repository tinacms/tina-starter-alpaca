import React, { useState } from "react"
import { func, bool } from "prop-types"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch } from "react-instantsearch-dom"

import CustomAutoComplete from "./CustomAutocomplete"

const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID || "",
  process.env.ALGOLIA_API_KEY || ""
)

const Search = ({ handleToggleSearchInput, showMobileSearch, searchIndex, searchText }) => {
  const [query, setQuery] = useState(``)

  return (
    <InstantSearch
      onSearchStateChange={({ query }) => setQuery(query)}
      searchClient={searchClient}
      indexName={searchIndex}
    >
      <CustomAutoComplete
        handleToggleSearchInput={handleToggleSearchInput}
        showMobileSearch={showMobileSearch}
        query={query}
        searchText={searchText}
      />
    </InstantSearch>
  )
}

Search.propTypes = {
  handleToggleSearchInput: func,
  showMobileSearch: bool,
}

export default Search
