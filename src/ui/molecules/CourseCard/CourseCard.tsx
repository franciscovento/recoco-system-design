import * as React from 'react';

import * as Styled from './CourseCard.styled';
import type { CourseCardProps } from './CourseCard.types';

export const CourseCard: React.FC<CourseCardProps> = (
  props: CourseCardProps
) => {
  return <Styled.CourseCard />;
};
