export default {
    title: "Winner",
    name: "winner",
    type: "document",
    fields: [
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
