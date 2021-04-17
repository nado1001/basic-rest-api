const indexModule = (() => {
  // 検索ボタンをクリックした時
  document.getElementById('search-btn').addEventListener('click', () => {
    return searchModule.searchUsers()
  })

  // UsersモジュールのfetchAllUsersメソッドを呼び出す
  return usersModule.fetchAllUsers()
})();