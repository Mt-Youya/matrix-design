import React, { useState, Fragment } from "react"
import { Random, EuiHealth, EuiSearchBar } from "@elastic/eui"

const random = new Random()

const tags = [
  { name: "marketing", color: "danger" },
  { name: "finance", color: "success" },
  { name: "eng", color: "success" },
  { name: "sales", color: "warning" },
  { name: "ga", color: "success" }
]

const loadTags = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        tags.map((tag) => ({
          value: tag.name,
          view: <EuiHealth color={tag.color}>{tag.name}</EuiHealth>
        }))
      )
    }, 2000)
  })
}

const initialQuery = EuiSearchBar.Query.MATCH_ALL

const SearchBar = () => {
  const [query, setQuery] = useState(initialQuery)
  const [error, setError] = useState(null)
  const [incremental, setIncremental] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const onChange = ({ query, error }: { query: any; error: any }) => {
    if (error) {
      setError(error)
    } else {
      setError(null)
      setQuery(query)
    }
  }

  const renderSearch = () => {
    return (
      <EuiSearchBar
        defaultQuery={initialQuery}
        box={{
          placeholder: "type:visualization -is:active joe",
          incremental
        }}
        onChange={onChange}
        hint={
          showHint
            ? {
                content: (
                  <span>
                    Type search terms, e.g. <strong>visualization</strong> or{" "}
                    <strong>-dashboard</strong>
                  </span>
                ),
                popoverProps: { panelStyle: { backgroundColor: "#f7f8fc" } }
              }
            : undefined
        }
      />
    )
  }

  return <Fragment>{renderSearch()}</Fragment>
}
export default SearchBar
