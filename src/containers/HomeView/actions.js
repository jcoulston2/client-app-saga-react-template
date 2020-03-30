/**
 * @Info: For every action, a saga needs a success action, remember actions need to return a type and data
 */

export const actionTypes = {
  FIRST_ACTION: 'FIRST_ACTION',
  FIRST_ACTION_SUCCESS: 'FIRST_ACTION_SUCCESS',
};

export const actions = {
  firstAction: function(clickedText) {
    return {
      type: actionTypes.FIRST_ACTION,
      clickedText,
    };
  },

  firstActionSuccess: function(clickedText) {
    return {
      type: actionTypes.FIRST_ACTION_SUCCESS,
      clickedText,
    };
  },
};
