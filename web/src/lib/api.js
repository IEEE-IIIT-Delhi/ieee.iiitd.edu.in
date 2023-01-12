export const events = `{
  allEvent(limit: 3, sort: {eventDate: DESC}) {
    _id
    isOpen
    showDate
    eventName
    eventDate
    eventPoster{
      asset{
        url
      }
      alt
      caption
    }
    desc
    formLink
  }
}`;

export const allEvents = `{
  allEvent(sort: {eventDate: DESC}) {
    _id
    isOpen
    showDate
    eventName
    eventDate
    eventPoster{
      asset{
        url
      }
      alt
      caption
    }
    desc
    formLink
  }
}`;

export const allPosts = `{
  allBlog{
    _id,
    title
    desc
   slug{
     current
   }
   BlogedDate
   author{
     fName
     lName
     position
     photo{
       asset{
         url
       }
       alt
     }
   }
    previewImg{
     asset{
       url
    }
    alt
    caption
   }
   coverImg{
     asset{
       url
    }
    alt
    caption
   }
   category{
     categoryName
   }
   contentRaw
   tags{
    tagName
  }
 }
}`;

export const allCategories = `{
  allCategory(sort:{categoryName:ASC}){
    _id
    slug{
      current
    }
    categoryName
  }
}`;
