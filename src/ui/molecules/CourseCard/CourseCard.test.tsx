import { render } from '@testing-library/react'
import { beforeEach, describe, it } from 'vitest'

import { CourseCard } from './CourseCard'
import { type CourseCardProps } from './CourseCard.types'

describe(CourseCard, () => {
  let defaultProps: CourseCardProps

  beforeEach(() => {
    defaultProps = {
    }
  })
  it('CourseCard should render', () => {
    render(<CourseCard {...defaultProps} />)
  })
})