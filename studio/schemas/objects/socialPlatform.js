export default {
    title: "Social Platform",
    name: "socialPlatform",
    type: "object",
    fields: [
        {
            title: "Platform Name",
            name: "name",
            type: "string",
            options: {
                list: [
                    { title: "GitHub", value: "github" },
                    { title: "Twitter", value: "twitter" },
                    { title: "LinkedIn", value: "linkedin" },
                ],
            },
        },
        {
            title: "Profile URL",
            name: "link",
            type: "url",
        },
    ],
};
