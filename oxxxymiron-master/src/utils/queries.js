export const tourItemCollectionQuery = `
  {
    tourItemCollection {
      items {
        date
        place 
        city 
        soldOut
        country
        ticketLink
        videoLink
        sys {
          id
        }
      }
    }
  }
`;

export const tracksItemCollectionQuery = `
  {
    tracksItemCollection {
      items {
        sys {
          id
        }
        title
        cover {
          url
        }
        date
        description
        link
      }
    }
  }
`;

export const newsItemCollectionQuery = `
  {
    newsItemCollection {
      items {
        sys {
          id
        }
        title
        date
        cover {
          url
        }
      }
    }
  }
`;

export const newsItemQuery = (id) => `
{
  newsItem(id: "${id}") {
    sys {
      id
    }
    title
    date
    cover {
      url
    }
    description {
      json
    }
  }
}
`;