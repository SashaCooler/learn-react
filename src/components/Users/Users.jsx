import React from 'react';
import style from "./Users.module.css";
import User from "./User/User";
import Preloader from "../common/preloader/Preloader";

const Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  let showPages = null;
  if (props.currentPage === 1 || props.currentPage === 2 || props.currentPage === 3) {
    showPages = [1, 2, 3, 4, 5, 6, 7]
  } else if (pages.includes(props.currentPage, pages[pages.length - 4])) {
    showPages = pages.slice(pages[pages.length - 8])
  } else {
    showPages = pages.slice(props.currentPage - 4, props.currentPage + 3)
  }
  return (
      <section id={style.Users}>
        <nav className={style.navWrapper}>
          <div className={props.currentPage !== 1
              ? style.directionNav
              : `${style.directionNav} ${style.directionHide}`}>
            <div className={style.pageNumber}
                 onClick={(e) => props.onPageChanged(1)}>Start
            </div>
            <div className={style.pageNumber}
                 onClick={(e) => props.onPageChanged(props.currentPage - 1)}>Back
            </div>
          </div>
          <div className={`${style.directionNav}`}>
            {showPages.map(page => {
              return <div
                  className={props.currentPage === page ? `${style.selected} ${style.pageNumber}` : `${style.pageNumber}`}
                  key={page}
                  onClick={(e) => props.onPageChanged(page)}>{page}</div>
            })}
          </div>
          <div className={props.currentPage !== pages.length
              ? style.directionNav
              : `${style.directionNav} ${style.directionHide}`}>
            <div className={style.pageNumber}
                 onClick={(e) => props.onPageChanged(props.currentPage + 1)}>Next
            </div>
            <div className={style.pageNumber}
                 onClick={(e) => props.onPageChanged(pages.length)}>End
            </div>
          </div>

        </nav>
        <div className={style.usersWrapper}>
          {props.isFetching ? <Preloader/> : props.users.map((user, i) => {
          return <User key={user.id} user={user} followUser={props.followUser} unfollowUser={props.unfollowUser} followingInProgress={props.followingInProgress}/>
          })}
        </div>


      </section>
  )
};

export default Users;