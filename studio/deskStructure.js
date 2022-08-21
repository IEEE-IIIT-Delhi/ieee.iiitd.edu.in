import S from "@sanity/desk-tool/structure-builder";

export default () =>
    S.list()
        .title("Base")
        .items([
            // Make a singleton of the document with ID “siteSettings”
            S.listItem()
                .title("Global Settings")
                .child(
                    S.document()
                        .schemaType("siteSettings")
                        .documentId("siteSettings")
                ),
            // Add a visual divider
            S.divider(),
            // Add the rest of the document types, but filter out the siteSettings type defined above
            ...S.documentTypeListItems().filter(
                (item) => item.getId() === "blog" || item.getId() === "event"
            ),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (item) =>
                    item.getId() === "tag" ||
                    item.getId() === "category" ||
                    item.getId() === "author" ||
                    item.getId() === "social"
            ),
            S.divider(),
        ]);
