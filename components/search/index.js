import React, { useState } from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch } from "react-instantsearch-dom"
import CustomAutoComplete from "./CustomAutocomplete"

const searchClient = algoliasearch("ND3Q3FDRQR", "d8db7a735ab11d85cc4110edcd85b14c")

const Search = () => {
  const [query, setQuery] = useState(``)

  return (
    <InstantSearch
      onSearchStateChange={({ query }) => setQuery(query)}
      searchClient={searchClient}
      indexName="docs_index"
    >
      <CustomAutoComplete query={query} />
    </InstantSearch>
  )
}

export default Search
