import { PortableText } from "@portabletext/react";

const serializers = {
    types: {},
};

export default function BlockContent({ blocks }) {
    return <PortableText value={blocks} components={serializers} />;
}
