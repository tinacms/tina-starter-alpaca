import React, { useState } from "react"
import { func, bool } from "prop-types"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch } from "react-instantsearch-dom"

import CustomAutoComplete from "./CustomAutocomplete"

// const searchClient = algoliasearch("ND3Q3FDRQR", "d8db7a735ab11d85cc4110edcd85b14c")
const searchClient = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY)

console.log({ APP_ID: process.env.ALGOLIA_APP_ID })
console.log({ APIKEY: process.env.ALGOLIA_API_KEY })

const Search = ({ handleToggleSearchInput, showMobileSearch }) => {
  const [query, setQuery] = useState(``)

  return (
    <InstantSearch
      onSearchStateChange={({ query }) => setQuery(query)}
      searchClient={searchClient}
      // indexName="docs_index"
      indexName="tina-starter-alpaca-Docs"
    >
      <CustomAutoComplete
        handleToggleSearchInput={handleToggleSearchInput}
        showMobileSearch={showMobileSearch}
        query={query}
      />
    </InstantSearch>
  )
}

Search.propTypes = {
  handleToggleSearchInput: func,
  showMobileSearch: bool,
}

export default Search
