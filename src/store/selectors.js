export const selectUserPosts = (db, data) => {
  // console.log(data[0]?.following, "ooooooooo");
  const userPosts = data[0] ? data[0].posts : [];
  const followingUserIds = data[0]?.following || [];
  const followingPosts = db.users
    .filter((u) => followingUserIds.includes(u.id))
    .flatMap((u) => u.posts || []);

  // console.log(followingPosts, "uuuuuuuuuu");

  return [...userPosts, ...followingPosts];

  // return [];
};

export const selectUserFollowing = (db, data) => {
  const followingUsersData = db.users
    .filter((u) => data.includes(u.id))
    .flatMap((u) => u.name || []);
  return followingUsersData;
};

export const selectUserFollowingList = (db, data) => {
  const followingUsersList = db.users
    .filter((u) => data.includes(u.id))
    .map((u) => ({ id: u.id, name: u.name }));

  return followingUsersList;
};

export const selectUserNotFollowingList = (db, data) => {
  const notFollowingUsersList = db.users
    .filter((u) => !data.includes(u.id))
    .map((u) => ({ id: u.id, name: u.name }));

  return notFollowingUsersList;
};
