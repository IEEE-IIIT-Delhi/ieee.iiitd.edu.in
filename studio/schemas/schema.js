import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import * as plugs from "./plugs";
import * as objects from "./objects";
import * as documents from "./documents";

const allPlugs = Object.values(plugs).map((plug) => {
    return { ...plug, fields: plug.fields };
});

const allObjects = Object.values(objects).map((object) => {
    return { ...object, fields: object.fields };
});

const allDocuments = Object.values(documents).map((document) => {
    return { ...document, fields: document.fields };
});

export default createSchema({
    name: "default",

    types: schemaTypes.concat(allPlugs).concat(allObjects).concat(allDocuments),
});
