import React from "react";
import { GetStaticProps, GetStaticPropsResult } from "next";

import clientPromise from "@/lib/mddb.mjs";

import Hero from "@/components/custom/Hero"
import TernaryPlot from "@/components/custom/TernaryPlot"
import CircularVis from "@/components/custom/CircularVis"
import ProfileSearch from "@/components/custom/ProfileSearch"
import MdxComponent from "@/components/MdxComponent";

import type { CustomAppProps } from "./_app";
import { hasRequiredProfileFields } from "@/lib/temp/hasRequiredProfileFields";


interface Props extends CustomAppProps {
    profiles: any; // TODO: type
    topics: any; // TODO: type
}

const HomePage: React.FC<Props> = ({ profiles, topics }) => {
    return (
        <>
            <Hero />
            <main className="prose dark:prose-invert mx-auto px-2 sm:px-6 lg:px-8">

                <section id="mapping-the-space" className="mt-12 sm:mt-24">
                    <h1 className="text-center">Mapping the Space</h1>
                    <div className="my-6 sm:my-8 lg:my-12">
                        <TernaryPlot profiles={profiles} />
                    </div>
                    <MdxComponent>
                        This visualization maps organizations based on their approach to social change. There are three broad categories of approach: inner, cultural and systems oriented. [Read more about the visualization.](/vis)
                    </MdxComponent>
                </section>

                <section id="overview" className="mt-12 sm:mt-24">
                    <MdxComponent>
                        {`
# Overview of the Ecosystem

We sense that a new ecosystem, or ecosystem of ecosystems, is emerging. A growing number of people, organizations and initiatives are taking alternative approaches to social change, which diverge from and go beyond the more established spaces in civil society and the social economy.

The ecosystem we explore is still emerging and ill-defined. There is no one name for this ecosystem, with different organizations favouring different terms. However, there is a defining feature of this ecosystem, the shared problem being tackled by all organizations within it: the polycrisis.

As mapped it is quite broad – even disparate. Nevertheless, there are commonalities.

Most importantly, this ecosystem has a **_novel_** **approach to social change**. Specifically, an approach that is simultaneously **paradigmatic**, **integrated**, and **pragmatic**.

Secondly, there are a variety of commonalities in outlook and approach. The most noteworthy identified so far we have termed: post-individualism, (w)holism and culture-making (in the form of new norms and narratives).

There is also a focus on complexity, systems and emergence, on developmental models, spirituality and practice, and on sensemaking, different forms of knowledge and global-local activism. Other commonalities include an interest in decentralized governance, new narratives, alternative social imaginaries and regenerative culture.

Nonetheless, the boundaries, relationships and patterns of influences in the ecosystem remain blurry, with our present awareness feeling like it only touches the tip of the iceberg. Questions that remain unclear include who exactly comprises the ecosystem, how activities and visions relate to one another, where the coherences and tensions lie and how it might evolve.

## What is Novel in the Approach to Social Change?

The defining feature of this ecosystem is its **_novel_** **approach to social change**. Specifically, the combination of being paradigmatic, integrated, and pragmatic. We emphasize that it is the combination of all three that is important and distinctive.

### Paradigmatic

There is the belief that the change required is **paradigmatic**. That is to say, it seeks a transition of the entire social paradigm at both a systems and "ontological" (worldview and narratives) level. This contrasts with approaches that either simply seek reform e.g. making market liberalism better, or transformation that is deep but only in a given area e.g. transforming our structures of economic production and ownership but leaving base assumptions about who we are and how we relate to the natural world untouched.

### Integrated

It identifies the need to incorporate methods and routes to change spanning a variety of fields and "locations" (e.g. personal, cultural, institutional etc). One central and basic example common to most (though not all) actors is the belief that inner and outer transformation have to go hand in hand. In Integral terms it is "all-quadrant" and in particular, prioritises the neglected "inner" quadrants.

### Pragmatic

Participants are actively engaging with wider society for the purposes of social transformation. This sets it apart from groups which may be doing large amount of inner work but without connecting this directly and explicitly to broader social change, for example certain parts of the spiritual, developmental and psychedelic communities.

## What are Some of its Core Characteristics?

Beyond the three pillars listed above, we also identify three high-level commonalities in outlook and approach: post-individualism, (w)holism and counterculturalism.

### Post-individualism

Post-individualism takes two forms. First, a focus on groups rather than just individuals as a primary unit of analysis, and the idea that we must shift our engagement outwards from ourselves and towards a more widely beneficial orientation. Note that, unlike traditional "collectivism" (a term we previously used but abandoned due to its connotations), this does not entail abandonment of individualism, but the inclusion of its positive aspects back into group-centric concepts. The second form of post-individualism shows up as a broad commitment across the ecosystem to actually operating in networked and communal ways.

### Wholism

What we have termed (w)holism (we use the 'w' to signify consideration of wholes, as well as operating holistically) refers to the views taken of social phenomena, social change and simply the world at large. There is a widely shared understanding of the world as a gestalt object, be this under the banner of interbeing used by Buddhist and more spiritual actors, the complex systems terminology used by groups such as the International Bateson Institute or the 'holon' and integral' labels taken up by Ken Wilber and the integral movement.

As can be seen by the paradigmatic focus and integrated approaches which we have identified as delineating the ecosystem itself, this (w)holism gives rise to a problem diagnosis which targets a deeper whole giving rise to negative social outcomes. These fundamental ways of approaching social change stem from a (w)holistic perspective more broadly, a fact which is further seen in the use of terms such as the metacrisis or polycrisis.

### Culture-making

Counterculturalism for us is a desire to go beyond the dominant norms and narratives. This includes the norms of the progressive movement more broadly -- perhaps its most surprising and interesting aspect. We also emphasize the culture in counterculturalism: for us, it is concerned with shifting the very foundations, worldviews and assumptions of our current order. In this sense it is a form of "culture-making".

To use the Wilberian terminology, there is a desire to move beyond the 'green' developmental stage which is currently taken to characterise Western liberal societies, and much of the progressive movement as a whole. This leads actors in the ecosystem to be more open to questioning or dispute social and political positions that may be understood as norms not just in wider society, but also those (for example understandings of inclusivity) within progressive circles themselves.

## Language and Buzzwords

The language of the ecosystem draws heavily on concepts such as complexity, systems and emergence, developmental models, spirituality and practice, and on sensemaking, different forms of knowledge and ‘cosmo-local’ activism. Other commonalities include an interest in decentralised governance, new narratives, alternative social imaginaries and regenerative culture.

## Activities

Emerging organizations and individuals are opting towards 'teal' style collaboration and community building in order to maximize resources as a generalist, lateral way of operating comes into view as a more effective way of tackling systemic problems.

We have identified four major areas of activity: physical spaces, research, media/publishing and events. Nonetheless, it has been notable that many organizations have shifted to multi-channel working across a number of these e.g. producing media content as well as running retreats and events.
                    `}
                    </MdxComponent>
                </section>

                <section id="visualizing-ecosystem" className="mt-12 sm:mt-24">
                    <h1 className="text-center">
                        Visualizing the Ecosystem
                    </h1>
                    <MdxComponent>
                        This visualization maps organizations based on their primary topic. Click to zoom in or out. Hover over a circle to see its name. [Read more about the visualization and the topics here](/vis#visualizing-the-ecosystem-by-topic)
                    </MdxComponent>
                    <div className="my-6 sm:my-8 lg:my-12">
                        <CircularVis profiles={profiles} topics={topics} />
                    </div>
                </section>

            </main>

            <div id="profiles" className="mt-12 sm:mt-24 prose max-w-5xl mx-auto">
                <h1 className="text-center">
                    Profiles
                </h1>
                <ProfileSearch profiles={profiles} />
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async (): Promise<
    GetStaticPropsResult<Props>
> => {

    const mddb = await clientPromise;

    const profileFiles = await mddb.getFiles({ folder: "profiles" });
    const profiles = profileFiles.reduce((acc, file) => {
        // TODO temporary hack - some of the profiles (created by Matthew) have incorrect metadata
        if (!hasRequiredProfileFields(file.metadata)) {
            return acc;
        }
        if (file.metadata.curation_status.includes('N') || file.metadata.curation_status.includes('?')) {
            return acc;
        }
        acc.push({
            ...file.metadata,
            image: file.metadata.image?.url ?? file.metadata.image,
            urlPath: file.url_path,
        });
        return acc;
    }, []);

    const topicFiles = await mddb.getFiles({ folder: "topics" });
    const topics = topicFiles.map((file) => {
        return {
            ...file.metadata,
            urlPath: file.url_path,
        };
    });

    return {
        props: {
            meta: {
                urlPath: "/",
                showToc: false,
                showEditLink: false,
                showSidebar: false,
                showComments: false,
            },
            profiles,
            topics,
        },
    };
};

export default HomePage;
