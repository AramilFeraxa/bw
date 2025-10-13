import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import BlogPost from "@/components/BlogPage/BlogPost/ArticleShell";
import ProseRenderer from "@/components/BlogPage/BlogPost/ProseRenderer";
import TableOfContents from "@/components/BlogPage/BlogPost/TableOfContents";
import { postJakZadbacBezpieczenstwo } from "@/data/blog/jak-zadbac-o-bezpieczenstwo-swojego-dziecka-w-czasie-kolonii.data";
import { postsHomeTwo } from "@/data/blogMain";

export default function Page() {
    const post = postJakZadbacBezpieczenstwo;
    const previous = postsHomeTwo.filter((p) => p.href !== `/${post.slug}`).slice(0, 3);

    return (
        <Layout title={`${post.title} | Blog | bezpiecznywypoczynek.pl`} description={post.description}>
            <BlogPost
                title={post.title}
                author={post.author}
                date={post.date}
                hero={post.hero}
                previous={previous}
                childrenLeft={<ProseRenderer sections={post.sections} />}
                childrenRight={<TableOfContents sections={post.sections} />}
            />
        </Layout>
    );
}
