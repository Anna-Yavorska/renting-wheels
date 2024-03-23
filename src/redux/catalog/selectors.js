import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.catalog;
// export const selectIsLoading = state => state.contacts.isLoading;
// export const selectError = state => state.contacts.error;
export const selectFilters = state => state.filter;

export const selectfilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (catalog, filter) => {
    return catalog.filter(catalog =>
      catalog.location.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
