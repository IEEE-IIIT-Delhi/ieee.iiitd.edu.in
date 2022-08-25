export default {
    title: "Winner",
    name: "winner",
    type: "document",
    fields: [
        {
            title: "Category",
            name: "category",
            type: "string",
            description: `Leave empty if this is a general winner or there are not categories at all`,
        },
        {
            title: "Position",
            name: "position",
            type: "number",
            description: `Position of the winner`,
        },
        {
            title: "Names",
            name: "names",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
        },
    ],
};
