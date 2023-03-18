export enum ArticleTypes {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  TECHNIC = 'TECHNIC',
}

export enum ArticleBlockTypes {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  CODE = 'CODE',
}

interface ArticleBlockBase {
  id: string,
  type: ArticleBlockTypes,
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockTypes.CODE
  code: string,
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockTypes.IMAGE
  src: string,
  title: string,
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockTypes.TEXT
  paragraphs: string[],
  title?: string,
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export interface Article {
  id: string,
  title: string,
  subtitle: string,
  img: string,
  views: number,
  createdAt: string,
  type: ArticleTypes[],
  blocks: ArticleBlock[]
}
