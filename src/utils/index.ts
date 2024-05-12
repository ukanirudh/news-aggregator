import { NewsDataSource } from 'src/contants';

/* Utility to map different keys from different sources to single key */

export const API_RESULTS_DATA = {
  [NewsDataSource.NEWS_API]: 'articles',
  [NewsDataSource.GUARDIAN]: 'results',
  [NewsDataSource.NY_TIMES]: 'docs'
}

export enum StructuredKeys {
  ID = 'id',
  SOURCE = 'source',
  URL = 'url',
  HEADLINE = 'headline',
  PUBLISHED_DATE = 'publishedDate',
  SECTION_NAME = 'sectionName',
  TITLE_IMG_URL = 'titleImgUrl'
}

type keyDataType = string | { key: string, value: any};

export const GuardianKeys: { [key in StructuredKeys]: keyDataType }  = {
  [StructuredKeys.ID]: 'id',
  [StructuredKeys.SOURCE]: { key: 'fields', value: 'publication' },
  [StructuredKeys.URL]: 'webUrl',
  [StructuredKeys.HEADLINE]: 'webTitle',
  [StructuredKeys.PUBLISHED_DATE]: 'webPublicationDate',
  [StructuredKeys.SECTION_NAME]: 'sectionName',
  [StructuredKeys.TITLE_IMG_URL]: { key: 'fields', value: 'thumbnail' },
}

export const NeyworkTimesKeys: { [key in StructuredKeys]: keyDataType }  = {
  [StructuredKeys.ID]: '_id',
  [StructuredKeys.SOURCE]: 'source',
  [StructuredKeys.URL]: 'web_url',
  [StructuredKeys.HEADLINE]: 'abstract',
  [StructuredKeys.PUBLISHED_DATE]: 'pub_date',
  [StructuredKeys.SECTION_NAME]: 'section_name',
  [StructuredKeys.TITLE_IMG_URL]:'section_name',
}

export const NewsApiKeys: { [key in StructuredKeys]: keyDataType }  = {
  [StructuredKeys.ID]: 'url',
  [StructuredKeys.SOURCE]:  { key: 'source', value: 'name' },
  [StructuredKeys.URL]: 'url',
  [StructuredKeys.HEADLINE]: 'title',
  [StructuredKeys.PUBLISHED_DATE]: 'publishedAt',
  [StructuredKeys.SECTION_NAME]: 'section_name', // no sectionname, find alternative
  [StructuredKeys.TITLE_IMG_URL]: 'urlToImage',
}

export const keyMapper: { [key in NewsDataSource]:  { [key in StructuredKeys]: keyDataType } } = {
  [NewsDataSource.NY_TIMES]: NeyworkTimesKeys,
  [NewsDataSource.GUARDIAN]: GuardianKeys,
  [NewsDataSource.NEWS_API]: NewsApiKeys
}
