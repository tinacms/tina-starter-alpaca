---
date: '2020-06-05T00:00:00Z'
author: Author
title: Placeholder title
description: Placeholder description
---
> Id incididunt id non excepteur in.

## Subtitle 1

Nisi consectetur exercitation cupidatat reprehenderit. In nostrud nisi labore anim non voluptate velit magna. Labore sunt labore cupidatat est veniam aute nostrud incididunt commodo. Reprehenderit id non anim reprehenderit exercitation laboris magna magna incididunt ea. Dolore magna aute pariatur nulla fugiat ipsum consequat anim. Excepteur commodo consectetur do officia quis occaecat nulla ad.

### Code

```ts
files.map(async (file) => {
      if (preview) {
        const previewProps = await getGithubPreviewProps({
          ...previewData,
          fileRelativePath: file,
          parse: parseMarkdown,
        })
        return {
          fileName: file.substring(contentDir.length + 1, file.length - 3),
          fileRelativePath: file,
          data: previewProps.props.file?.data,
        }
      }
```

## Subtitle 2
Officia cupidatat duis dolore aliquip mollit laboris nostrud pariatur in ut ipsum officia occaecat ad. Labore reprehenderit dolore adipisicing Lorem adipisicing nostrud dolor Lorem dolor reprehenderit eiusmod. Deserunt aliquip elit ea laboris deserunt ipsum. Veniam est cillum cupidatat officia dolore id velit nisi fugiat. Tempor sint in magna laborum officia dolore laborum non commodo cillum. Non ex magna proident laboris id voluptate dolor nostrud proident esse commodo elit ipsum aliqua.

## Subtitle 3

Officia cupidatat duis dolore aliquip mollit laboris nostrud pariatur in ut ipsum officia occaecat ad. Labore reprehenderit dolore adipisicing Lorem adipisicing nostrud dolor Lorem dolor reprehenderit eiusmod. Deserunt aliquip elit ea laboris deserunt ipsum. Veniam est cillum cupidatat officia dolore id velit nisi fugiat. Tempor sint in magna laborum officia dolore laborum non commodo cillum. Non ex magna proident laboris id voluptate dolor nostrud proident esse commodo elit ipsum aliqua.