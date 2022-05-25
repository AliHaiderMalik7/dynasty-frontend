import { createSelector } from "reselect";
export const userState = (state) => state.user;
export const pageNoState = (state) => state.pageNo;
export const searchState = (state) => state.searchData;

export const userSelector = createSelector(
  [userState, pageNoState, searchState],
  (user, page, search) => {
    if (search.length > 0) {
      const data = user.filter((item) => {
        if (
          item.name.first.toUpperCase().includes(search.toUpperCase()) ||
          item.name.last.toUpperCase().includes(search.toUpperCase())
        ) {
          return item;
        }
      });
      return data;
    } else {
      return user.slice(0, -50);
    }
  }
);

export const fetchMoreUsersSelector = createSelector([userState], (state) => {
  if (state.length < 1000) {
    return true;
  } else {
    return false;
  }
});
