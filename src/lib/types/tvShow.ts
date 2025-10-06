export interface TvShow {
  Cast: Cast[]
  Genres: Genre[]
  ID: string
  Images: Image
  Synopsis: string
  Title: string
  Year: string
}

export interface Image {
  Background: string
}

export interface Cast {
  Name: string
  ID: string
}

export interface Genre {
  ID: string
  Title: string
}

export interface TvShowMeta {
  evaluation: number
  country: string
  ageClassification: number | string
}

