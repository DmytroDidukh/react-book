export const sort = (sortBy) => ({
    type: 'SORT_BY',
    payload: sortBy,
});

export const searchQuery = (query) => ({
    type: 'SET_QUERY',
    payload: query,
});
