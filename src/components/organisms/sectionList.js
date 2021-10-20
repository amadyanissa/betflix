import SectionTitle from "../atoms/sectionTitle"
import MovieSnippet from "../molecules/movie-snippet"
import NotAvailable from "../atoms/not-available"
export default function SectionList({sectionTitle, list, link }) {
  return(
    <>
      <SectionTitle title={sectionTitle} link={link}/>
      <div className="row">

        {
          list?.length > 0 
          ? list?.map((item) => {
              return (
                  <div className="col col-3">
                    <MovieSnippet key={item?.imdbID} imdbId={item?.imdbID}  poster={item?.Poster} year={item?.Year} key={item?.imdbID} name={item?.Title} />
                  </div>

                )
            })
          : <NotAvailable />
        }

      </div>
    </>

  )
}
