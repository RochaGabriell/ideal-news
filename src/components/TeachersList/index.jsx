import React from 'react'

import {
  Container,
  TeacherCard,
  TeacherImage,
  TeacherInfo,
  SubjectName,
  TeacherName
} from './styles'

const TeachersList = ({ teachers }) => {
  return (
    <Container>
      {teachers.map((teacher, index) => (
        <TeacherCard key={index}>
          <TeacherImage src={teacher.image} alt={teacher.subject} />
          <TeacherInfo>
            <SubjectName>{teacher.subject}</SubjectName>
            <TeacherName>{teacher.name}</TeacherName>
          </TeacherInfo>
        </TeacherCard>
      ))}
    </Container>
  )
}

export default TeachersList
