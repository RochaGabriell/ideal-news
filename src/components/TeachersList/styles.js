import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const TeacherCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
`

const TeacherImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`

const TeacherInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
  width: 14rem;
  text-align: left;
`

const SubjectName = styled.h3`
  font-size: 16px;
  margin: 0;
`

const TeacherName = styled.p`
  font-size: 14px;
  margin: 0;
`

export {
  Container,
  TeacherCard,
  TeacherImage,
  TeacherInfo,
  SubjectName,
  TeacherName
}
