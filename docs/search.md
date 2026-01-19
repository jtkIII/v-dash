# Typeahead Search
Start typing in the search box and you will begin to get results sorted by category.

```
GlobalSearch.vue
 ├── SearchInput.vue
 └── SearchResults.vue
```

### ✅ SearchInput.vue
- Capture user input
- Visual focus / clear
- Emit text changes

### ✅ SearchResults.vue
- Render grouped results
- Handle empty states
- Emit selection events

### ✅ GlobalSearch.vue
- Own search state (query)
- Provide results data
- Coordinate input ↔ results
- Emit selection to parent

### Data Shape:
```
{
  Users:    [{ id, title, meta }],
  Messages: [{ id, title, meta }],
  Files:    [{ id, title, meta }],
  Links:    [{ id, title, meta }]
}
```

**For example:**
```
apiResponse.groups.forEach(group => {
  results[group.name] = group.items.map(mapToUIShape)
})

SearchInput
  → update:modelValue
    → GlobalSearch.query
      → computed filteredResults
        → SearchResults
          → emit('select')
            → GlobalSearch
              → emit('select')
                → Page
```
