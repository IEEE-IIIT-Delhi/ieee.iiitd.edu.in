export default {
    title: "Event",
    name: "event",
    type: "document",
    fields: [
        {
            title: "Open for Registration",
            name: "isOpen",
            type: "boolean",
            description: `Will turn on or off register button`,
        },
        {
            title: "Event Name",
            name: "eventName",
            type: "string",
            description: `Just for identification purposes on backend`,
        },
        {
            title: "Show Date or not",
            name: "showDate",
            type: "boolean",
            description: `Either will show date or To Be Announced..`,
        },
        {
            title: "Event Date",
            name: "eventDate",
            type: "date",
            description: `Don't put in any date to get "To Be Announced.."`,
            options: {
                dateFormat: "DD MMMM YYYY",
                calendarTodayLabel: "Today",
            },
        },
        {
            title: "Event Poster",
            name: "eventPoster",
            type: "img",
        },
        {
            title: "Description",
            name: "desc",
            type: "text",
            description: `Watch the length - 150-160 characters`,
        },
        {
            title: "Form Link",
            name: "formLink",
            type: "url",
        },
    ],
};
