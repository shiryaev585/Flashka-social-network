import React, { useState } from 'react'
import classes from './Pagination.module.scss'
// import cn from 'classnames'

const Pagination = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 20,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className={classes.paginationWrapper}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1)
          }}
        >
          PREV
        </button>
      )}
      {pages
        .filter(
          (page) =>
            page >= leftPortionPageNumber && page <= rightPortionPageNumber
        )
        .map((page) => {
          return (
            <span
              className={currentPage === page && classes.selectedPage}
              onClick={(e) => {
                onPageChanged(page)
              }}
            >
              {page}{' '}
            </span>
          )
        })}
        { portionCount > portionNumber && 
        <button onClick={() => {
          setPortionNumber(portionNumber + 1)
        }} >NEXT</button> }
    </div>
  )
}

export default Pagination
