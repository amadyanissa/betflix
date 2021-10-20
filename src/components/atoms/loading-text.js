import styled from "styled-components"

const LoadingComponent = styled.h4`
  display: flex;
  justify-content: center;
  width: 100%;
`

export default function LoadingText () {
  return (
    // <h1 style={{background: "white", color: "red", position: "fixed", bottom: "0", zIndex: "10000", padding: "10px"}} >Loading.....</h1>
    <LoadingComponent>
      Loading.....
    </LoadingComponent>
  )
}