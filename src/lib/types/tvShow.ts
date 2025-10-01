export type TvShow = {
  Cast: Cast[]
  Genres: Genre[]
  ID: string
  Images: Image
  Synopsis: string
  Title: string
  Year: string
}

type Image = {
  Background: string
}

type Cast = {
  Name: string
  ID: string
}

type Genre = {
  ID: string
  Title: string
}

