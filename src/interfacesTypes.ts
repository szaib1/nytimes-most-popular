interface mediaMetadataType {
  "url": string
  "format": string,
  "height": number,
  "width": number,
}

interface mediaType {
  type: string,
  subtype: string,
  caption: string,
  copyright: string,
  approved_for_syndication: number,
  mediaMetadata: mediaMetadataType[]
}

export interface ArticleProps {
  uri: string,
  url: string,
  id: number,
  asset_id: number,
  source: string,
  published_date: string,
  updated: string,
  section: string,
  subsection: string,
  nytdsection: string,
  adx_keywords: string,
  column: null,
  byline: string,
  type: string,
  title: string,
  abstract: string,
  des_facet: string[],
  org_facet: string[]
  per_facet: string[]
  geo_facet: string[]
  media: mediaType[],
  eta_id: number,
}

export interface ArticleData {
  data: ArticleProps
}