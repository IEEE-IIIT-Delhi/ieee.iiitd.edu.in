export default {
    title: "Category",
    name: "category",
    type: "document",
    fields: [
        {
            title: "Category Name",
            name: "categoryName",
            type: "string",
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                //Change to schema title to automatically populate
                source: "categoryName",
                slugify: (input) =>
                    input
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
                        .slice(0, 200),
                validation: (Rule) => Rule.required(),
            },
        },
    ],
};
