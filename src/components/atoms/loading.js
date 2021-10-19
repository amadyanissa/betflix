import styled from "styled-components"

const LoadingComponent = styled.h1`
  background: white;
  color: red;
  position: fixed;
  bottom: 0;
  z-index: 100;
  padding: 10px
`

export default function Loading () {
  return (
    // <h1 style={{background: "white", color: "red", position: "fixed", bottom: "0", zIndex: "10000", padding: "10px"}} >Loading.....</h1>
    <LoadingComponent>
      Loading.....
    </LoadingComponent>
  )
}