import React, { useState } from 'react'
import LeftArrow from '../Arrows/LeftArrow'
import RightArrow from '../Arrows/RightArrow'
import classes from './Pagination.module.scss'
// import cn from 'classnames'

const Pagination = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
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

  const onPrev = () => {
    setPortionNumber(portionNumber - 1)
  }

  const onNext = () => {
    setPortionNumber(portionNumber + 1)
  }

  return (
    <div className={classes.paginationWrapper}>
      {portionNumber > 1 && (
        <div onClick={onPrev}>
          <LeftArrow />
        </div>
      )}
      {pages
        .filter(
          (page) =>
            page >= leftPortionPageNumber && page <= rightPortionPageNumber
        )
        .map((page, index) => {
          return (
            <span
              key={index}
              className={currentPage === page ? classes.selectedPage : null}
              onClick={(e) => {
                onPageChanged(page)
              }}
            >
              {page}
            </span>
          )
        })}
      {portionCount > portionNumber && (
        <div onClick={onNext}>
          <RightArrow />
        </div>
      )}
    </div>
  )
}

export default Pagination
