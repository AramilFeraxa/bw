import React from "react";
import Layout from "@/components/Layout/Layout";
import NotFoundPage from "@/components/404/NotFound";

export default function NotFound() {
    return (
        <Layout title="Strona nie znaleziona - 404" description="Przepraszamy, ale strona której szukasz nie istnieje.">
            <NotFoundPage />
        </Layout>
    );
}