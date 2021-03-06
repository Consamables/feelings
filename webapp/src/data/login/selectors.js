export const getLoginField = (state, field) => state.getIn(['login', 'fields', field], '');

export const getCurrentUser = state => state.getIn(['login', 'currentUser']);

export const getCurrentUserName = state => getCurrentUser(state).get('name', '');

export const getCurrentUserId = state => getCurrentUser(state).get('id', 0);
