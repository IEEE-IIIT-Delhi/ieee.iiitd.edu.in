import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

import { formatBlogPostDate } from "../../utils/helpers";

const builder = imageUrlBuilder({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,
});

function urlFor(source) {
    return builder.image(source);
}

const serializers = {
    types: {
        img: (props) => (
            <>
                <figure className="my-8 lg:w-4/5 mx-auto">
                    <img
                        className="rounded-lg"
                        src={urlFor(props.value.asset)}
                        alt={props.value.alt}
                    />
                    <figcaption className="text-center pt-4 opacity-50">
                        {props.value.caption}
                    </figcaption>
                </figure>
            </>
        ),
        eventReport: (props) => (
            <div className="report rounded-xl p-6 md:p-8 flex gap-10 flex-col md:flex-row mb-12">
                {props.value.eventPoster !== undefined && (
                    <img
                        className="rounded-lg md:w-1/3 object-cover"
                        src={urlFor(props.value.eventPoster.asset)}
                        alt={props.value.eventPoster.alt}
                    />
                )}
                <div>
                    <h2 className="text-4xl font-bold mb-4">
                        {props.value.eventName}
                    </h2>
                    <div className="flex gap-5 flex-col md:flex-row">
                        <div
                            className={
                                "flex flex-col gap-2 " +
                                (props.value.winners !== undefined &&
                                    "md:w-1/2")
                            }
                        >
                            <div className="text-lg flex flex-col gap-1">
                                {props.value.eventDate !== undefined && (
                                    <p className="font-medium flex items-center gap-1">
                                        <i className="material-icons">event</i>{" "}
                                        {formatBlogPostDate(
                                            props.value.eventDate
                                        )}
                                    </p>
                                )}
                                {props.value.prizes !== undefined && (
                                    <p className="font-medium flex items-center gap-1">
                                        <i className="material-icons">
                                            currency_rupee
                                        </i>
                                        {props.value.prizes}
                                    </p>
                                )}
                            </div>
                            <p>{props.value.desc}</p>
                            {props.value.morePhotos !== null && (
                                <a href={props.value.morePhotos}>
                                    <span className="text-[#5e7eff] link-underline link-underline-blue link-underline:hover">
                                        More Photos {">>"}
                                    </span>
                                </a>
                            )}
                        </div>
                        {props.value.winners !== null &&
                            props.value.winners !== undefined &&
                            props.value.winners.length !== 0 && (
                                <div>
                                    <h3 className="font-medium text-xl flex items-center gap-1 pb-2">
                                        <i className="material-icons">
                                            emoji_events
                                        </i>
                                        Winners:{" "}
                                    </h3>
                                    {props.value.winners.map((winner) => (
                                        <div
                                            key={winner._key}
                                            className="flex gap-2 mb-2"
                                        >
                                            <p>
                                                {winner.position === 1 && (
                                                    <i className="material-icons text-yellow-500">
                                                        military_tech
                                                    </i>
                                                )}
                                                {winner.position === 2 && (
                                                    <i className="material-icons text-gray-400">
                                                        military_tech
                                                    </i>
                                                )}
                                                {winner.position === 3 && (
                                                    <i className="material-icons text-amber-700">
                                                        military_tech
                                                    </i>
                                                )}
                                                {winner.position !== 1 &&
                                                    winner.position !== 2 &&
                                                    winner.position !== 3 && (
                                                        <span className="pl-2">
                                                            {winner.position +
                                                                "."}
                                                        </span>
                                                    )}
                                            </p>
                                            <div>
                                                {winner.names.map((name) => (
                                                    <p key={winner._key}>
                                                        {name}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                    </div>
                </div>
            </div>
        ),
    },

    marks: {
        link: ({ children, value }) => {
            const rel = !value.href.startsWith("/")
                ? "noreferrer noopener"
                : undefined;
            return (
                <a
                    href={value.href}
                    rel={rel}
                    className="text-[#5e7eff] link-underline link-underline-blue link-underline:hover"
                >
                    {children}
                </a>
            );
        },
        code: ({ children }) => (
            <code className="font-mono text-sm bg-[#cce9f3] text-cus-orange-dark p-1 px-2 mx-1 rounded-md">
                {children}
            </code>
        ),
    },

    block: {
        // Ex. 1: customizing common block types
        h1: ({ children }) => (
            <h1 className="text-4xl font-bold mt-8 mb-3">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-3xl font-medium mt-7 mb-2">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl font-medium mt-6 mb-1">{children}</h3>
        ),
        normal: ({ children }) => (
            <p className="leading-relaxed mt-2 mb-4 opacity-70">{children}</p>
        ),
    },

    list: {
        // Ex. 1: customizing common list types
        bullet: ({ children }) => <ul className="mb-6">{children}</ul>,
        number: ({ children }) => <ol className="mb-4">{children}</ol>,
    },

    listItem: {
        // Ex. 1: customizing common list types
        bullet: ({ children }) => (
            <li
                className="my-3 ml-4 opacity-70"
                style={{ listStyleType: "circle" }}
            >
                {children}
            </li>
        ),
        number: ({ children }) => (
            <li
                className="my-3 ml-4 opacity-70"
                style={{ listStyleType: "number" }}
            >
                {children}
            </li>
        ),
    },
};

export default function BlockContent({ blocks }) {
    return <PortableText value={blocks} components={serializers} />;
}
