export default {
    title: "Event Report",
    name: "eventReport",
    type: "document",
    fields: [
        {
            title: "Event Name",
            name: "eventName",
            type: "string",
            description: `Just for identification purposes on backend`,
        },
        {
            title: "Event Poster",
            name: "eventPoster",
            type: "img",
        },
        {
            title: "More Photos",
            name: "morePhotos",
            type: "url",
        },
        {
            title: "Event Date",
            name: "eventDate",
            type: "date",
            options: {
                dateFormat: "DD MMMM YYYY",
                calendarTodayLabel: "Today",
            },
        },
        {
            title: "Total Prizes",
            name: "prizes",
            type: "number",
        },
        {
            title: "Description",
            name: "desc",
            type: "text",
            description: `Watch the length - 150-160 characters`,
        },
        {
            title: "Winners",
            name: "winners",
            type: "array",
            of: [
                {
                    type: "winner",
                },
            ],
        },
    ],
};
