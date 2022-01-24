import PropTypes from "prop-types";

function SearchForm({ query, onQueryChange, onSearchParamsChange }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearchParamsChange(query);
      }}
    >
      <input
        value={query}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter movie title..."
        onChange={(event) => {
          onQueryChange(event.currentTarget.value);
        }}
      />

      <button type="submit" aria-label="Search" disabled={query === ""}>
        Search
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  onSearchParamsChange: PropTypes.func.isRequired,
};

export default SearchForm;
