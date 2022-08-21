export default {
  title: "Features",
  name: "features",
  type: "object",
  fields: [
    {
      title: "Label",
      name: "label",
      description:
        "Used to label the module in the cms—no effect on the actual module.",
      type: "string",
    },
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Subheading",
      name: "subheading",
      type: "text",
    },
    {
      title: "Feature List",
      name: "featureList",
      type: "array",
      of: [{ type: "feature" }],
    },
  ],
};
