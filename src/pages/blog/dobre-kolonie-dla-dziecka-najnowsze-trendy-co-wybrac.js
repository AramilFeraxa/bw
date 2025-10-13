import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import ArticleShell from "@/components/BlogPage/BlogPost/ArticleShell";
import ProseRenderer from "@/components/BlogPage/BlogPost/ProseRenderer";
import TableOfContents from "@/components/BlogPage/BlogPost/TableOfContents";
import { postDobreKolonie } from "@/data/blog/dobre-kolonie-dla-dziecka-najnowsze-trendy-co-wybrac.data";
import { postsHomeTwo } from "@/data/blogMain";

export default function Page() {
    const post = postDobreKolonie;
    const previous = postsHomeTwo.filter((p) => p.href !== `/${post.slug}`).slice(0, 3);

    return (
        <Layout title={`${post.title} | Blog | bezpiecznywypoczynek.pl`} description={post.description}>

            <ArticleShell
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
