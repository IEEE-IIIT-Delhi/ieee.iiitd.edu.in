export default {
    name: "img",
    title: "Image",
    type: "image",
    options: {
        hotspot: true, // <-- Defaults to false
    },
    fields: [
        {
            name: "alt",
            type: "string",
            title: "Alternative text",
            options: {
                isHighlighted: true,
            },
        },
        {
            name: "caption",
            type: "string",
            title: "Caption",
            options: {
                isHighlighted: true, // <-- make this field easily accessible
            },
        },
        {
            // Editing this field will be hidden behind an "Edit"-button
            name: "attribution",
            type: "string",
            title: "Attribution",
        },
    ],
};
