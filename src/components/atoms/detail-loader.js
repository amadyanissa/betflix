import ContentLoader from 'react-content-loader'

export default function DetailLoader() {
  return(
    <ContentLoader 
      speed={5}
      viewBox="0 0 400 150"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
       <rect x="51" y="99" rx="0" ry="0" width="0" height="1" /> 
      <rect x="37" y="99" rx="0" ry="0" width="0" height="1" /> 
      <rect x="5" y="-1" rx="0" ry="0" width="117" height="188" /> 
      <rect x="153" y="2" rx="0" ry="0" width="182" height="18" /> 
      <rect x="153" y="31" rx="0" ry="0" width="179" height="19" /> 
      <rect x="153" y="60" rx="0" ry="0" width="180" height="46" /> 
      <rect x="153" y="83" rx="0" ry="0" width="12" height="3" /> 
      <rect x="153" y="115" rx="0" ry="0" width="185" height="51" />
    </ContentLoader>
  )
}