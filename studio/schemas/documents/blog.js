export default {
    title: "Blog",
    name: "blog",
    type: "document",
    fields: [
        {
            title: "Blog Title",
            name: "title",
            type: "string",
        },
        {
            title: "Description",
            name: "desc",
            type: "text",
            description: `Watch the length - Not more than 400 characters`,
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                //Change to schema title to automatically populate
                source: "title",
                slugify: (input) =>
                    input
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
                        .slice(0, 200),
                validation: (Rule) => Rule.required(),
            },
        },
        {
            title: "Bloged Date",
            name: "BlogedDate",
            type: "datetime",
            options: {
                dateFormat: "dddd MMMM YYYY",
                timeFormat: "h:mm a",
                timeStep: 15,
                calendarTodayLabel: "Today",
            },
        },
        {
            title: "Author",
            name: "author",
            type: "reference",
            to: [{ type: "author" }],
        },
        {
            title: "Cover Image",
            name: "coverImg",
            type: "img",
            description: `Image shown on hero section,  as part of preview as well as when sharing links`,
        },
        {
            title: "Content",
            name: "content",
            type: "array",
            of: [
                {
                    type: "block",
                },
                {
                    type: "img",
                },
            ],
        },
        {
            title: "Tags",
            name: "tags",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "tag" }],
                },
            ],
        },
        {
            title: "Category",
            name: "category",
            type: "reference",
            to: [{ type: "category" }],
            options: {
                disableNew: true,
            },
        },
    ],
};
