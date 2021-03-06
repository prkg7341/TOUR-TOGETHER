export const boardStore = {
  namespaced: true,
  state: {
    boards: [],
    searchByCategoryBoards: [],
    withWhom: "",
    season: "",
    area: "",
    theme: "",
    boardsIng: [],
    boardsDone: [],
    boardsLike: null,
    boardsLikeId: [],
    boardToDelete: { boardName: 0 },
    tourList: [],
    planFlag: true,
  },
  getters: {
    getAllBoards(state) {
      return state.boards;
    },
    getSearchByCategoryBoards(state) {
      return state.searchByCategoryBoards;
    },
    getBoardsIng(state) {
      return state.boardsIng;
    },
    getBoardsDone(state) {
      return state.boardsDone;
    },
    getBoardsLike(state) {
      return state.boardsLike;
    },
    getBoardsLikeId(state) {
      return state.boardsLikeId;
    },
    getBoardToDelete(state) {
      return state.boardToDelete;
    },
    getTourListFromStore(state) {
      return state.tourList;
    },
    getPlanFlag(state) {
      return state.planFlag;
    },
  },
  mutations: {
    setAllBoards(state, boards) {
      state.boards = boards;
    },
    setSearchByCategoryBoards(state, boards) {
      state.searchByCategoryBoards = boards;
    },
    setCategory(state, category) {
      state.withWhom = category[0];
      state.season = category[1];
      state.area = category[2];
      state.theme = category[3];
    },
    setBoardsIng(state, boardsIng) {
      state.boardsIng = boardsIng;
    },
    setBoardsDone(state, boardsDone) {
      state.boardsDone = boardsDone;
    },
    setBoardsLike(state, boardsLike) {
      state.boardsLike = boardsLike;
    },
    setBoardsLikeId(state, boardsLike) {
      const boardIds = [];
      if (state.boardsLike) {
        state.boardsLikeId = boardsLike.forEach((board) => {
          boardIds.push(board.boardId);
        });
        state.boardsLikeId = boardIds;
      }
    },
    deleteBoardIng(state, boardId) {
      state.boardsIng = state.boardsIng.filter((board) => {
        if (board) {
          return board.boardId !== boardId;
        }
      });
    },
    deleteBoardDone(state, boardId) {
      state.boardsDone = state.boardsDone.filter((board) => {
        if (board) {
          return board.boardId !== boardId;
        }
      });
    },
    addBoardLike(state, board) {
      // if ?????????
      state.boardsLikeId.push(board.boardId);
    },
    cancelBoardLike(state, board) {
      state.boardsLikeId = state.boardsLikeId.filter((boardLikeId) => {
        return boardLikeId !== board.boardId;
      });
    },
    setBoardToDelete(state, board) {
      state.boardToDelete = board;
    },
    setTourList(state, tourList) {
      state.tourList = tourList;
    },
    setPlanFlag(state, flag) {
      state.planFlag = flag;
    },
  },
  actions: {},
  // modules: {},
};
