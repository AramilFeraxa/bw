import Layout from "@/components/Layout/Layout";
import BlogPost from "@/components/BlogPage/BlogPost/ArticleShell";
import ProseRenderer from "@/components/BlogPage/BlogPost/ProseRenderer";
import TableOfContents from "@/components/BlogPage/BlogPost/TableOfContents";
import { postJakWybracOrganizatora } from "@/data/blog/jak-wybrac-organizatora-kolonii-dla-swojego-dziecka.data";
import { postsHomeTwo } from "@/data/blogMain";

export default function Page() {
    const previous = postsHomeTwo
        .filter((p) => p.href !== `/${postJakWybracOrganizatora.slug}`)
        .slice(0, 3);

    return (
        <Layout
            title={`${postJakWybracOrganizatora.title} | Blog | bezpiecznywypoczynek.pl`}
            description={postJakWybracOrganizatora.description}
        >
            <BlogPost
                title={postJakWybracOrganizatora.title}
                author={postJakWybracOrganizatora.author}
                date={postJakWybracOrganizatora.date}
                hero={postJakWybracOrganizatora.hero}
                previous={previous}
                childrenLeft={<ProseRenderer sections={postJakWybracOrganizatora.sections} />}
                childrenRight={<TableOfContents sections={postJakWybracOrganizatora.sections} />}
            />
        </Layout>
    );
}
