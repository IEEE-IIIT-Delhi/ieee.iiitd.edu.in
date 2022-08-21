export default {
  title: "Feature",
  name: "feature",
  type: "object",
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Body",
      name: "body",
      type: "text",
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
  ],
};
