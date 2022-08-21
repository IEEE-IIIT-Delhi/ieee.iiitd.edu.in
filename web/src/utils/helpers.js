import { parseISO, format } from "date-fns";

export async function getSanityContent({ query, variables = {} }) {
    const { data } = await fetch(
        `${import.meta.env.PUBLIC_SANITY_GRAPHQL_URL}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        }
    ).then((response) => response.json());
    return data;
}

export function formatBlogPostDate(date) {
    const dateString = parseISO(date, "YYYY/MM/dd");
    const formattedDateString = format(dateString, "dd MMMM yyyy");
    return `${formattedDateString}`;
}
