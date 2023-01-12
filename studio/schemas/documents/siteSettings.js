export default {
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Site Title",
            type: "string",
        },
        {
            title: "Meta Image",
            name: "metaImage",
            type: "img",
            description: `Meta Image to be shown as preview when sharing links`,
        },
        {
            title: "Meta description",
            name: "metaDesc",
            type: "text",
            description: `Watch the length - Same as with headlines, Google will keep the first 150-160 characters of your meta description, and cut the rest. Ensure that the important aspects are included early on to maximize searcher interest.`,
        },
    ],
};
